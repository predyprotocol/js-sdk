import { BigNumber, ethers } from 'ethers'

import {
  PredictDutchOrderValidationData,
  PredictOrder,
} from '../order/PredictOrder'
import { PredictOrderParams } from '../order/types'

export class OrderBuilder {
  protected predictOrder: Partial<PredictOrderParams>

  constructor(private chainId: number, private permit2Address: string) {
    // set defaults
    this.predictOrder = {
      validatorAddress: ethers.constants.AddressZero,
      validationData: '0x',
      orderInfo: {
        market: ethers.constants.AddressZero,
        trader: ethers.constants.AddressZero,
        filler: ethers.constants.AddressZero,
        deadline: 0,
        nonce: BigNumber.from(0),
      },
    }
  }

  market(market: string): OrderBuilder {
    if (this.predictOrder.orderInfo) {
      this.predictOrder.orderInfo.market = market
    }

    return this
  }

  trader(trader: string): OrderBuilder {
    if (this.predictOrder.orderInfo) {
      this.predictOrder.orderInfo.trader = trader
    }

    return this
  }

  filler(filler: string): OrderBuilder {
    if (this.predictOrder.orderInfo) {
      this.predictOrder.orderInfo.filler = filler
    }

    return this
  }

  deadline(deadline: number): OrderBuilder {
    if (this.predictOrder.orderInfo) {
      this.predictOrder.orderInfo.deadline = deadline
    }

    return this
  }

  nonce(nonce: BigNumber): OrderBuilder {
    if (this.predictOrder.orderInfo) {
      this.predictOrder.orderInfo.nonce = nonce
    }

    return this
  }

  tradeAmount(tradeAmount: BigNumber): OrderBuilder {
    this.predictOrder.tradeAmount = tradeAmount

    return this
  }

  entryTokenAddress(entryTokenAddress: string): OrderBuilder {
    this.predictOrder.entryTokenAddress = entryTokenAddress

    return this
  }

  build(): PredictOrder {
    return new PredictOrder(
      Object.assign(this.predictOrder),
      this.chainId,
      this.permit2Address
    )
  }
}

export class DutchOrderBuilder extends OrderBuilder {
  constructor(chainId: number, permit2Address: string) {
    super(chainId, permit2Address)

    this.predictOrder.validatorAddress = ''
  }
  validationData(
    startPrice: number,
    endPrice: number,
    startTime: number,
    endTime: number
  ): DutchOrderBuilder {
    const validationData = new PredictDutchOrderValidationData(
      startPrice,
      endPrice,
      startTime,
      endTime
    )

    this.predictOrder.validationData = validationData.serialize()

    return this
  }
}
