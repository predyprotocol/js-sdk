import { Address, Bytes } from '../types'

export interface SettlementData {
  settlementContractAddress: Address
  encodedData: Bytes
}

export abstract class BaseSettlement {
  abstract serialize(): SettlementData
}
