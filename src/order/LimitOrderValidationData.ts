import { decodeAbiParameters, encodeAbiParameters } from 'viem'

import { Bytes } from '../types'

import { BaseValidationData } from './types'

export const LIMIT_ORDER_VALIDATION_ABI = [
  {
    name: 'LimitOrderValidationData',
    type: 'tuple',
    components: [
      { name: 'triggerPrice', type: 'uint256' },
      { name: 'triggerPriceSqrt', type: 'uint256' },
      { name: 'limitPrice', type: 'uint256' },
      { name: 'limitPriceSqrt', type: 'uint256' },
    ],
  },
]

export class LimitOrderValidationData extends BaseValidationData {
  constructor(
    public triggerPrice: bigint,
    public triggerPriceSqrt: bigint,
    public limitPrice: bigint,
    public limitPriceSqrt: bigint
  ) {
    super()
  }

  serialize(): Bytes {
    return encodeAbiParameters(LIMIT_ORDER_VALIDATION_ABI, [
      {
        triggerPrice: this.triggerPrice,
        triggerPriceSqrt: this.triggerPriceSqrt,
        limitPrice: this.limitPrice,
        limitPriceSqrt: this.limitPriceSqrt,
      },
    ]) as Bytes
  }

  static deserialize(validationData: Bytes) {
    const decoded = decodeAbiParameters(
      LIMIT_ORDER_VALIDATION_ABI,
      validationData
    )[0] as {
      triggerPrice: bigint
      triggerPriceSqrt: bigint
      limitPrice: bigint
      limitPriceSqrt: bigint
    }

    return new LimitOrderValidationData(
      decoded.triggerPrice,
      decoded.triggerPriceSqrt,
      decoded.limitPrice,
      decoded.limitPriceSqrt
    )
  }
}
