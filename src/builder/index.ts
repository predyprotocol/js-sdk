import { BigNumber, ethers } from "ethers";

import { PerpDutchOrderValidationData, PerpOrder } from "../order/PerpOrder";
import { PerpOrderParams } from "../order/types";

export class OrderBuilder {
  protected perpOrder: Partial<PerpOrderParams>;

  constructor(private chainId: number, private permit2Address: string) {
    // set defaults
    this.perpOrder = {
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
    if (this.perpOrder.orderInfo) {
      this.perpOrder.orderInfo.deadline = deadline;
    }

    return this;
  }

  nonce(nonce: BigNumber): OrderBuilder {
    if (this.perpOrder.orderInfo) {
      this.perpOrder.orderInfo.nonce = nonce;
    }

    return this;
  }

  tradeAmount(tradeAmount: BigNumber): OrderBuilder {
    this.perpOrder.tradeAmount = tradeAmount;

    return this;
  }

  entryTokenAddress(entryTokenAddress: string): OrderBuilder {
    this.perpOrder.entryTokenAddress = entryTokenAddress;

    return this;
  }

  build(): PerpOrder {
    return new PerpOrder(
      Object.assign(this.perpOrder),
      this.chainId,
      this.permit2Address
    );
  }
}

export class DutchOrderBuilder extends OrderBuilder {
  constructor(chainId: number, permit2Address: string) {
    super(chainId, permit2Address);

    this.perpOrder.validatorAddress = "";
  }
  validationData(
    startPrice: number,
    endPrice: number,
    startTime: number,
    endTime: number
  ): DutchOrderBuilder {
    const validationData = new PerpDutchOrderValidationData(
      startPrice,
      endPrice,
      startTime,
      endTime
    );

    this.perpOrder.validationData = validationData.serialize();

    return this;
  }
}
