import { BigNumber } from "ethers";

export interface OrderInfo {
  market: string;
  trader: string;
  nonce: BigNumber;
  deadline: number;
}

export interface GeneralOrder {
  orderInfo: OrderInfo;
  positionId: number;
  pairId: number;
  tradeAmount: BigNumber;
  tradeAmountSqrt: BigNumber;
  marginAmount: BigNumber;
  validatorAddress: string;
  validationData: string;
  chainId: number;
}
