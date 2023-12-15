import { BigNumber, ethers } from 'ethers'

import { Bytes } from '../types'

import { BaseValidationData } from './types'

const GENERAL_DUTCH_ORDER_VALIDATION_ABI = [
  'tuple(' +
    ['uint256', 'uint256', 'uint256', 'uint256', 'uint256', 'uint256'].join(
      ','
    ) +
    ')',
]

export class GeneralDutchOrderValidationData extends BaseValidationData {
  constructor(
    public baseSqrtPrice: BigNumber,
    public startSlippageTolerance: number,
    public endSlippageTolerance: number,
    public maxAcceptableSqrtPriceRange: number,
    public startTime: number,
    public endTime: number
  ) {
    super()
  }

  serialize(): Bytes {
    const abiCoder = new ethers.utils.AbiCoder()

    return abiCoder.encode(GENERAL_DUTCH_ORDER_VALIDATION_ABI, [
      [
        this.baseSqrtPrice,
        this.startSlippageTolerance,
        this.endSlippageTolerance,
        this.maxAcceptableSqrtPriceRange,
        this.startTime,
        this.endTime,
      ],
    ]) as Bytes
  }
}
