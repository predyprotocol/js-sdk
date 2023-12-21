import { PERMIT2_MAPPING } from '@uniswap/uniswapx-sdk'
import { decodeAbiParameters, encodeAbiParameters } from 'viem'

import { Address, Bytes } from '../types'

import {
  ORDER_INFO_TYPES,
  PERMIT_WITNESS_TRANSFER_FROM_TYPES,
  PerpOrderParams,
  TOKEN_PERMISSION_TYPES,
} from './types'

const PERP_ORDER_TYPES_SINGLE = [
  { name: 'info', type: 'OrderInfo' },
  { name: 'pairId', type: 'uint64' },
  { name: 'entryTokenAddress', type: 'address' },
  { name: 'tradeAmount', type: 'int256' },
  { name: 'marginAmount', type: 'int256' },
  { name: 'takeProfitPrice', type: 'uint256' },
  { name: 'stopLossPrice', type: 'uint256' },
  { name: 'slippageTolerance', type: 'uint64' },
  { name: 'leverage', type: 'uint8' },
  { name: 'validatorAddress', type: 'address' },
  { name: 'validationData', type: 'bytes' },
]

export const PERP_ORDER_TYPES = {
  PerpOrder: PERP_ORDER_TYPES_SINGLE,
  OrderInfo: ORDER_INFO_TYPES,
}

export const PERP_ORDER_PERMIT2_TYPES = {
  PermitWitnessTransferFrom: PERMIT_WITNESS_TRANSFER_FROM_TYPES('PerpOrder'),
  OrderInfo: ORDER_INFO_TYPES,
  PerpOrder: PERP_ORDER_TYPES_SINGLE,
  TokenPermissions: TOKEN_PERMISSION_TYPES,
} as const

const PERP_ORDER_ABI = [
  {
    name: 'PerpOrder',
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
      { name: 'marginAmount', type: 'int256' },
      { name: 'takeProfitPrice', type: 'uint256' },
      { name: 'stopLossPrice', type: 'uint256' },
      { name: 'slippageTolerance', type: 'uint64' },
      { name: 'leverage', type: 'uint8' },
      { name: 'validatorAddress', type: 'address' },
      { name: 'validationData', type: 'bytes' },
    ],
  },
]

export class PerpOrder {
  public permit2Address: string

  constructor(
    public readonly perpOrder: PerpOrderParams,
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
    return encodeAbiParameters(PERP_ORDER_ABI, [this.perpOrder])
  }

  static parse(encoded: Bytes, chainId: number, permit2?: string): PerpOrder {
    const decoded = decodeAbiParameters(PERP_ORDER_ABI, encoded)

    const order = decoded[0] as PerpOrderParams

    return new PerpOrder(order, chainId, permit2)
  }

  public witnessInfo() {
    return {
      info: this.perpOrder.info,
      pairId: this.perpOrder.pairId,
      entryTokenAddress: this.perpOrder.entryTokenAddress,
      tradeAmount: this.perpOrder.tradeAmount,
      marginAmount: this.perpOrder.marginAmount,
      takeProfitPrice: this.perpOrder.takeProfitPrice,
      stopLossPrice: this.perpOrder.stopLossPrice,
      slippageTolerance: this.perpOrder.slippageTolerance,
      leverage: this.perpOrder.leverage,
      validatorAddress: this.perpOrder.validatorAddress,
      validationData: this.perpOrder.validationData,
    }
  }

  toPermit() {
    return {
      permitted: {
        token: this.perpOrder.entryTokenAddress,
        amount:
          this.perpOrder.marginAmount > 0n ? this.perpOrder.marginAmount : 0n,
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
      types: PERP_ORDER_PERMIT2_TYPES,
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
