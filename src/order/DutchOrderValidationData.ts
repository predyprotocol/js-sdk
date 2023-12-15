import { BigNumber, ethers } from 'ethers'

import { Bytes } from '../types'

import { BaseValidationData } from './types'

const DUTCH_ORDER_VALIDATION_ABI = [
  'tuple(' + ['uint256', 'uint256', 'uint256', 'uint256'].join(',') + ')',
]

export class DutchOrderValidationData extends BaseValidationData {
  constructor(
    public startPrice: BigNumber,
    public endPrice: BigNumber,
    public startTime: number,
    public endTime: number
  ) {
    super()
  }

  serialize(): Bytes {
    const abiCoder = new ethers.utils.AbiCoder()

    return abiCoder.encode(DUTCH_ORDER_VALIDATION_ABI, [
      [this.startPrice, this.endPrice, this.startTime, this.endTime],
    ]) as Bytes
  }
}
