import { Address, Bytes } from '../types'

export interface SettlementParams {
  contractAddress: Address
  encodedData: Bytes
  maxQuoteAmount: bigint
  price: bigint
  fee: bigint
}
