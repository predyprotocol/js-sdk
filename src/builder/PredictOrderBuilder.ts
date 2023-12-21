import { ZERO_ADDRESS } from '../constants'
import { GeneralDutchOrderValidationData } from '../order/GeneralDutchOrderValidationData'
import { PredictOrder } from '../order/PredictOrder'
import { PredictOrderParams } from '../order/types'
import { Address } from '../types'

export class PredictOrderBuilder {
  protected predictOrder: Partial<PredictOrderParams>

  constructor(private chainId: number, private permit2Address?: string) {
    // set defaults
    this.predictOrder = {
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

  market(market: Address): PredictOrderBuilder {
    if (this.predictOrder.info) {
      this.predictOrder.info.market = market
    }

    return this
  }

  trader(trader: Address): PredictOrderBuilder {
    if (this.predictOrder.info) {
      this.predictOrder.info.trader = trader
    }

    return this
  }

  deadline(deadline: bigint): PredictOrderBuilder {
    if (this.predictOrder.info) {
      this.predictOrder.info.deadline = deadline
    }

    return this
  }

  nonce(nonce: bigint): PredictOrderBuilder {
    if (this.predictOrder.info) {
      this.predictOrder.info.nonce = nonce
    }

    return this
  }

  tradeAmount(tradeAmount: bigint): PredictOrderBuilder {
    this.predictOrder.tradeAmount = tradeAmount

    return this
  }

  tradeAmountSqrt(tradeAmountSqrt: bigint): PredictOrderBuilder {
    this.predictOrder.tradeAmountSqrt = tradeAmountSqrt

    return this
  }

  entryTokenAddress(entryTokenAddress: Address): PredictOrderBuilder {
    this.predictOrder.entryTokenAddress = entryTokenAddress

    return this
  }

  pairId(pairId: bigint): PredictOrderBuilder {
    this.predictOrder.pairId = pairId

    return this
  }

  marginAmount(marginAmount: bigint): PredictOrderBuilder {
    this.predictOrder.marginAmount = marginAmount

    return this
  }

  duration(duration: bigint): PredictOrderBuilder {
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
  constructor(
    chainId: number,
    validatorAddress?: Address,
    permit2Address?: Address
  ) {
    super(chainId, permit2Address)

    if (validatorAddress) {
      this.predictOrder.validatorAddress = validatorAddress || ZERO_ADDRESS
    }
  }

  validationData(
    baseSqrtPrice: bigint,
    startSlippageTolerance: number,
    endSlippageTolerance: number,
    maxAcceptableSqrtPriceRange: number,
    startTime: number,
    endTime: number
  ): PredictDutchOrderBuilder {
    const validationData = new GeneralDutchOrderValidationData(
      baseSqrtPrice,
      startSlippageTolerance,
      endSlippageTolerance,
      maxAcceptableSqrtPriceRange,
      startTime,
      endTime
    )

    this.predictOrder.validationData = validationData.serialize()

    return this
  }
}
