import { UNISWAP_SETTLEMENT_MAPPING } from "../constants";
import { Bytes } from "../types";
import { SettlementParamsItem } from "./types";

export function getUniswapSettlement(chainId: number, encodedData: Bytes, maxQuoteAmount: bigint, partialBaseAmount: bigint): SettlementParamsItem {
	return {
		contractAddress: UNISWAP_SETTLEMENT_MAPPING[chainId],
		encodedData: encodedData,
		maxQuoteAmount: maxQuoteAmount,
		partialBaseAmount: partialBaseAmount,
	}
}
