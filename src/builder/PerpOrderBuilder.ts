import {
  DUTCH_ORDER_VALIDATOR_MAPPING,
  LIMIT_ORDER_VALIDATOR_MAPPING,
  ZERO_ADDRESS,
} from '../constants'
import { DutchOrderValidationData } from '../order/DutchOrderValidationData'
import { LimitOrderValidationData } from '../order/LimitOrderValidationData'
import { PerpOrder } from '../order/PerpOrder'
import { PerpOrderParams } from '../order/types'
import { Address } from '../types'

export class PerpOrderBuilder {
  protected perpOrder: Partial<PerpOrderParams>

  constructor(private chainId: number, private permit2Address?: string) {
    // set defaults
    this.perpOrder = {
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
    if (this.perpOrder.info) {
      this.perpOrder.info.market = market
    }

    return this
  }

  trader(trader: Address): PerpOrderBuilder {
    if (this.perpOrder.info) {
      this.perpOrder.info.trader = trader
    }

    return this
  }

  deadline(deadline: bigint): PerpOrderBuilder {
    if (this.perpOrder.info) {
      this.perpOrder.info.deadline = deadline
    }

    return this
  }

  nonce(nonce: bigint): PerpOrderBuilder {
    if (this.perpOrder.info) {
      this.perpOrder.info.nonce = nonce
    }

    return this
  }

  tradeAmount(tradeAmount: bigint): PerpOrderBuilder {
    this.perpOrder.tradeAmount = tradeAmount

    return this
  }

  entryTokenAddress(entryTokenAddress: Address): PerpOrderBuilder {
    this.perpOrder.entryTokenAddress = entryTokenAddress

    return this
  }

  pairId(pairId: bigint): PerpOrderBuilder {
    this.perpOrder.pairId = pairId

    return this
  }

  marginAmount(marginAmount: bigint): PerpOrderBuilder {
    this.perpOrder.marginAmount = marginAmount

    return this
  }

  takeProfitPrice(takeProfitPrice: bigint): PerpOrderBuilder {
    this.perpOrder.takeProfitPrice = takeProfitPrice

    return this
  }

  stopLossPrice(stopLossPrice: bigint): PerpOrderBuilder {
    this.perpOrder.stopLossPrice = stopLossPrice

    return this
  }

  slippageTolerance(slippageTolerance: bigint): PerpOrderBuilder {
    this.perpOrder.slippageTolerance = slippageTolerance

    return this
  }

  leverage(leverage: number): PerpOrderBuilder {
    this.perpOrder.leverage = leverage

    return this
  }

  build(): PerpOrder {
    return new PerpOrder(
      Object.assign(this.perpOrder),
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

    this.perpOrder.validatorAddress =
      validatorAddress || DUTCH_ORDER_VALIDATOR_MAPPING[chainId]
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

    this.perpOrder.validationData = validationData.serialize()

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

    this.perpOrder.validatorAddress =
      validatorAddress || LIMIT_ORDER_VALIDATOR_MAPPING[chainId]
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

    this.perpOrder.validationData = validationData.serialize()

    return this
  }
}
