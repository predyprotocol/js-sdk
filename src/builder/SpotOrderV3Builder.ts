import { Hex } from 'viem'

import { ZERO_ADDRESS } from '../constants'
import { SpotOrderV3 } from '../order/SpotOrderV3'
import { SpotOrderV3Params } from '../order/types'
import { Address } from '../types'

export class SpotOrderV3Builder {
  protected spotOrder: Partial<SpotOrderV3Params>

  constructor(private chainId: number, private permit2Address?: Address) {
    // set defaults
    this.spotOrder = {
      limitQuoteTokenAmount: 0n,
      auctionData: '0x',
      info: {
        market: ZERO_ADDRESS,
        trader: ZERO_ADDRESS,
        nonce: 0n,
        deadline: 0n,
      },
    }
  }

  market(market: Address): SpotOrderV3Builder {
    if (this.spotOrder.info) {
      this.spotOrder.info.market = market
    }

    return this
  }

  trader(trader: Address): SpotOrderV3Builder {
    if (this.spotOrder.info) {
      this.spotOrder.info.trader = trader
    }

    return this
  }

  deadline(deadline: bigint): SpotOrderV3Builder {
    if (this.spotOrder.info) {
      this.spotOrder.info.deadline = deadline
    }

    return this
  }

  nonce(nonce: bigint): SpotOrderV3Builder {
    if (this.spotOrder.info) {
      this.spotOrder.info.nonce = nonce
    }

    return this
  }

  baseToken(baseToken: Address): SpotOrderV3Builder {
    this.spotOrder.baseToken = baseToken

    return this
  }

  quoteToken(quoteToken: Address): SpotOrderV3Builder {
    this.spotOrder.quoteToken = quoteToken

    return this
  }

  baseTokenAmount(baseTokenAmount: bigint): SpotOrderV3Builder {
    this.spotOrder.baseTokenAmount = baseTokenAmount

    return this
  }

  quoteTokenAmount(quoteTokenAmount: bigint): SpotOrderV3Builder {
    this.spotOrder.quoteTokenAmount = quoteTokenAmount

    return this
  }

  limitQuoteTokenAmount(limitQuoteTokenAmount: bigint): SpotOrderV3Builder {
    this.spotOrder.limitQuoteTokenAmount = limitQuoteTokenAmount

    return this
  }

  auctionData(auctionData: Hex): SpotOrderV3Builder {
    this.spotOrder.auctionData = auctionData

    return this
  }

  build(): SpotOrderV3 {
    return new SpotOrderV3(
      Object.assign(this.spotOrder),
      this.chainId,
      this.permit2Address
    )
  }
}
