import { BigNumber, ethers } from 'ethers'

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

  market(market: Address): SpotOrderBuilder {
    if (this.spotOrder.orderInfo) {
      this.spotOrder.orderInfo.market = market
    }

    return this
  }

  trader(trader: Address): SpotOrderBuilder {
    if (this.spotOrder.orderInfo) {
      this.spotOrder.orderInfo.trader = trader
    }

    return this
  }

  deadline(deadline: number): SpotOrderBuilder {
    if (this.spotOrder.orderInfo) {
      this.spotOrder.orderInfo.deadline = deadline
    }

    return this
  }

  nonce(nonce: BigNumber): SpotOrderBuilder {
    if (this.spotOrder.orderInfo) {
      this.spotOrder.orderInfo.nonce = nonce
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

  baseTokenAmount(baseTokenAmount: BigNumber): SpotOrderBuilder {
    this.spotOrder.baseTokenAmount = baseTokenAmount

    return this
  }

  quoteTokenAmount(quoteTokenAmount: BigNumber): SpotOrderBuilder {
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

    this.spotOrder.validatorAddress =
      validatorAddress || ethers.constants.AddressZero
  }

  validationData(
    startPrice: BigNumber,
    endPrice: BigNumber,
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

    this.spotOrder.validatorAddress =
      validatorAddress || ethers.constants.AddressZero
  }

  validationData(filler: string, limitPrice: BigNumber): SpotLimitOrderBuilder {
    const validationData = new SpotLimitOrderValidationData(filler, limitPrice)

    this.spotOrder.validationData = validationData.serialize()

    return this
  }
}
