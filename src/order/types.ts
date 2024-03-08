import { Address, Bytes } from '../types'

export interface OrderInfo {
  market: Address
  trader: Address
  nonce: bigint
  deadline: bigint
}

export interface PerpOrderParams {
  info: OrderInfo
  pairId: bigint
  entryTokenAddress: Address
  tradeAmount: bigint
  marginAmount: bigint
  takeProfitPrice: bigint
  stopLossPrice: bigint
  slippageTolerance: bigint
  leverage: number
  validatorAddress: Address
  validationData: Bytes
}

export interface PerpOrderV3Params {
  info: OrderInfo
  pairId: bigint
  entryTokenAddress: Address
  tradeAmount: bigint
  marginAmount: bigint
  limitPrice: bigint
  stopPrice: bigint
  leverage: number
  reduceOnly: boolean
  closePosition: boolean
  auctionData: Bytes
}

export interface PredictOrderParams {
  info: OrderInfo
  pairId: bigint
  duration: bigint
  entryTokenAddress: Address
  tradeAmount: bigint
  tradeAmountSqrt: bigint
  marginAmount: bigint
  validatorAddress: Address
  validationData: Bytes
}

export interface SpotOrderParams {
  info: OrderInfo
  quoteToken: Address
  baseToken: Address
  baseTokenAmount: bigint
  quoteTokenAmount: bigint
  validatorAddress: Address
  validationData: Bytes
}

export interface GammaOrderParams {
  info: OrderInfo
  pairId: bigint
  entryTokenAddress: Address
  tradeAmount: bigint
  tradeAmountSqrt: bigint
  marginAmount: bigint
  hedgeInterval: bigint
  sqrtPriceTrigger: bigint
  minSlippageTolerance: bigint
  maxSlippageTolerance: bigint
  validatorAddress: Address
  validationData: Bytes
}

export abstract class BaseValidationData {
  abstract serialize(): Bytes
}

export const PERMIT_WITNESS_TRANSFER_FROM_TYPES = (witnessType: string) => [
  { name: 'permitted', type: 'TokenPermissions' },
  { name: 'spender', type: 'address' },
  { name: 'nonce', type: 'uint256' },
  { name: 'deadline', type: 'uint256' },
  { name: 'witness', type: witnessType },
]
export const TOKEN_PERMISSION_TYPES = [
  { name: 'token', type: 'address' },
  { name: 'amount', type: 'uint256' },
]
export const ORDER_INFO_TYPES = [
  { name: 'market', type: 'address' },
  { name: 'trader', type: 'address' },
  { name: 'nonce', type: 'uint256' },
  { name: 'deadline', type: 'uint256' },
]
