import { Address, Bytes } from '../types'

export interface SettlementData {
  contractAddress: Address
  encodedData: Bytes
  maxQuoteAmount: bigint
  price: bigint
  fee: bigint
}
