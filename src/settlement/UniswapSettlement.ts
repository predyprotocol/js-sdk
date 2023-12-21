import { encodeAbiParameters } from 'viem'

import { UNISWAP_SETTLEMENT_MAPPING } from '../constants'
import { Address, Bytes } from '../types'

import { BaseSettlement, SettlementData } from './types'

const UNISWAP_SETTLEMENT_DATA_ABI = [
  {
    name: 'UniswapSellementData',
    type: 'tuple',
    components: [
      { name: 'path', type: 'bytes' },
      { name: 'amountOutMinimumOrInMaximum', type: 'uint256' },
      { name: 'quoteTokenAddress', type: 'address' },
      { name: 'baseTokenAddress', type: 'address' },
      { name: 'fee', type: 'int256' },
    ],
  },
]

export class UniswapSettlement extends BaseSettlement {
  settlementContractAddress: Address

  constructor(
    public path: string,
    public amountOutMinimumOrInMaximum: bigint,
    public quoteTokenAddress: string,
    public baseTokenAddress: string,
    public fee: bigint,
    public chainId: number,
    settlementContractAddress?: Address
  ) {
    super()

    if (settlementContractAddress) {
      this.settlementContractAddress = settlementContractAddress
    } else {
      this.settlementContractAddress = UNISWAP_SETTLEMENT_MAPPING[chainId]
    }
  }

  serialize(): SettlementData {
    return {
      settlementContractAddress: this.settlementContractAddress,
      encodedData: encodeAbiParameters(UNISWAP_SETTLEMENT_DATA_ABI, [
        {
          path: this.path,
          amountOutMinimumOrInMaximum: this.amountOutMinimumOrInMaximum,
          quoteTokenAddress: this.quoteTokenAddress,
          baseTokenAddress: this.baseTokenAddress,
          fee: this.fee,
        },
      ]) as Bytes,
    }
  }
}
