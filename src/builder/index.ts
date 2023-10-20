import { BigNumber, ethers } from "ethers";

import {
  DutchOrderLib,
  DutchOrderValidationData,
  GeneralOrderLib,
} from "../order";
import { GeneralOrder } from "../order/types";

export class OrderBuilder {
  protected generalOrder: Partial<GeneralOrder>;

  constructor(private chainId: number, private permit2Address: string) {
    // set defaults
    this.generalOrder = {
      validatorAddress: ethers.constants.AddressZero,
      validationData: "0x",
      orderInfo: {
        market: ethers.constants.AddressZero,
        trader: ethers.constants.AddressZero,
        deadline: 0,
        nonce: BigNumber.from(0),
      },
    };
  }

  deadline(deadline: number): OrderBuilder {
    if (this.generalOrder.orderInfo) {
      this.generalOrder.orderInfo.deadline = deadline;
    }

    return this;
  }

  nonce(nonce: BigNumber): OrderBuilder {
    if (this.generalOrder.orderInfo) {
      this.generalOrder.orderInfo.nonce = nonce;
    }

    return this;
  }

  tradeAmount(tradeAmount: BigNumber): OrderBuilder {
    this.generalOrder.tradeAmount = tradeAmount;

    return this;
  }

  tradeAmountSqrt(tradeAmountSqrt: BigNumber): OrderBuilder {
    this.generalOrder.tradeAmountSqrt = tradeAmountSqrt;

    return this;
  }

  build(): GeneralOrderLib {
    return new GeneralOrderLib(
      Object.assign(this.generalOrder),
      this.chainId,
      this.permit2Address
    );
  }
}

export class DutchOrderBuilder extends OrderBuilder {
  constructor(chainId: number, permit2Address: string) {
    super(chainId, permit2Address);

    this.generalOrder.validatorAddress = "";
  }
  validationData(
    dutchOrderValidationData: DutchOrderValidationData
  ): DutchOrderBuilder {
    const dutchOrderLib = new DutchOrderLib(dutchOrderValidationData);

    this.generalOrder.validationData = dutchOrderLib.serialize();

    return this;
  }
}
