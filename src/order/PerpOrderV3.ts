import { solidityPack } from 'ethers/lib/utils'
import { decodeAbiParameters, encodeAbiParameters } from 'viem'

import { PERMIT2_MAPPING } from '../constants'
import { Address, Bytes } from '../types'

import {
  ORDER_INFO_TYPES,
  PERMIT_WITNESS_TRANSFER_FROM_TYPES,
  PerpOrderV3Params,
  TOKEN_PERMISSION_TYPES,
} from './types'

const PERP_ORDER_V3_TYPES_SINGLE = [
  { name: 'info', type: 'OrderInfo' },
  { name: 'pairId', type: 'uint64' },
  { name: 'entryTokenAddress', type: 'address' },
  { name: 'tradeAmount', type: 'int256' },
  { name: 'marginAmount', type: 'uint256' },
  { name: 'limitPrice', type: 'uint256' },
  { name: 'stopPrice', type: 'uint256' },
  { name: 'leverage', type: 'uint8' },
  { name: 'reduceOnly', type: 'bool' },
  { name: 'closePosition', type: 'bool' },
  { name: 'auctionData', type: 'bytes' },
]

export const PERP_ORDER_V3_TYPES = {
  PerpOrderV3: PERP_ORDER_V3_TYPES_SINGLE,
  OrderInfo: ORDER_INFO_TYPES,
}

export const PERP_ORDER_V3_PERMIT2_TYPES = {
  PermitWitnessTransferFrom: PERMIT_WITNESS_TRANSFER_FROM_TYPES('PerpOrderV3'),
  OrderInfo: ORDER_INFO_TYPES,
  PerpOrderV3: PERP_ORDER_V3_TYPES_SINGLE,
  TokenPermissions: TOKEN_PERMISSION_TYPES,
} as const

const PERP_ORDER_V3_ABI = [
  {
    name: 'PerpOrderV3',
    type: 'tuple',
    components: [
      {
        name: 'info',
        type: 'tuple',
        components: [
          { name: 'market', type: 'address' },
          { name: 'trader', type: 'address' },
          { name: 'nonce', type: 'uint256' },
          { name: 'deadline', type: 'uint256' },
        ],
      },
      { name: 'pairId', type: 'uint64' },
      { name: 'entryTokenAddress', type: 'address' },
      { name: 'tradeAmount', type: 'int256' },
      { name: 'marginAmount', type: 'uint256' },
      { name: 'limitPrice', type: 'uint256' },
      { name: 'stopPrice', type: 'uint256' },
      { name: 'leverage', type: 'uint8' },
      { name: 'reduceOnly', type: 'bool' },
      { name: 'closePosition', type: 'bool' },
      { name: 'auctionData', type: 'bytes' },
    ],
  },
]

export class PerpOrderV3 {
  public permit2Address: string

  constructor(
    public readonly perpOrder: PerpOrderV3Params,
    readonly chainId: number,
    readonly _permit2Address?: string
  ) {
    if (_permit2Address) {
      this.permit2Address = _permit2Address
    } else {
      this.permit2Address = PERMIT2_MAPPING[chainId]
    }
  }

  serialize(): Bytes {
    return encodeAbiParameters(PERP_ORDER_V3_ABI, [this.perpOrder])
  }

  static parse(encoded: Bytes, chainId: number, permit2?: string): PerpOrderV3 {
    const decoded = decodeAbiParameters(PERP_ORDER_V3_ABI, encoded)

    const order = decoded[0] as PerpOrderV3Params

    return new PerpOrderV3(order, chainId, permit2)
  }

  public getOptimizedParams() {
    return {
      trader: this.perpOrder.info.trader,
      nonce: this.perpOrder.info.nonce,
      tradeAmount: this.perpOrder.tradeAmount,
      marginAmount: this.perpOrder.marginAmount,
      limitPrice: this.perpOrder.limitPrice,
      stopPrice: this.perpOrder.stopPrice,
      data1: this.getOptimizedData(),
      auctionData: this.perpOrder.auctionData,
    }
  }

  getOptimizedData() {
    return solidityPack(
      ['uint104', 'uint8', 'uint8', 'uint8', 'uint64', 'uint64'],
      [
        0,
        this.perpOrder.closePosition ? 1 : 0,
        this.perpOrder.reduceOnly ? 1 : 0,
        this.perpOrder.leverage,
        this.perpOrder.pairId,
        this.perpOrder.info.deadline,
      ]
    ) as Bytes
  }

  public witnessInfo() {
    return {
      info: this.perpOrder.info,
      pairId: this.perpOrder.pairId,
      entryTokenAddress: this.perpOrder.entryTokenAddress,
      tradeAmount: this.perpOrder.tradeAmount,
      marginAmount: this.perpOrder.marginAmount,
      limitPrice: this.perpOrder.limitPrice,
      stopPrice: this.perpOrder.stopPrice,
      leverage: this.perpOrder.leverage,
      reduceOnly: this.perpOrder.reduceOnly,
      closePosition: this.perpOrder.closePosition,
      auctionData: this.perpOrder.auctionData,
    }
  }

  toPermit() {
    return {
      permitted: {
        token: this.perpOrder.entryTokenAddress,
        amount: this.perpOrder.marginAmount,
      },
      spender: this.perpOrder.info.market,
      nonce: this.perpOrder.info.nonce,
      deadline: this.perpOrder.info.deadline,
    }
  }

  /// @dev Returns the EIP712 typed data and value for viem
  permitData() {
    const permit = this.toPermit()

    return {
      primaryType: 'PermitWitnessTransferFrom',
      domain: {
        name: 'Permit2',
        chainId: this.chainId,
        verifyingContract: this.permit2Address as Address,
      },
      types: PERP_ORDER_V3_PERMIT2_TYPES,
      message: {
        deadline: permit.deadline,
        nonce: permit.nonce,
        permitted: permit.permitted,
        spender: permit.spender,
        witness: this.witnessInfo(),
      },
    }
  }
}
