import { ZERO_ADDRESS } from '../constants'
import { DutchOrderValidationData } from '../order/DutchOrderValidationData'
import { LimitOrderValidationData } from '../order/LimitOrderValidationData'
import { PerpOrder } from '../order/PerpOrder'
import { PerpOrderParams } from '../order/types'
import { Address } from '../types'

export class PerpOrderBuilder {
  protected gammaOrder: Partial<PerpOrderParams>

  constructor(private chainId: number, private permit2Address?: string) {
    // set defaults
    this.gammaOrder = {
      takeProfitPrice: 0n,
      stopLossPrice: 0n,
      validatorAddress: ZERO_ADDRESS,
      validationData: '0x',
      info: {
        market: ZERO_ADDRESS,
        trader: ZERO_ADDRESS,
        nonce: 0n,
        deadline: 0n,
      },
    }
  }

  market(market: Address): PerpOrderBuilder {
    if (this.gammaOrder.info) {
      this.gammaOrder.info.market = market
    }

    return this
  }

  trader(trader: Address): PerpOrderBuilder {
    if (this.gammaOrder.info) {
      this.gammaOrder.info.trader = trader
    }

    return this
  }

  deadline(deadline: bigint): PerpOrderBuilder {
    if (this.gammaOrder.info) {
      this.gammaOrder.info.deadline = deadline
    }

    return this
  }

  nonce(nonce: bigint): PerpOrderBuilder {
    if (this.gammaOrder.info) {
      this.gammaOrder.info.nonce = nonce
    }

    return this
  }

  tradeAmount(tradeAmount: bigint): PerpOrderBuilder {
    this.gammaOrder.tradeAmount = tradeAmount

    return this
  }

  entryTokenAddress(entryTokenAddress: Address): PerpOrderBuilder {
    this.gammaOrder.entryTokenAddress = entryTokenAddress

    return this
  }

  pairId(pairId: bigint): PerpOrderBuilder {
    this.gammaOrder.pairId = pairId

    return this
  }

  marginAmount(marginAmount: bigint): PerpOrderBuilder {
    this.gammaOrder.marginAmount = marginAmount

    return this
  }

  takeProfitPrice(takeProfitPrice: bigint): PerpOrderBuilder {
    this.gammaOrder.takeProfitPrice = takeProfitPrice

    return this
  }

  stopLossPrice(stopLossPrice: bigint): PerpOrderBuilder {
    this.gammaOrder.stopLossPrice = stopLossPrice

    return this
  }

  slippageTolerance(slippageTolerance: bigint): PerpOrderBuilder {
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
      this.gammaOrder.validatorAddress = validatorAddress || ZERO_ADDRESS
    }
  }

  validationData(
    startPrice: bigint,
    endPrice: bigint,
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
      this.gammaOrder.validatorAddress = validatorAddress || ZERO_ADDRESS
    }
  }

  validationData(
    triggerPrice: bigint,
    limitPrice: bigint
  ): PerpLimitOrderBuilder {
    const validationData = new LimitOrderValidationData(
      triggerPrice,
      0n,
      limitPrice,
      0n
    )

    this.gammaOrder.validationData = validationData.serialize()

    return this
  }
}
