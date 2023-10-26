import { BigNumber, ethers } from "ethers";

const UNISWAP_SETTLEMENT_DATA_ABI = [
  "tuple(" +
    ["bytes", "uint256", "address", "address", "uint256"].join(",") +
    ")",
];

interface SettlementData {
  settlementContractAddress: string;
  encodedData: string;
}

abstract class BaseSettlement {
  abstract serialize(): SettlementData;
}

export class UniswapSettlement extends BaseSettlement {
  constructor(
    public path: string,
    public amountOutMinimumOrInMaximum: BigNumber,
    public quoteTokenAddress: string,
    public baseTokenAddress: string,
    public fee: BigNumber
  ) {
    super();
  }

  serialize(): SettlementData {
    const abiCoder = new ethers.utils.AbiCoder();

    return {
      settlementContractAddress: "",
      encodedData: abiCoder.encode(UNISWAP_SETTLEMENT_DATA_ABI, [
        this.path,
        this.amountOutMinimumOrInMaximum,
        this.quoteTokenAddress,
        this.baseTokenAddress,
        this.fee,
      ]),
    };
  }
}

/*
class SettlementBuilder {
  constructor(public quoter: Quoter) {

  }

  async test(provider: BaseProvider, order: any, settlementData: BaseSettlement) {
    const PerpMarket = PerpMarketQuoter__factory.connect('', provider)
    const quoterMarket = PredyPoolQuoter__factory.connect('', provider)

    const baseAmountDelta = await quoterMarket.callStatic.quoteBaseAmountDelta(order)

    // calculate amountOutMinimumOrInMaximum
    PerpMarket.quoteExecuteOrder(order, settlementData.serialize())
    const amountOut = this.quoter.quote('', BigNumber.from(0))

    // TODO calculate settlement data
  }
}

*/
