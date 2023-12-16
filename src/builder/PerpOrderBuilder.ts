import { BigNumber, ethers } from 'ethers'

import { DutchOrderValidationData } from '../order/DutchOrderValidationData'
import { LimitOrderValidationData } from '../order/LimitOrderValidationData'
import { PerpOrder } from '../order/PerpOrder'
import { OrderInfo, PerpOrderParams } from '../order/types'
import { Address } from '../types'

export class PerpOrderBuilder {
  protected gammaOrder: Partial<PerpOrderParams>

  constructor(private chainId: number, private permit2Address?: string) {
    // set defaults
    this.gammaOrder = {
      takeProfitPrice: BigNumber.from(0),
      stopLossPrice: BigNumber.from(0),
      validatorAddress: ethers.constants.AddressZero,
      validationData: '0x',
      orderInfo: new OrderInfo(
        ethers.constants.AddressZero,
        ethers.constants.AddressZero,
        BigNumber.from(0),
        0
      ),
    }
  }

  market(market: Address): PerpOrderBuilder {
    if (this.gammaOrder.orderInfo) {
      this.gammaOrder.orderInfo.market = market
    }

    return this
  }

  trader(trader: Address): PerpOrderBuilder {
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

  entryTokenAddress(entryTokenAddress: Address): PerpOrderBuilder {
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
  constructor(
    chainId: number,
    validatorAddress?: Address,
    permit2Address?: Address
  ) {
    super(chainId, permit2Address)

    if (validatorAddress) {
      this.gammaOrder.validatorAddress =
        validatorAddress || ethers.constants.AddressZero
    }
  }

  validationData(
    startPrice: BigNumber,
    endPrice: BigNumber,
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
  constructor(
    chainId: number,
    validatorAddress?: Address,
    permit2Address?: Address
  ) {
    super(chainId, permit2Address)

    if (validatorAddress) {
      this.gammaOrder.validatorAddress =
        validatorAddress || ethers.constants.AddressZero
    }
  }

  validationData(
    triggerPrice: BigNumber,
    limitPrice: BigNumber
  ): PerpLimitOrderBuilder {
    const validationData = new LimitOrderValidationData(
      triggerPrice,
      BigNumber.from(0),
      limitPrice,
      BigNumber.from(0)
    )

    this.gammaOrder.validationData = validationData.serialize()

    return this
  }
}
