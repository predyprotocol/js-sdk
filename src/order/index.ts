import {
  PermitTransferFrom,
  PermitTransferFromData,
  SignatureTransfer,
  Witness,
} from "@uniswap/permit2-sdk";
import { ethers } from "ethers";

import { GeneralOrder } from "./types";

export interface DutchOrderValidationData {
  startPrice: number;
  endPrice: number;
  startTime: number;
  endTime: number;
}

export interface LimitOrderValidationData {
  triggerPrice: number;
  triggerPriceSqrt: number;
  limitPrice: number;
  limitPriceSqrt: number;
}

const GENERAL_ORDER_TYPES = {
  GeneralOrder: [
    { name: "info", type: "OrderInfo" },
    { name: "positionId", type: "uint256" },
    { name: "pairId", type: "uint256" },
    { name: "validatorAddress", type: "address" },
    { name: "validationData", type: "bytes" },
  ],
  OrderInfo: [
    { name: "market", type: "address" },
    { name: "trader", type: "address" },
    { name: "nonce", type: "uint256" },
    { name: "deadline", type: "uint256" },
  ],
};

export class GeneralOrderLib {
  public permit2Address: string;

  constructor(
    public readonly generalOrder: GeneralOrder,
    readonly chainId: number,
    readonly _permit2Address: string
  ) {
    this.permit2Address = _permit2Address;
  }

  private witnessInfo() {
    return {
      info: {
        reactor: this.generalOrder.orderInfo.market,
        swapper: this.generalOrder.orderInfo.trader,
        nonce: this.generalOrder.orderInfo.nonce,
        deadline: this.generalOrder.orderInfo.deadline,
      },
      positionId: this.generalOrder.positionId,
      pairId: this.generalOrder.pairId,
      tradeAmount: this.generalOrder.tradeAmount,
      tradeAmountSqrt: this.generalOrder.tradeAmountSqrt,
      marginAmount: this.generalOrder.marginAmount,
      validatorAddress: this.generalOrder.validatorAddress,
      validationData: this.generalOrder.validationData,
    };
  }

  permitData(): PermitTransferFromData {
    return SignatureTransfer.getPermitData(
      this.toPermit(),
      this.permit2Address,
      this.chainId,
      this.witness()
    ) as PermitTransferFromData;
  }

  toPermit(): PermitTransferFrom {
    return {
      permitted: {
        // TODO: token address
        token: "",
        amount: this.generalOrder.marginAmount,
      },
      spender: this.generalOrder.orderInfo.market,
      nonce: this.generalOrder.orderInfo.nonce,
      deadline: this.generalOrder.orderInfo.nonce,
    };
  }

  private witness(): Witness {
    return {
      witness: this.witnessInfo(),
      witnessTypeName: "GeneralOrder",
      witnessType: GENERAL_ORDER_TYPES,
    };
  }

  hash(): string {
    return ethers.utils._TypedDataEncoder
      .from(GENERAL_ORDER_TYPES)
      .hash(this.witnessInfo());
  }
}

const DUTCH_ORDER_ABI = [
  "tuple(" + ["uint256", "uint256", "uint256", "uint256"].join(",") + ")",
];

export class DutchOrderLib {
  constructor(public info: DutchOrderValidationData) {}

  serialize(): string {
    const abiCoder = new ethers.utils.AbiCoder();

    return abiCoder.encode(DUTCH_ORDER_ABI, [
      this.info.startPrice,
      this.info.endPrice,
      this.info.startTime,
      this.info.endTime,
    ]);
  }
}
