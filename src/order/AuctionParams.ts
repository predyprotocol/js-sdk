import { decodeAbiParameters, encodeAbiParameters } from 'viem'

import { Bytes } from '../types'

import { BaseValidationData } from './types'

export const AUCTION_PARAMS_ABI = [
  {
    name: 'AuctionParams',
    type: 'tuple',
    components: [
      { name: 'startPrice', type: 'uint256' },
      { name: 'endPrice', type: 'uint256' },
      { name: 'startTime', type: 'uint256' },
      { name: 'endTime', type: 'uint256' },
    ],
  },
]

export class AuctionParams extends BaseValidationData {
  constructor(
    public startPrice: bigint,
    public endPrice: bigint,
    public startTime: bigint,
    public endTime: bigint
  ) {
    super()
  }

  serialize(): Bytes {
    return encodeAbiParameters(AUCTION_PARAMS_ABI, [
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
      AUCTION_PARAMS_ABI,
      validationData
    )[0] as {
      startPrice: bigint
      endPrice: bigint
      startTime: bigint
      endTime: bigint
    }

    return new AuctionParams(
      decoded.startPrice,
      decoded.endPrice,
      decoded.startTime,
      decoded.endTime
    )
  }
}
