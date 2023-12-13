import { ethers } from 'ethers'

import { BaseValidationData } from './types'

const LIMIT_ORDER_VALIDATION_ABI = [
  'tuple(' + ['uint256', 'uint256', 'uint256', 'uint256'].join(',') + ')',
]

export class LimitOrderValidationData extends BaseValidationData {
  constructor(
    public triggerPrice: number,
    public triggerPriceSqrt: number,
    public limitPrice: number,
    public limitPriceSqrt: number
  ) {
    super()
  }

  serialize(): string {
    const abiCoder = new ethers.utils.AbiCoder()

    return abiCoder.encode(LIMIT_ORDER_VALIDATION_ABI, [
      this.triggerPrice,
      this.triggerPriceSqrt,
      this.limitPrice,
      this.limitPriceSqrt,
    ])
  }
}
