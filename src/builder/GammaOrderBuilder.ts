import { BigNumber, ethers } from 'ethers'

import {
  DutchOrderValidationData,
  GammaOrder,
  LimitOrderValidationData,
} from '../order/GammaOrder'
import { GammaOrderParams } from '../order/types'

export class OrderBuilder {
  protected gammaOrder: Partial<GammaOrderParams>

  constructor(private chainId: number, private permit2Address: string) {
    // set defaults
    this.gammaOrder = {
      canceler: ethers.constants.AddressZero,
      takeProfitPrice: BigNumber.from(0),
      stopLossPrice: BigNumber.from(0),
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

  market(market: string): OrderBuilder {
    if (this.gammaOrder.orderInfo) {
      this.gammaOrder.orderInfo.market = market
    }

    return this
  }

  trader(trader: string): OrderBuilder {
    if (this.gammaOrder.orderInfo) {
      this.gammaOrder.orderInfo.trader = trader
    }

    return this
  }

  deadline(deadline: number): OrderBuilder {
    if (this.gammaOrder.orderInfo) {
      this.gammaOrder.orderInfo.deadline = deadline
    }

    return this
  }

  nonce(nonce: BigNumber): OrderBuilder {
    if (this.gammaOrder.orderInfo) {
      this.gammaOrder.orderInfo.nonce = nonce
    }

    return this
  }

  tradeAmount(tradeAmount: BigNumber): OrderBuilder {
    this.gammaOrder.tradeAmount = tradeAmount

    return this
  }

  entryTokenAddress(entryTokenAddress: string): OrderBuilder {
    this.gammaOrder.entryTokenAddress = entryTokenAddress

    return this
  }

  positionId(positionId: number): OrderBuilder {
    this.gammaOrder.positionId = positionId

    return this
  }

  pairId(pairId: number): OrderBuilder {
    this.gammaOrder.pairId = pairId

    return this
  }

  marginAmount(marginAmount: BigNumber): OrderBuilder {
    this.gammaOrder.marginAmount = marginAmount

    return this
  }

  canceler(canceler: string): OrderBuilder {
    this.gammaOrder.canceler = canceler

    return this
  }

  takeProfitPrice(takeProfitPrice: BigNumber): OrderBuilder {
    this.gammaOrder.takeProfitPrice = takeProfitPrice

    return this
  }

  stopLossPrice(stopLossPrice: BigNumber): OrderBuilder {
    this.gammaOrder.stopLossPrice = stopLossPrice

    return this
  }

  slippageTolerance(slippageTolerance: number): OrderBuilder {
    this.gammaOrder.slippageTolerance = slippageTolerance

    return this
  }

  build(): GammaOrder {
    return new GammaOrder(
      Object.assign(this.gammaOrder),
      this.chainId,
      this.permit2Address
    )
  }
}

export class GammaDutchOrderBuilder extends OrderBuilder {
  constructor(chainId: number, permit2Address: string) {
    super(chainId, permit2Address)

    this.gammaOrder.validatorAddress = ''
  }

  validationData(
    startPrice: number,
    endPrice: number,
    startTime: number,
    endTime: number
  ): GammaDutchOrderBuilder {
    const validationData = new DutchOrderValidationData(
      startPrice,
      endPrice,
      startTime,
      endTime
    )

    this.gammaOrder.validationData = validationData.serialize()

    return this
  }
}

export class GammaLimitOrderBuilder extends OrderBuilder {
  constructor(chainId: number, permit2Address: string) {
    super(chainId, permit2Address)

    this.gammaOrder.validatorAddress = ''
  }

  validationData(
    triggerPrice: number,
    triggerPriceSqrt: number,
    limitPrice: number,
    limitPriceSqrt: number
  ): GammaLimitOrderBuilder {
    const validationData = new LimitOrderValidationData(
      triggerPrice,
      triggerPriceSqrt,
      limitPrice,
      limitPriceSqrt
    )

    this.gammaOrder.validationData = validationData.serialize()

    return this
  }
}
