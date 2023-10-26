import { BaseProvider } from "@ethersproject/providers";
import { PERMIT2_MAPPING } from "@uniswap/uniswapx-sdk";
import { BigNumber } from "ethers";

import { DutchOrderBuilder } from "../builder";

interface TradeOptions {
  side: "BUY" | "SELL";
  orderType: "MARKET" | "LIMIT";
  quantity: number;
  price?: number;
  nonce: BigNumber;
}

export class Trade {
  leverage: number;
  defaultAuctionTime = 120;
  defaultTimeUntilDeadline = 1200;

  constructor(private provider: BaseProvider) {
    this.leverage = 1;
  }

  changeInitialLeverage(leverage: number) {
    this.leverage = leverage;
  }

  async trade(options: TradeOptions) {
    const network = await this.provider.getNetwork();
    const permit2Address = PERMIT2_MAPPING[network.chainId];
    const block = await this.provider.getBlock("latest");
    const now = block.timestamp;

    const builder = new DutchOrderBuilder(network.chainId, permit2Address);

    const tradeAmount = BigNumber.from(Math.floor(options.quantity * 100)).mul(
      "10000000000000000"
    );

    return builder
      .validationData(0, 0, now, now + this.defaultAuctionTime)
      .deadline(now + this.defaultTimeUntilDeadline)
      .nonce(options.nonce)
      .tradeAmount(options.side === "BUY" ? tradeAmount : tradeAmount.mul(-1))
      .build();
  }
}
