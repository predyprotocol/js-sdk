import { UNISWAP_SETTLEMENT_MAPPING } from '../constants'
import { Bytes } from '../types'

import { SettlementParams } from './types'

export function getUniswapSettlement(
  chainId: number,
  encodedData: Bytes,
  maxQuoteAmount: bigint,
  price: bigint,
  fee: bigint
): SettlementParams {
  return {
    contractAddress: UNISWAP_SETTLEMENT_MAPPING[chainId],
    encodedData: encodedData,
    maxQuoteAmount: maxQuoteAmount,
    price: price,
    fee: fee,
  }
}
