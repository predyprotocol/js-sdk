import { Address, Bytes } from '../types'

export interface SettlementParams {
  contractAddress: Address
  encodedData: Bytes
  maxQuoteAmount: bigint
  price: bigint
  fee: bigint
}

export interface SettlementParamsV2 {
  contractAddress: Address
  encodedData: Bytes
  maxQuoteAmountPrice: bigint
  price: bigint
  feePrice: bigint
  minFee: bigint
}

export interface SettlementParamsV3 {
  contractAddress: Address
  encodedData: Bytes
  maxQuoteAmountPrice: bigint
  minQuoteAmountPrice: bigint
  price: bigint
  feePrice: bigint
  minFee: bigint
}
