import { encodeAbiParameters } from 'viem'

import { Bytes } from '../types'

import { BaseValidationData } from './types'

const GENERAL_DUTCH_ORDER_VALIDATION_ABI = [
  {
    name: 'GeneralDutchOrderValidationData',
    type: 'tuple',
    components: [
      { name: 'baseSqrtPrice', type: 'uint256' },
      { name: 'startSlippageTolerance', type: 'uint256' },
      { name: 'endSlippageTolerance', type: 'uint256' },
      { name: 'maxAcceptableSqrtPriceRange', type: 'uint256' },
      { name: 'startTime', type: 'uint256' },
      { name: 'endTime', type: 'uint256' },
    ],
  },
]

export class GeneralDutchOrderValidationData extends BaseValidationData {
  constructor(
    public baseSqrtPrice: bigint,
    public startSlippageTolerance: number,
    public endSlippageTolerance: number,
    public maxAcceptableSqrtPriceRange: number,
    public startTime: number,
    public endTime: number
  ) {
    super()
  }

  serialize(): Bytes {
    return encodeAbiParameters(GENERAL_DUTCH_ORDER_VALIDATION_ABI, [
      {
        baseSqrtPrice: this.baseSqrtPrice,
        startSlippageTolerance: this.startSlippageTolerance,
        endSlippageTolerance: this.endSlippageTolerance,
        maxAcceptableSqrtPriceRange: this.maxAcceptableSqrtPriceRange,
        startTime: this.startTime,
        endTime: this.endTime,
      },
    ]) as Bytes
  }
}
