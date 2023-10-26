/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export type OrderInfoStruct = {
  market: PromiseOrValue<string>;
  trader: PromiseOrValue<string>;
  nonce: PromiseOrValue<BigNumberish>;
  deadline: PromiseOrValue<BigNumberish>;
};

export type OrderInfoStructOutput = [string, string, BigNumber, BigNumber] & {
  market: string;
  trader: string;
  nonce: BigNumber;
  deadline: BigNumber;
};

export type PerpOrderStruct = {
  info: OrderInfoStruct;
  positionId: PromiseOrValue<BigNumberish>;
  pairId: PromiseOrValue<BigNumberish>;
  tradeAmount: PromiseOrValue<BigNumberish>;
  marginAmount: PromiseOrValue<BigNumberish>;
  validatorAddress: PromiseOrValue<string>;
  validationData: PromiseOrValue<BytesLike>;
};

export type PerpOrderStructOutput = [
  OrderInfoStructOutput,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  string,
  string
] & {
  info: OrderInfoStructOutput;
  positionId: BigNumber;
  pairId: BigNumber;
  tradeAmount: BigNumber;
  marginAmount: BigNumber;
  validatorAddress: string;
  validationData: string;
};

export declare namespace ISettlement {
  export type SettlementDataStruct = {
    settlementContractAddress: PromiseOrValue<string>;
    encodedData: PromiseOrValue<BytesLike>;
  };

  export type SettlementDataStructOutput = [string, string] & {
    settlementContractAddress: string;
    encodedData: string;
  };
}

export declare namespace PerpMarket {
  export type PerpTradeResultStruct = {
    entryUpdate: PromiseOrValue<BigNumberish>;
    payoff: PromiseOrValue<BigNumberish>;
  };

  export type PerpTradeResultStructOutput = [BigNumber, BigNumber] & {
    entryUpdate: BigNumber;
    payoff: BigNumber;
  };

  export type UserPositionStruct = {
    id: PromiseOrValue<BigNumberish>;
    fillerMarketId: PromiseOrValue<BigNumberish>;
    owner: PromiseOrValue<string>;
    positionAmount: PromiseOrValue<BigNumberish>;
    entryValue: PromiseOrValue<BigNumberish>;
    marginAmount: PromiseOrValue<BigNumberish>;
    cumulativeFundingRates: PromiseOrValue<BigNumberish>;
  };

  export type UserPositionStructOutput = [
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    id: BigNumber;
    fillerMarketId: BigNumber;
    owner: string;
    positionAmount: BigNumber;
    entryValue: BigNumber;
    marginAmount: BigNumber;
    cumulativeFundingRates: BigNumber;
  };
}

export interface PerpMarketQuoterInterface extends utils.Interface {
  functions: {
    "perpMarket()": FunctionFragment;
    "predyPoolQuoter()": FunctionFragment;
    "quoteExecuteOrder(((address,address,uint256,uint256),uint256,uint64,int256,int256,address,bytes),(address,bytes))": FunctionFragment;
    "quoteUserPosition(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "perpMarket"
      | "predyPoolQuoter"
      | "quoteExecuteOrder"
      | "quoteUserPosition"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "perpMarket",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "predyPoolQuoter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "quoteExecuteOrder",
    values: [PerpOrderStruct, ISettlement.SettlementDataStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "quoteUserPosition",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "perpMarket", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "predyPoolQuoter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "quoteExecuteOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "quoteUserPosition",
    data: BytesLike
  ): Result;

  events: {};
}

export interface PerpMarketQuoter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PerpMarketQuoterInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    perpMarket(overrides?: CallOverrides): Promise<[string]>;

    predyPoolQuoter(overrides?: CallOverrides): Promise<[string]>;

    quoteExecuteOrder(
      order: PerpOrderStruct,
      settlementData: ISettlement.SettlementDataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    quoteUserPosition(
      positionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  perpMarket(overrides?: CallOverrides): Promise<string>;

  predyPoolQuoter(overrides?: CallOverrides): Promise<string>;

  quoteExecuteOrder(
    order: PerpOrderStruct,
    settlementData: ISettlement.SettlementDataStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  quoteUserPosition(
    positionId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    perpMarket(overrides?: CallOverrides): Promise<string>;

    predyPoolQuoter(overrides?: CallOverrides): Promise<string>;

    quoteExecuteOrder(
      order: PerpOrderStruct,
      settlementData: ISettlement.SettlementDataStruct,
      overrides?: CallOverrides
    ): Promise<PerpMarket.PerpTradeResultStructOutput>;

    quoteUserPosition(
      positionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PerpMarket.UserPositionStructOutput>;
  };

  filters: {};

  estimateGas: {
    perpMarket(overrides?: CallOverrides): Promise<BigNumber>;

    predyPoolQuoter(overrides?: CallOverrides): Promise<BigNumber>;

    quoteExecuteOrder(
      order: PerpOrderStruct,
      settlementData: ISettlement.SettlementDataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    quoteUserPosition(
      positionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    perpMarket(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    predyPoolQuoter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    quoteExecuteOrder(
      order: PerpOrderStruct,
      settlementData: ISettlement.SettlementDataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    quoteUserPosition(
      positionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
