import { BigNumber, ethers } from 'ethers'

import {
  DutchOrderValidationData,
  LimitOrderValidationData,
  PerpOrder,
} from '../order/PerpOrder'
import { PerpOrderParams } from '../order/types'

export class PerpOrderBuilder {
  protected gammaOrder: Partial<PerpOrderParams>

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

  market(market: string): PerpOrderBuilder {
    if (this.gammaOrder.orderInfo) {
      this.gammaOrder.orderInfo.market = market
    }

    return this
  }

  trader(trader: string): PerpOrderBuilder {
    if (this.gammaOrder.orderInfo) {
      this.gammaOrder.orderInfo.trader = trader
    }

    return this
  }

  deadline(deadline: number): PerpOrderBuilder {
    if (this.gammaOrder.orderInfo) {
      this.gammaOrder.orderInfo.deadline = deadline
    }

    return this
  }

  nonce(nonce: BigNumber): PerpOrderBuilder {
    if (this.gammaOrder.orderInfo) {
      this.gammaOrder.orderInfo.nonce = nonce
    }

    return this
  }

  tradeAmount(tradeAmount: BigNumber): PerpOrderBuilder {
    this.gammaOrder.tradeAmount = tradeAmount

    return this
  }

  entryTokenAddress(entryTokenAddress: string): PerpOrderBuilder {
    this.gammaOrder.entryTokenAddress = entryTokenAddress

    return this
  }

  pairId(pairId: number): PerpOrderBuilder {
    this.gammaOrder.pairId = pairId

    return this
  }

  marginAmount(marginAmount: BigNumber): PerpOrderBuilder {
    this.gammaOrder.marginAmount = marginAmount

    return this
  }

  canceler(canceler: string): PerpOrderBuilder {
    this.gammaOrder.canceler = canceler

    return this
  }

  takeProfitPrice(takeProfitPrice: BigNumber): PerpOrderBuilder {
    this.gammaOrder.takeProfitPrice = takeProfitPrice

    return this
  }

  stopLossPrice(stopLossPrice: BigNumber): PerpOrderBuilder {
    this.gammaOrder.stopLossPrice = stopLossPrice

    return this
  }

  slippageTolerance(slippageTolerance: number): PerpOrderBuilder {
    this.gammaOrder.slippageTolerance = slippageTolerance

    return this
  }

  build(): PerpOrder {
    return new PerpOrder(
      Object.assign(this.gammaOrder),
      this.chainId,
      this.permit2Address
    )
  }
}

export class PerpDutchOrderBuilder extends PerpOrderBuilder {
  constructor(chainId: number, permit2Address: string) {
    super(chainId, permit2Address)

    this.gammaOrder.validatorAddress = ''
  }

  validationData(
    startPrice: number,
    endPrice: number,
    startTime: number,
    endTime: number
  ): PerpDutchOrderBuilder {
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

export class PerpLimitOrderBuilder extends PerpOrderBuilder {
  constructor(chainId: number, permit2Address: string) {
    super(chainId, permit2Address)

    this.gammaOrder.validatorAddress = ''
  }

  validationData(
    triggerPrice: number,
    limitPrice: number
  ): PerpLimitOrderBuilder {
    const validationData = new LimitOrderValidationData(
      triggerPrice,
      limitPrice
    )

    this.gammaOrder.validationData = validationData.serialize()

    return this
  }
}
