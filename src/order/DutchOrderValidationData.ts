import { decodeAbiParameters, encodeAbiParameters } from 'viem'

import { Bytes } from '../types'

import { BaseValidationData } from './types'

export const DUTCH_ORDER_VALIDATION_ABI = [
  {
    name: 'DutchOrderValidationData',
    type: 'tuple',
    components: [
      { name: 'startPrice', type: 'uint256' },
      { name: 'endPrice', type: 'uint256' },
      { name: 'startTime', type: 'uint256' },
      { name: 'endTime', type: 'uint256' },
    ],
  },
]

export class DutchOrderValidationData extends BaseValidationData {
  constructor(
    public startPrice: bigint,
    public endPrice: bigint,
    public startTime: number,
    public endTime: number
  ) {
    super()
  }

  serialize(): Bytes {
    return encodeAbiParameters(DUTCH_ORDER_VALIDATION_ABI, [
      {
        startPrice: this.startPrice,
        endPrice: this.endPrice,
        startTime: this.startTime,
        endTime: this.endTime,
      },
    ]) as Bytes
  }

  static deserialize(validationData: Bytes) {
    const decoded = decodeAbiParameters(
      DUTCH_ORDER_VALIDATION_ABI,
      validationData
    )[0] as {
      startPrice: bigint
      endPrice: bigint
      startTime: number
      endTime: number
    }

    return new DutchOrderValidationData(
      decoded.startPrice,
      decoded.endPrice,
      decoded.startTime,
      decoded.endTime
    )
  }
}
