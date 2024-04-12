import { ZERO_ADDRESS } from '../constants'
import { GammaOrder } from '../order/GammaOrder'
import { GammaOrderParams } from '../order/types'
import { Address } from '../types'

export class GammaOrderBuilder {
  protected gammaOrder: Partial<GammaOrderParams>

  constructor(private chainId: number, private permit2Address?: string) {
    // set defaults
    this.gammaOrder = {
      pairId: 0n,
      positionId: 0n,
      entryTokenAddress: ZERO_ADDRESS,
      quantity: 0n,
      quantitySqrt: 0n,
      marginAmount: 0n,
      closePosition: false,
      leverage: 1,
      modifyInfo: {
        isEnabled: false,
        expiration: 0n,
        lowerLimit: 0n,
        upperLimit: 0n,
        hedgeInterval: 0,
        sqrtPriceTrigger: 0,
        minSlippageTolerance: 0,
        maxSlippageTolerance: 0,
        auctionPeriod: 0,
        auctionRange: 0,
      },
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

  pairId(pairId: bigint): GammaOrderBuilder {
    this.gammaOrder.pairId = pairId

    return this
  }

  positionId(positionId: bigint): GammaOrderBuilder {
    this.gammaOrder.positionId = positionId

    return this
  }

  entryTokenAddress(entryTokenAddress: Address): GammaOrderBuilder {
    this.gammaOrder.entryTokenAddress = entryTokenAddress

    return this
  }

  quantity(quantity: bigint): GammaOrderBuilder {
    this.gammaOrder.quantity = quantity

    return this
  }

  quantitySqrt(quantitySqrt: bigint): GammaOrderBuilder {
    this.gammaOrder.quantitySqrt = quantitySqrt

    return this
  }

  marginAmount(marginAmount: bigint): GammaOrderBuilder {
    this.gammaOrder.marginAmount = marginAmount

    return this
  }

  closePosition(closePosition: boolean): GammaOrderBuilder {
    this.gammaOrder.closePosition = closePosition

    return this
  }

  leverage(leverage: number): GammaOrderBuilder {
    this.gammaOrder.leverage = leverage

    return this
  }

  isEnabled(isEnabled: boolean): GammaOrderBuilder {
    if (!this.gammaOrder.modifyInfo)
      throw new Error('modifyInfo is not defined')

    this.gammaOrder.modifyInfo.isEnabled = isEnabled

    return this
  }

  expiration(expiration: bigint): GammaOrderBuilder {
    if (!this.gammaOrder.modifyInfo)
      throw new Error('modifyInfo is not defined')

    this.gammaOrder.modifyInfo.expiration = expiration

    return this
  }

  lowerLimit(lowerLimit: bigint): GammaOrderBuilder {
    if (!this.gammaOrder.modifyInfo)
      throw new Error('modifyInfo is not defined')

    this.gammaOrder.modifyInfo.lowerLimit = lowerLimit

    return this
  }

  upperLimit(upperLimit: bigint): GammaOrderBuilder {
    if (!this.gammaOrder.modifyInfo)
      throw new Error('modifyInfo is not defined')

    this.gammaOrder.modifyInfo.upperLimit = upperLimit

    return this
  }

  hedgeInterval(hedgeInterval: number): GammaOrderBuilder {
    if (!this.gammaOrder.modifyInfo)
      throw new Error('modifyInfo is not defined')

    this.gammaOrder.modifyInfo.hedgeInterval = hedgeInterval

    return this
  }

  sqrtPriceTrigger(sqrtPriceTrigger: number): GammaOrderBuilder {
    if (!this.gammaOrder.modifyInfo)
      throw new Error('modifyInfo is not defined')

    this.gammaOrder.modifyInfo.sqrtPriceTrigger = sqrtPriceTrigger

    return this
  }

  minSlippageTolerance(minSlippageTolerance: number): GammaOrderBuilder {
    if (!this.gammaOrder.modifyInfo)
      throw new Error('modifyInfo is not defined')

    this.gammaOrder.modifyInfo.minSlippageTolerance = minSlippageTolerance

    return this
  }

  maxSlippageTolerance(maxSlippageTolerance: number): GammaOrderBuilder {
    if (!this.gammaOrder.modifyInfo)
      throw new Error('modifyInfo is not defined')

    this.gammaOrder.modifyInfo.maxSlippageTolerance = maxSlippageTolerance

    return this
  }

  auctionPeriod(auctionPeriod: number): GammaOrderBuilder {
    if (!this.gammaOrder.modifyInfo)
      throw new Error('modifyInfo is not defined')

    this.gammaOrder.modifyInfo.auctionPeriod = auctionPeriod

    return this
  }

  auctionRange(auctionRange: number): GammaOrderBuilder {
    if (!this.gammaOrder.modifyInfo)
      throw new Error('modifyInfo is not defined')

    this.gammaOrder.modifyInfo.auctionRange = auctionRange

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
