import { Address, Bytes } from '../types'

export interface SettlementParams {
  price: bigint
  fee: bigint
  items: SettlementParamsItem[]
}

interface SettlementParamsItem {
  contractAddress: Address
  encodedData: Bytes
  maxQuoteAmount: bigint
  partialBaseAmount: bigint
}
