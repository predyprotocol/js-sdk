import { BigNumber } from 'ethers'

export interface OrderInfo {
  market: string
  trader: string
  filler: string
  nonce: BigNumber
  deadline: number
}

export interface GammaOrderParams {
  orderInfo: OrderInfo
  positionId: number
  pairId: number
  entryTokenAddress: string
  tradeAmount: BigNumber
  tradeAmountSqrt: BigNumber
  marginAmount: BigNumber
  validatorAddress: string
  validationData: string
  chainId: number
}

export interface PredictOrderParams {
  orderInfo: OrderInfo
  positionId: number
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

export abstract class BaseValidationData {
  abstract serialize(): string
}
