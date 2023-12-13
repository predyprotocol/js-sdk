import { BigNumber, ethers } from 'ethers'

import { Bytes } from '../types'

import { BaseValidationData } from './types'

const LIMIT_ORDER_VALIDATION_ABI = [
  'tuple(' + ['uint256', 'uint256', 'uint256', 'uint256'].join(',') + ')',
]

export class LimitOrderValidationData extends BaseValidationData {
  constructor(
    public triggerPrice: BigNumber,
    public triggerPriceSqrt: BigNumber,
    public limitPrice: BigNumber,
    public limitPriceSqrt: BigNumber
  ) {
    super()
  }

  serialize(): Bytes {
    const abiCoder = new ethers.utils.AbiCoder()

    return abiCoder.encode(LIMIT_ORDER_VALIDATION_ABI, [
      this.triggerPrice,
      this.triggerPriceSqrt,
      this.limitPrice,
      this.limitPriceSqrt,
    ]) as Bytes
  }
}
