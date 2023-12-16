import { BigNumber } from 'ethers'

import { Address, Bytes } from '../types'

export class OrderInfo {
  constructor(
    public market: Address,
    public trader: Address,
    public nonce: BigNumber,
    public deadline: number
  ) {}

  toWitnessDataForViem() {
    return {
      market: this.market,
      trader: this.trader,
      nonce: BigInt(this.nonce.toString()),
      deadline: BigInt(this.deadline.toString()),
    }
  }
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

export abstract class BaseOrder {}

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
