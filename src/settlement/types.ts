export interface SettlementData {
  settlementContractAddress: string
  encodedData: string
}

export abstract class BaseSettlement {
  abstract serialize(): SettlementData
}
