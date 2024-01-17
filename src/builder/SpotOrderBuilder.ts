import { SPOT_DUTCH_ORDER_VALIDATOR_MAPPING, SPOT_LIMIT_ORDER_VALIDATOR_MAPPING, ZERO_ADDRESS } from '../constants'
import {
  SpotDutchOrderValidationData,
  SpotLimitOrderValidationData,
  SpotOrder,
} from '../order/SpotOrder'
import { SpotOrderParams } from '../order/types'
import { Address } from '../types'

export class SpotOrderBuilder {
  protected spotOrder: Partial<SpotOrderParams>

  constructor(private chainId: number, private permit2Address?: Address) {
    // set defaults
    this.spotOrder = {
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

  market(market: Address): SpotOrderBuilder {
    if (this.spotOrder.info) {
      this.spotOrder.info.market = market
    }

    return this
  }

  trader(trader: Address): SpotOrderBuilder {
    if (this.spotOrder.info) {
      this.spotOrder.info.trader = trader
    }

    return this
  }

  deadline(deadline: bigint): SpotOrderBuilder {
    if (this.spotOrder.info) {
      this.spotOrder.info.deadline = deadline
    }

    return this
  }

  nonce(nonce: bigint): SpotOrderBuilder {
    if (this.spotOrder.info) {
      this.spotOrder.info.nonce = nonce
    }

    return this
  }

  baseToken(baseToken: Address): SpotOrderBuilder {
    this.spotOrder.baseToken = baseToken

    return this
  }

  quoteToken(quoteToken: Address): SpotOrderBuilder {
    this.spotOrder.quoteToken = quoteToken

    return this
  }

  baseTokenAmount(baseTokenAmount: bigint): SpotOrderBuilder {
    this.spotOrder.baseTokenAmount = baseTokenAmount

    return this
  }

  quoteTokenAmount(quoteTokenAmount: bigint): SpotOrderBuilder {
    this.spotOrder.quoteTokenAmount = quoteTokenAmount

    return this
  }

  build(): SpotOrder {
    return new SpotOrder(
      Object.assign(this.spotOrder),
      this.chainId,
      this.permit2Address
    )
  }
}

export class SpotDutchOrderBuilder extends SpotOrderBuilder {
  constructor(
    chainId: number,
    validatorAddress?: Address,
    permit2Address?: Address
  ) {
    super(chainId, permit2Address)

    this.spotOrder.validatorAddress = validatorAddress || SPOT_DUTCH_ORDER_VALIDATOR_MAPPING[chainId]
  }

  validationData(
    startPrice: bigint,
    endPrice: bigint,
    startTime: number,
    endTime: number
  ): SpotDutchOrderBuilder {
    const validationData = new SpotDutchOrderValidationData(
      startPrice,
      endPrice,
      startTime,
      endTime
    )

    this.spotOrder.validationData = validationData.serialize()

    return this
  }
}

export class SpotLimitOrderBuilder extends SpotOrderBuilder {
  constructor(
    chainId: number,
    validatorAddress?: Address,
    permit2Address?: Address
  ) {
    super(chainId, permit2Address)

    this.spotOrder.validatorAddress = validatorAddress || SPOT_LIMIT_ORDER_VALIDATOR_MAPPING[chainId]
  }

  validationData(filler: string, limitPrice: bigint): SpotLimitOrderBuilder {
    const validationData = new SpotLimitOrderValidationData(filler, limitPrice)

    this.spotOrder.validationData = validationData.serialize()

    return this
  }
}
