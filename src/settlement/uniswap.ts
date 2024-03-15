import { UNISWAP_SETTLEMENT_MAPPING } from '../constants'
import { Bytes } from '../types'

import { SettlementParams, SettlementParamsV2 } from './types'

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

export function getUniswapSettlementV2(
  chainId: number,
  encodedData: Bytes,
  maxQuoteAmountPrice: bigint,
  price: bigint,
  feePrice: bigint,
  minFee: bigint
): SettlementParamsV2 {
  return {
    contractAddress: UNISWAP_SETTLEMENT_MAPPING[chainId],
    encodedData: encodedData,
    maxQuoteAmountPrice: maxQuoteAmountPrice,
    price: price,
    feePrice: feePrice,
    minFee: minFee,
  }
}
