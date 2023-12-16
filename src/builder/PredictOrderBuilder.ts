import { BigNumber, ethers } from 'ethers'

import { GeneralDutchOrderValidationData } from '../order/GeneralDutchOrderValidationData'
import { PredictOrder } from '../order/PredictOrder'
import { OrderInfo, PredictOrderParams } from '../order/types'
import { Address } from '../types'

export class PredictOrderBuilder {
  protected predictOrder: Partial<PredictOrderParams>

  constructor(private chainId: number, private permit2Address?: string) {
    // set defaults
    this.predictOrder = {
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

  market(market: Address): PredictOrderBuilder {
    if (this.predictOrder.orderInfo) {
      this.predictOrder.orderInfo.market = market
    }

    return this
  }

  trader(trader: Address): PredictOrderBuilder {
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

  entryTokenAddress(entryTokenAddress: Address): PredictOrderBuilder {
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
  constructor(
    chainId: number,
    validatorAddress?: Address,
    permit2Address?: Address
  ) {
    super(chainId, permit2Address)

    if (validatorAddress) {
      this.predictOrder.validatorAddress =
        validatorAddress || ethers.constants.AddressZero
    }
  }

  validationData(
    baseSqrtPrice: BigNumber,
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
