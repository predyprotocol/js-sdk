import { decodeAbiParameters, encodeAbiParameters } from 'viem'

import { PERMIT2_MAPPING } from '../constants'
import { Address, Bytes } from '../types'

import {
  ORDER_INFO_TYPES,
  PERMIT_WITNESS_TRANSFER_FROM_TYPES,
  PredictOrderParams,
  TOKEN_PERMISSION_TYPES,
} from './types'

const PREDICT_ORDER_TYPES_SINGLE = [
  { name: 'info', type: 'OrderInfo' },
  { name: 'pairId', type: 'uint64' },
  { name: 'duration', type: 'uint64' },
  { name: 'entryTokenAddress', type: 'address' },
  { name: 'tradeAmount', type: 'int256' },
  { name: 'tradeAmountSqrt', type: 'int256' },
  { name: 'marginAmount', type: 'uint256' },
  { name: 'validatorAddress', type: 'address' },
  { name: 'validationData', type: 'bytes' },
]

export const PREDICT_ORDER_TYPES = {
  PredictOrder: PREDICT_ORDER_TYPES_SINGLE,
  OrderInfo: ORDER_INFO_TYPES,
}

export const PREDICT_ORDER_PERMIT2_TYPES = {
  PermitWitnessTransferFrom: PERMIT_WITNESS_TRANSFER_FROM_TYPES('PredictOrder'),
  OrderInfo: ORDER_INFO_TYPES,
  PredictOrder: PREDICT_ORDER_TYPES_SINGLE,
  TokenPermissions: TOKEN_PERMISSION_TYPES,
} as const

const PREDICT_ORDER_ABI = [
  {
    name: 'PredictOrder',
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
      { name: 'duration', type: 'uint64' },
      { name: 'entryTokenAddress', type: 'address' },
      { name: 'tradeAmount', type: 'int256' },
      { name: 'tradeAmountSqrt', type: 'int256' },
      { name: 'marginAmount', type: 'uint256' },
      { name: 'validatorAddress', type: 'address' },
      { name: 'validationData', type: 'bytes' },
    ],
  },
]

export class PredictOrder {
  public permit2Address: string

  constructor(
    public readonly predictOrder: PredictOrderParams,
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
    return encodeAbiParameters(PREDICT_ORDER_ABI, [this.predictOrder])
  }

  static parse(
    encoded: Bytes,
    chainId: number,
    permit2?: string
  ): PredictOrder {
    const decoded = decodeAbiParameters(PREDICT_ORDER_ABI, encoded)

    const order = decoded[0] as PredictOrderParams

    return new PredictOrder(order, chainId, permit2)
  }

  public witnessInfo() {
    return {
      info: this.predictOrder.info,
      pairId: this.predictOrder.pairId,
      duration: this.predictOrder.duration,
      entryTokenAddress: this.predictOrder.entryTokenAddress,
      tradeAmount: this.predictOrder.tradeAmount,
      tradeAmountSqrt: this.predictOrder.tradeAmountSqrt,
      marginAmount: this.predictOrder.marginAmount,
      validatorAddress: this.predictOrder.validatorAddress,
      validationData: this.predictOrder.validationData,
    }
  }

  toPermit() {
    return {
      permitted: {
        token: this.predictOrder.entryTokenAddress,
        amount:
          this.predictOrder.marginAmount > 0n
            ? this.predictOrder.marginAmount
            : 0n,
      },
      spender: this.predictOrder.info.market,
      nonce: this.predictOrder.info.nonce,
      deadline: this.predictOrder.info.deadline,
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
      types: PREDICT_ORDER_PERMIT2_TYPES,
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
