import { Hex } from 'viem'

import { ZERO_ADDRESS } from '../constants'
import { PerpOrderV3 } from '../order/PerpOrderV3'
import { PerpOrderV3Params } from '../order/types'
import { Address } from '../types'

export class PerpOrderV3Builder {
  protected perpOrder: Partial<PerpOrderV3Params>

  constructor(private chainId: number, private permit2Address?: string) {
    // set defaults
    this.perpOrder = {
      limitPrice: 0n,
      stopPrice: 0n,
      leverage: 1,
      reduceOnly: false,
      closePosition: false,
      auctionData: '0x',
      info: {
        market: ZERO_ADDRESS,
        trader: ZERO_ADDRESS,
        nonce: 0n,
        deadline: 0n,
      },
    }
  }

  market(market: Address): PerpOrderV3Builder {
    if (this.perpOrder.info) {
      this.perpOrder.info.market = market
    }

    return this
  }

  trader(trader: Address): PerpOrderV3Builder {
    if (this.perpOrder.info) {
      this.perpOrder.info.trader = trader
    }

    return this
  }

  deadline(deadline: bigint): PerpOrderV3Builder {
    if (this.perpOrder.info) {
      this.perpOrder.info.deadline = deadline
    }

    return this
  }

  nonce(nonce: bigint): PerpOrderV3Builder {
    if (this.perpOrder.info) {
      this.perpOrder.info.nonce = nonce
    }

    return this
  }

  tradeAmount(tradeAmount: bigint): PerpOrderV3Builder {
    this.perpOrder.tradeAmount = tradeAmount

    return this
  }

  entryTokenAddress(entryTokenAddress: Address): PerpOrderV3Builder {
    this.perpOrder.entryTokenAddress = entryTokenAddress

    return this
  }

  pairId(pairId: bigint): PerpOrderV3Builder {
    this.perpOrder.pairId = pairId

    return this
  }

  marginAmount(marginAmount: bigint): PerpOrderV3Builder {
    this.perpOrder.marginAmount = marginAmount

    return this
  }

  limitPrice(limitPrice: bigint): PerpOrderV3Builder {
    this.perpOrder.limitPrice = limitPrice

    return this
  }

  stopPrice(stopPrice: bigint): PerpOrderV3Builder {
    this.perpOrder.stopPrice = stopPrice

    return this
  }

  leverage(leverage: number): PerpOrderV3Builder {
    this.perpOrder.leverage = leverage

    return this
  }

  reduceOnly(reduceOnly: boolean): PerpOrderV3Builder {
    this.perpOrder.reduceOnly = reduceOnly

    return this
  }

  closePosition(closePosition: boolean): PerpOrderV3Builder {
    this.perpOrder.closePosition = closePosition

    return this
  }

  auctionData(auctionData: Hex): PerpOrderV3Builder {
    this.perpOrder.auctionData = auctionData

    return this
  }

  build(): PerpOrderV3 {
    return new PerpOrderV3(
      Object.assign(this.perpOrder),
      this.chainId,
      this.permit2Address
    )
  }
}
