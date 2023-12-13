import { BigNumber } from 'ethers'

export interface OrderInfo {
  market: string
  trader: string
  nonce: BigNumber
  deadline: number
}

export interface PerpOrderParams {
  orderInfo: OrderInfo
  pairId: number
  entryTokenAddress: string
  tradeAmount: BigNumber
  marginAmount: BigNumber
  takeProfitPrice: BigNumber
  stopLossPrice: BigNumber
  slippageTolerance: number
  validatorAddress: string
  validationData: string
  chainId: number
}

export interface PredictOrderParams {
  orderInfo: OrderInfo
  pairId: number
  duration: number
  entryTokenAddress: string
  tradeAmount: BigNumber
  tradeAmountSqrt: BigNumber
  marginAmount: BigNumber
  validatorAddress: string
  validationData: string
  chainId: number
}

export interface SpotOrderParams {
  orderInfo: OrderInfo
  quoteToken: string
  baseToken: string
  baseTokenAmount: BigNumber
  quoteTokenAmount: BigNumber
  validatorAddress: string
  validationData: string
  chainId: number
}

export interface GammaOrderParams {
  orderInfo: OrderInfo
  pairId: number
  entryTokenAddress: string
  tradeAmount: BigNumber
  tradeAmountSqrt: BigNumber
  marginAmount: BigNumber
  hedgeInterval: BigNumber
  sqrtPriceTrigger: BigNumber
  maxSlippageTolerance: number
  validatorAddress: string
  validationData: string
  chainId: number
}

export abstract class BaseValidationData {
  abstract serialize(): string
}
