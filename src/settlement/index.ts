import { BigNumber, ethers } from 'ethers'

import { UNISWAP_SETTLEMENT_MAPPING } from '../constants'

const UNISWAP_SETTLEMENT_DATA_ABI = [
  'tuple(' +
    ['bytes', 'uint256', 'address', 'address', 'uint256'].join(',') +
    ')',
]

interface SettlementData {
  settlementContractAddress: string
  encodedData: string
}

abstract class BaseSettlement {
  abstract serialize(): SettlementData
}

export class UniswapSettlement extends BaseSettlement {
  settlementContractAddress: string

  constructor(
    public chainId: number,
    public path: string,
    public amountOutMinimumOrInMaximum: BigNumber,
    public quoteTokenAddress: string,
    public baseTokenAddress: string,
    public fee: BigNumber,
    settlementContractAddress?: string
  ) {
    super()

    if (settlementContractAddress) {
      this.settlementContractAddress = settlementContractAddress
    } else {
      this.settlementContractAddress = UNISWAP_SETTLEMENT_MAPPING[chainId]
    }
  }

  serialize(): SettlementData {
    const abiCoder = new ethers.utils.AbiCoder()

    return {
      settlementContractAddress: this.settlementContractAddress,
      encodedData: abiCoder.encode(UNISWAP_SETTLEMENT_DATA_ABI, [
        [
          this.path,
          this.amountOutMinimumOrInMaximum,
          this.quoteTokenAddress,
          this.baseTokenAddress,
          this.fee,
        ],
      ]),
    }
  }
}
