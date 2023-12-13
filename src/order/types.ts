import { BigNumber } from 'ethers'

import { Address, Bytes } from '../types'

export interface OrderInfo {
  market: Address
  trader: Address
  nonce: BigNumber
  deadline: number
}

export interface PerpOrderParams {
  orderInfo: OrderInfo
  pairId: number
  entryTokenAddress: Address
  tradeAmount: BigNumber
  marginAmount: BigNumber
  takeProfitPrice: BigNumber
  stopLossPrice: BigNumber
  slippageTolerance: number
  validatorAddress: Address
  validationData: Bytes
  chainId: number
}

export interface PredictOrderParams {
  orderInfo: OrderInfo
  pairId: number
  duration: number
  entryTokenAddress: Address
  tradeAmount: BigNumber
  tradeAmountSqrt: BigNumber
  marginAmount: BigNumber
  validatorAddress: Address
  validationData: Bytes
  chainId: number
}

export interface SpotOrderParams {
  orderInfo: OrderInfo
  quoteToken: Address
  baseToken: Address
  baseTokenAmount: BigNumber
  quoteTokenAmount: BigNumber
  validatorAddress: Address
  validationData: Bytes
  chainId: number
}

export interface GammaOrderParams {
  orderInfo: OrderInfo
  pairId: number
  entryTokenAddress: Address
  tradeAmount: BigNumber
  tradeAmountSqrt: BigNumber
  marginAmount: BigNumber
  hedgeInterval: BigNumber
  sqrtPriceTrigger: BigNumber
  maxSlippageTolerance: number
  validatorAddress: Address
  validationData: Bytes
  chainId: number
}

export abstract class BaseValidationData {
  abstract serialize(): Bytes
}
