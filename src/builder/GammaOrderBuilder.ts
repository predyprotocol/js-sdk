import {
  GENERAL_DUTCH_ORDER_VALIDATOR_MAPPING,
  ZERO_ADDRESS,
} from '../constants'
import { GammaOrder } from '../order/GammaOrder'
import { GeneralDutchOrderValidationData } from '../order/GeneralDutchOrderValidationData'
import { GammaOrderParams } from '../order/types'
import { Address } from '../types'

export class GammaOrderBuilder {
  protected gammaOrder: Partial<GammaOrderParams>

  constructor(private chainId: number, private permit2Address?: string) {
    // set defaults
    this.gammaOrder = {
      sqrtPriceTrigger: 0n,
      hedgeInterval: 0n,
      minSlippageTolerance: 0n,
      maxSlippageTolerance: 0n,
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

  market(market: Address): GammaOrderBuilder {
    if (this.gammaOrder.info) {
      this.gammaOrder.info.market = market
    }

    return this
  }

  trader(trader: Address): GammaOrderBuilder {
    if (this.gammaOrder.info) {
      this.gammaOrder.info.trader = trader
    }

    return this
  }

  deadline(deadline: bigint): GammaOrderBuilder {
    if (this.gammaOrder.info) {
      this.gammaOrder.info.deadline = deadline
    }

    return this
  }

  nonce(nonce: bigint): GammaOrderBuilder {
    if (this.gammaOrder.info) {
      this.gammaOrder.info.nonce = nonce
    }

    return this
  }

  tradeAmount(tradeAmount: bigint): GammaOrderBuilder {
    this.gammaOrder.tradeAmount = tradeAmount

    return this
  }

  tradeAmountSqrt(tradeAmountSqrt: bigint): GammaOrderBuilder {
    this.gammaOrder.tradeAmountSqrt = tradeAmountSqrt

    return this
  }

  entryTokenAddress(entryTokenAddress: Address): GammaOrderBuilder {
    this.gammaOrder.entryTokenAddress = entryTokenAddress

    return this
  }

  pairId(pairId: bigint): GammaOrderBuilder {
    this.gammaOrder.pairId = pairId

    return this
  }

  marginAmount(marginAmount: bigint): GammaOrderBuilder {
    this.gammaOrder.marginAmount = marginAmount

    return this
  }

  hedgeInterval(hedgeInterval: bigint): GammaOrderBuilder {
    this.gammaOrder.hedgeInterval = hedgeInterval

    return this
  }

  sqrtPriceTrigger(sqrtPriceTrigger: bigint): GammaOrderBuilder {
    this.gammaOrder.sqrtPriceTrigger = sqrtPriceTrigger

    return this
  }

  minSlippageTolerance(minSlippageTolerance: bigint): GammaOrderBuilder {
    this.gammaOrder.minSlippageTolerance = minSlippageTolerance

    return this
  }

  maxSlippageTolerance(maxSlippageTolerance: bigint): GammaOrderBuilder {
    this.gammaOrder.maxSlippageTolerance = maxSlippageTolerance

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

export class GammaDutchOrderBuilder extends GammaOrderBuilder {
  constructor(
    chainId: number,
    validatorAddress?: Address,
    permit2Address?: Address
  ) {
    super(chainId, permit2Address)

    this.gammaOrder.validatorAddress =
      validatorAddress || GENERAL_DUTCH_ORDER_VALIDATOR_MAPPING[chainId]
  }

  validationData(
    baseSqrtPrice: bigint,
    startSlippageTolerance: number,
    endSlippageTolerance: number,
    maxAcceptableSqrtPriceRange: number,
    startTime: number,
    endTime: number
  ): GammaDutchOrderBuilder {
    const validationData = new GeneralDutchOrderValidationData(
      baseSqrtPrice,
      startSlippageTolerance,
      endSlippageTolerance,
      maxAcceptableSqrtPriceRange,
      startTime,
      endTime
    )

    this.gammaOrder.validationData = validationData.serialize()

    return this
  }
}
