import { encodeAbiParameters } from 'viem'

import { DIRECT_SETTLEMENT_MAPPING } from '../constants'
import { Address, Bytes } from '../types'

import { BaseSettlement, SettlementData } from './types'

const DIRECT_SETTLEMENT_DATA_ABI = [
  {
    name: 'DirectSellementData',
    type: 'tuple',
    components: [
      { name: 'quoteTokenAddress', type: 'address' },
      { name: 'baseTokenAddress', type: 'address' },
      { name: 'price', type: 'uint256' },
    ],
  },
]

export class DirectSettlement extends BaseSettlement {
  settlementContractAddress: Address

  constructor(
    public quoteTokenAddress: string,
    public baseTokenAddress: string,
    public price: bigint,
    public chainId: number,
    settlementContractAddress?: Address
  ) {
    super()

    if (settlementContractAddress) {
      this.settlementContractAddress = settlementContractAddress
    } else {
      this.settlementContractAddress = DIRECT_SETTLEMENT_MAPPING[chainId]
    }
  }

  serialize(): SettlementData {
    return {
      settlementContractAddress: this.settlementContractAddress,
      encodedData: encodeAbiParameters(DIRECT_SETTLEMENT_DATA_ABI, [
        {
          quoteTokenAddress: this.quoteTokenAddress,
          baseTokenAddress: this.baseTokenAddress,
          price: this.price,
        },
      ]) as Bytes,
    }
  }
}
