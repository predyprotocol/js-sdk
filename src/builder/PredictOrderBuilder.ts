import { BigNumber, ethers } from 'ethers'

import {
  PredictDutchOrderValidationData,
  PredictOrder,
} from '../order/PredictOrder'
import { PredictOrderParams } from '../order/types'

export class PredictOrderBuilder {
  protected predictOrder: Partial<PredictOrderParams>

  constructor(private chainId: number, private permit2Address: string) {
    // set defaults
    this.predictOrder = {
      validatorAddress: ethers.constants.AddressZero,
      validationData: '0x',
      orderInfo: {
        market: ethers.constants.AddressZero,
        trader: ethers.constants.AddressZero,
        deadline: 0,
        nonce: BigNumber.from(0),
      },
    }
  }

  market(market: string): PredictOrderBuilder {
    if (this.predictOrder.orderInfo) {
      this.predictOrder.orderInfo.market = market
    }

    return this
  }

  trader(trader: string): PredictOrderBuilder {
    if (this.predictOrder.orderInfo) {
      this.predictOrder.orderInfo.trader = trader
    }

    return this
  }

  deadline(deadline: number): PredictOrderBuilder {
    if (this.predictOrder.orderInfo) {
      this.predictOrder.orderInfo.deadline = deadline
    }

    return this
  }

  nonce(nonce: BigNumber): PredictOrderBuilder {
    if (this.predictOrder.orderInfo) {
      this.predictOrder.orderInfo.nonce = nonce
    }

    return this
  }

  tradeAmount(tradeAmount: BigNumber): PredictOrderBuilder {
    this.predictOrder.tradeAmount = tradeAmount

    return this
  }

  tradeAmountSqrt(tradeAmountSqrt: BigNumber): PredictOrderBuilder {
    this.predictOrder.tradeAmountSqrt = tradeAmountSqrt

    return this
  }

  entryTokenAddress(entryTokenAddress: string): PredictOrderBuilder {
    this.predictOrder.entryTokenAddress = entryTokenAddress

    return this
  }

  pairId(pairId: number): PredictOrderBuilder {
    this.predictOrder.pairId = pairId

    return this
  }

  marginAmount(marginAmount: BigNumber): PredictOrderBuilder {
    this.predictOrder.marginAmount = marginAmount

    return this
  }

  duration(duration: number): PredictOrderBuilder {
    this.predictOrder.duration = duration

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

export class PredictDutchOrderBuilder extends PredictOrderBuilder {
  constructor(chainId: number, permit2Address: string) {
    super(chainId, permit2Address)

    this.predictOrder.validatorAddress = ''
  }

  validationData(
    startPrice: number,
    endPrice: number,
    startTime: number,
    endTime: number
  ): PredictDutchOrderBuilder {
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
