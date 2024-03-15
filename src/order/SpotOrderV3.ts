import { decodeAbiParameters, encodeAbiParameters } from 'viem'

import { PERMIT2_MAPPING } from '../constants'
import { Address, Bytes } from '../types'
import { abs } from '../utils'

import {
  ORDER_INFO_TYPES,
  PERMIT_WITNESS_TRANSFER_FROM_TYPES,
  SpotOrderV3Params,
  TOKEN_PERMISSION_TYPES,
} from './types'

const SPOT_ORDER_V3_TYPES_SINGLE = [
  { name: 'info', type: 'OrderInfo' },
  { name: 'quoteToken', type: 'address' },
  { name: 'baseToken', type: 'address' },
  { name: 'baseTokenAmount', type: 'int256' },
  { name: 'quoteTokenAmount', type: 'uint256' },
  { name: 'limitQuoteTokenAmount', type: 'uint256' },
  { name: 'auctionData', type: 'bytes' },
]
export const SPOT_ORDER_V3_TYPES = {
  SpotOrder: SPOT_ORDER_V3_TYPES_SINGLE,
  OrderInfo: ORDER_INFO_TYPES,
}

export const SPOT_ORDER_V3_PERMIT2_TYPES = {
  PermitWitnessTransferFrom: PERMIT_WITNESS_TRANSFER_FROM_TYPES('SpotOrder'),
  OrderInfo: ORDER_INFO_TYPES,
  SpotOrder: SPOT_ORDER_V3_TYPES_SINGLE,
  TokenPermissions: TOKEN_PERMISSION_TYPES,
} as const

const SPOT_ORDER_ABI = [
  {
    name: 'SpotOrder',
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
      { name: 'quoteToken', type: 'address' },
      { name: 'baseToken', type: 'address' },
      { name: 'baseTokenAmount', type: 'int256' },
      { name: 'quoteTokenAmount', type: 'uint256' },
      { name: 'limitQuoteTokenAmount', type: 'uint256' },
      { name: 'auctionData', type: 'bytes' },
    ],
  },
]

export class SpotOrderV3 {
  public permit2Address: Address

  constructor(
    public readonly spotOrder: SpotOrderV3Params,
    readonly chainId: number,
    readonly _permit2Address?: Address
  ) {
    if (_permit2Address) {
      this.permit2Address = _permit2Address
    } else {
      this.permit2Address = PERMIT2_MAPPING[chainId] as Address
    }
  }

  serialize(): Bytes {
    return encodeAbiParameters(SPOT_ORDER_ABI, [this.spotOrder]) as Bytes
  }

  static parse(
    encoded: Bytes,
    chainId: number,
    permit2?: Address
  ): SpotOrderV3 {
    const decoded = decodeAbiParameters(SPOT_ORDER_ABI, encoded)

    const order = decoded[0] as SpotOrderV3Params

    return new SpotOrderV3(order, chainId, permit2)
  }

  public getMarketOrderParams() {
    return {
      trader: this.spotOrder.info.trader,
      nonce: this.spotOrder.info.nonce,
      deadline: this.spotOrder.info.deadline,
      quoteToken: this.spotOrder.quoteToken,
      baseToken: this.spotOrder.baseToken,
      baseTokenAmount: this.spotOrder.baseTokenAmount,
      quoteTokenAmount: this.spotOrder.quoteTokenAmount,
      auctionData: this.spotOrder.auctionData,
    }
  }

  public getLimitOrderParams() {
    return {
      trader: this.spotOrder.info.trader,
      nonce: this.spotOrder.info.nonce,
      deadline: this.spotOrder.info.deadline,
      quoteToken: this.spotOrder.quoteToken,
      baseToken: this.spotOrder.baseToken,
      baseTokenAmount: this.spotOrder.baseTokenAmount,
      quoteTokenAmount: this.spotOrder.quoteTokenAmount,
      limitQuoteTokenAmount: this.spotOrder.limitQuoteTokenAmount,
    }
  }

  public witnessInfo() {
    return {
      info: this.spotOrder.info,
      quoteToken: this.spotOrder.quoteToken,
      baseToken: this.spotOrder.baseToken,
      baseTokenAmount: this.spotOrder.baseTokenAmount,
      quoteTokenAmount: this.spotOrder.quoteTokenAmount,
      limitQuoteTokenAmount: this.spotOrder.limitQuoteTokenAmount,
      auctionData: this.spotOrder.auctionData,
    }
  }

  toPermit() {
    let token = ''
    let amount = 0n

    if (this.spotOrder.baseTokenAmount > 0n) {
      token = this.spotOrder.quoteToken
      amount = this.spotOrder.quoteTokenAmount
    } else {
      token = this.spotOrder.baseToken
      amount = abs(this.spotOrder.baseTokenAmount)
    }

    return {
      permitted: {
        token,
        amount,
      },
      spender: this.spotOrder.info.market,
      nonce: this.spotOrder.info.nonce,
      deadline: this.spotOrder.info.deadline,
    }
  }

  permitData() {
    const permit = this.toPermit()

    return {
      primaryType: 'PermitWitnessTransferFrom',
      domain: {
        name: 'Permit2',
        chainId: this.chainId,
        verifyingContract: this.permit2Address,
      },
      types: SPOT_ORDER_V3_PERMIT2_TYPES,
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
