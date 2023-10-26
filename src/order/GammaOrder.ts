import {
  PermitTransferFrom,
  PermitTransferFromData,
  SignatureTransfer,
  Witness,
} from "@uniswap/permit2-sdk";
import { PERMIT2_MAPPING } from "@uniswap/uniswapx-sdk";
import { ethers } from "ethers";

import { BaseValidationData, GammaOrderParams } from "./types";

const GAMMA_ORDER_TYPES = {
  GeneralOrderParams: [
    { name: "info", type: "OrderInfo" },
    { name: "positionId", type: "uint256" },
    { name: "pairId", type: "uint256" },
    { name: "entryTokenAddress", type: "address" },
    { name: "tradeAmount", type: "int256" },
    { name: "tradeAmountSqrt", type: "int256" },
    { name: "marginAmount", type: "int256" },
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

const GAMMA_ORDER_ABI = [
  "tuple(" +
    [
      "tuple(address,address,uint256,uint256)",
      "uint256",
      "address",
      "uint256",
      "int256",
      "int256",
      "int256",
      "address",
      "bytes",
    ].join(",") +
    ")",
];

export class GammaOrder {
  public permit2Address: string;

  constructor(
    public readonly generalOrder: GammaOrderParams,
    readonly chainId: number,
    readonly _permit2Address?: string
  ) {
    if (_permit2Address) {
      this.permit2Address = _permit2Address;
    } else {
      this.permit2Address = PERMIT2_MAPPING[chainId];
    }
  }

  serialize(): string {
    const abiCoder = new ethers.utils.AbiCoder();

    return abiCoder.encode(GAMMA_ORDER_ABI, [
      [
        [
          this.generalOrder.orderInfo.market,
          this.generalOrder.orderInfo.trader,
          this.generalOrder.orderInfo.nonce,
          this.generalOrder.orderInfo.deadline,
        ],
        this.generalOrder.pairId,
        this.generalOrder.entryTokenAddress,
        this.generalOrder.positionId,
        this.generalOrder.tradeAmount,
        this.generalOrder.tradeAmountSqrt,
        this.generalOrder.marginAmount,
        this.generalOrder.validatorAddress,
        this.generalOrder.validationData,
      ],
    ]);
  }

  static parse(encoded: string, chainId: number, permit2?: string): GammaOrder {
    const abiCoder = new ethers.utils.AbiCoder();
    const decoded = abiCoder.decode(GAMMA_ORDER_ABI, encoded);

    const [
      [
        [market, trader, nonce, deadline],
        pairId,
        entryTokenAddress,
        positionId,
        tradeAmount,
        tradeAmountSqrt,
        marginAmount,
        validatorAddress,
        validationData,
      ],
    ] = decoded;

    return new GammaOrder(
      {
        orderInfo: { market, trader, nonce, deadline: deadline.toNumber() },
        pairId: pairId.toNumber(),
        positionId: positionId.toNumber(),
        tradeAmount,
        tradeAmountSqrt,
        marginAmount,
        entryTokenAddress,
        validatorAddress,
        validationData,
        chainId,
      },
      chainId,
      permit2
    );
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
      entryTokenAddress: this.generalOrder.entryTokenAddress,
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
        token: this.generalOrder.entryTokenAddress,
        amount: this.generalOrder.marginAmount,
      },
      spender: this.generalOrder.orderInfo.market,
      nonce: this.generalOrder.orderInfo.nonce,
      deadline: this.generalOrder.orderInfo.deadline,
    };
  }

  private witness(): Witness {
    return {
      witness: this.witnessInfo(),
      witnessTypeName: "GammaOrder",
      witnessType: GAMMA_ORDER_TYPES,
    };
  }

  hash(): string {
    return ethers.utils._TypedDataEncoder
      .from(GAMMA_ORDER_TYPES)
      .hash(this.witnessInfo());
  }
}

const DUTCH_ORDER_VALIDATION_ABI = [
  "tuple(" + ["uint256", "uint256", "uint256", "uint256"].join(",") + ")",
];

export class DutchOrderValidationData extends BaseValidationData {
  constructor(
    public startPrice: number,
    public endPrice: number,
    public startTime: number,
    public endTime: number
  ) {
    super();
  }

  serialize(): string {
    const abiCoder = new ethers.utils.AbiCoder();

    return abiCoder.encode(DUTCH_ORDER_VALIDATION_ABI, [
      this.startPrice,
      this.endPrice,
      this.startTime,
      this.endTime,
    ]);
  }
}

const LIMIT_ORDER_VALIDATION_ABI = [
  "tuple(" + ["uint256", "uint256", "uint256", "uint256"].join(",") + ")",
];

export class LimitOrderValidationData extends BaseValidationData {
  constructor(
    public triggerPrice: number,
    public triggerPriceSqrt: number,
    public limitPrice: number,
    public limitPriceSqrt: number
  ) {
    super();
  }

  serialize(): string {
    const abiCoder = new ethers.utils.AbiCoder();

    return abiCoder.encode(LIMIT_ORDER_VALIDATION_ABI, [
      this.triggerPrice,
      this.triggerPriceSqrt,
      this.limitPrice,
      this.limitPriceSqrt,
    ]);
  }
}
