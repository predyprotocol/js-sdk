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
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
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
  filler: PromiseOrValue<string>;
  nonce: PromiseOrValue<BigNumberish>;
  deadline: PromiseOrValue<BigNumberish>;
};

export type OrderInfoStructOutput = [
  string,
  string,
  string,
  BigNumber,
  BigNumber
] & {
  market: string;
  trader: string;
  filler: string;
  nonce: BigNumber;
  deadline: BigNumber;
};

export type GammaOrderStruct = {
  info: OrderInfoStruct;
  positionId: PromiseOrValue<BigNumberish>;
  pairId: PromiseOrValue<BigNumberish>;
  entryTokenAddress: PromiseOrValue<string>;
  tradeAmount: PromiseOrValue<BigNumberish>;
  tradeAmountSqrt: PromiseOrValue<BigNumberish>;
  marginAmount: PromiseOrValue<BigNumberish>;
  canceler: PromiseOrValue<string>;
  takeProfitPrice: PromiseOrValue<BigNumberish>;
  stopLossPrice: PromiseOrValue<BigNumberish>;
  slippageTolerance: PromiseOrValue<BigNumberish>;
  validatorAddress: PromiseOrValue<string>;
  validationData: PromiseOrValue<BytesLike>;
};

export type GammaOrderStructOutput = [
  OrderInfoStructOutput,
  BigNumber,
  BigNumber,
  string,
  BigNumber,
  BigNumber,
  BigNumber,
  string,
  BigNumber,
  BigNumber,
  BigNumber,
  string,
  string
] & {
  info: OrderInfoStructOutput;
  positionId: BigNumber;
  pairId: BigNumber;
  entryTokenAddress: string;
  tradeAmount: BigNumber;
  tradeAmountSqrt: BigNumber;
  marginAmount: BigNumber;
  canceler: string;
  takeProfitPrice: BigNumber;
  stopLossPrice: BigNumber;
  slippageTolerance: BigNumber;
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

export declare namespace IPredyPool {
  export type PayoffStruct = {
    perpEntryUpdate: PromiseOrValue<BigNumberish>;
    sqrtEntryUpdate: PromiseOrValue<BigNumberish>;
    sqrtRebalanceEntryUpdateUnderlying: PromiseOrValue<BigNumberish>;
    sqrtRebalanceEntryUpdateStable: PromiseOrValue<BigNumberish>;
    perpPayoff: PromiseOrValue<BigNumberish>;
    sqrtPayoff: PromiseOrValue<BigNumberish>;
  };

  export type PayoffStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    perpEntryUpdate: BigNumber;
    sqrtEntryUpdate: BigNumber;
    sqrtRebalanceEntryUpdateUnderlying: BigNumber;
    sqrtRebalanceEntryUpdateStable: BigNumber;
    perpPayoff: BigNumber;
    sqrtPayoff: BigNumber;
  };

  export type TradeResultStruct = {
    payoff: IPredyPool.PayoffStruct;
    vaultId: PromiseOrValue<BigNumberish>;
    fee: PromiseOrValue<BigNumberish>;
    minMargin: PromiseOrValue<BigNumberish>;
    averagePrice: PromiseOrValue<BigNumberish>;
    sqrtTwap: PromiseOrValue<BigNumberish>;
    sqrtPrice: PromiseOrValue<BigNumberish>;
  };

  export type TradeResultStructOutput = [
    IPredyPool.PayoffStructOutput,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    payoff: IPredyPool.PayoffStructOutput;
    vaultId: BigNumber;
    fee: BigNumber;
    minMargin: BigNumber;
    averagePrice: BigNumber;
    sqrtTwap: BigNumber;
    sqrtPrice: BigNumber;
  };

  export type TradeParamsStruct = {
    pairId: PromiseOrValue<BigNumberish>;
    vaultId: PromiseOrValue<BigNumberish>;
    tradeAmount: PromiseOrValue<BigNumberish>;
    tradeAmountSqrt: PromiseOrValue<BigNumberish>;
    extraData: PromiseOrValue<BytesLike>;
  };

  export type TradeParamsStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string
  ] & {
    pairId: BigNumber;
    vaultId: BigNumber;
    tradeAmount: BigNumber;
    tradeAmountSqrt: BigNumber;
    extraData: string;
  };
}

export declare namespace IFillerMarket {
  export type SignedOrderStruct = {
    order: PromiseOrValue<BytesLike>;
    sig: PromiseOrValue<BytesLike>;
  };

  export type SignedOrderStructOutput = [string, string] & {
    order: string;
    sig: string;
  };
}

export interface GammaTradeMarketInterface extends utils.Interface {
  functions: {
    "cancelOrder(uint256)": FunctionFragment;
    "close(uint256,(address,bytes))": FunctionFragment;
    "executeOrder((bytes,bytes),(address,bytes))": FunctionFragment;
    "predyTradeAfterCallback((uint256,uint256,int256,int256,bytes),((int256,int256,int256,int256,int256,int256),uint256,int256,int256,int256,uint256,uint256))": FunctionFragment;
    "quoteExecuteOrder(((address,address,address,uint256,uint256),uint256,uint64,address,int256,int256,int256,address,uint256,uint256,uint64,address,bytes),(address,bytes),address)": FunctionFragment;
    "updateQuoteTokenMap(uint256)": FunctionFragment;
    "userPositions(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "cancelOrder"
      | "close"
      | "executeOrder"
      | "predyTradeAfterCallback"
      | "quoteExecuteOrder"
      | "updateQuoteTokenMap"
      | "userPositions"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "cancelOrder",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "close",
    values: [PromiseOrValue<BigNumberish>, ISettlement.SettlementDataStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "executeOrder",
    values: [IFillerMarket.SignedOrderStruct, ISettlement.SettlementDataStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "predyTradeAfterCallback",
    values: [IPredyPool.TradeParamsStruct, IPredyPool.TradeResultStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "quoteExecuteOrder",
    values: [
      GammaOrderStruct,
      ISettlement.SettlementDataStruct,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "updateQuoteTokenMap",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "userPositions",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "cancelOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "close", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "executeOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "predyTradeAfterCallback",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "quoteExecuteOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateQuoteTokenMap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "userPositions",
    data: BytesLike
  ): Result;

  events: {
    "Traded(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Traded"): EventFragment;
}

export interface TradedEventObject {
  trader: string;
  vaultId: BigNumber;
}
export type TradedEvent = TypedEvent<[string, BigNumber], TradedEventObject>;

export type TradedEventFilter = TypedEventFilter<TradedEvent>;

export interface GammaTradeMarket extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GammaTradeMarketInterface;

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
    cancelOrder(
      positionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    close(
      positionId: PromiseOrValue<BigNumberish>,
      settlementData: ISettlement.SettlementDataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    executeOrder(
      order: IFillerMarket.SignedOrderStruct,
      settlementData: ISettlement.SettlementDataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    predyTradeAfterCallback(
      tradeParams: IPredyPool.TradeParamsStruct,
      tradeResult: IPredyPool.TradeResultStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    quoteExecuteOrder(
      gammaOrder: GammaOrderStruct,
      settlementData: ISettlement.SettlementDataStruct,
      quoter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateQuoteTokenMap(
      pairId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    userPositions(
      vaultId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, BigNumber, BigNumber] & {
        owner: string;
        canceler: string;
        takeProfitPrice: BigNumber;
        stopLossPrice: BigNumber;
        slippageTolerance: BigNumber;
      }
    >;
  };

  cancelOrder(
    positionId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  close(
    positionId: PromiseOrValue<BigNumberish>,
    settlementData: ISettlement.SettlementDataStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  executeOrder(
    order: IFillerMarket.SignedOrderStruct,
    settlementData: ISettlement.SettlementDataStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  predyTradeAfterCallback(
    tradeParams: IPredyPool.TradeParamsStruct,
    tradeResult: IPredyPool.TradeResultStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  quoteExecuteOrder(
    gammaOrder: GammaOrderStruct,
    settlementData: ISettlement.SettlementDataStruct,
    quoter: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateQuoteTokenMap(
    pairId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  userPositions(
    vaultId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, string, BigNumber, BigNumber, BigNumber] & {
      owner: string;
      canceler: string;
      takeProfitPrice: BigNumber;
      stopLossPrice: BigNumber;
      slippageTolerance: BigNumber;
    }
  >;

  callStatic: {
    cancelOrder(
      positionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    close(
      positionId: PromiseOrValue<BigNumberish>,
      settlementData: ISettlement.SettlementDataStruct,
      overrides?: CallOverrides
    ): Promise<IPredyPool.TradeResultStructOutput>;

    executeOrder(
      order: IFillerMarket.SignedOrderStruct,
      settlementData: ISettlement.SettlementDataStruct,
      overrides?: CallOverrides
    ): Promise<IPredyPool.TradeResultStructOutput>;

    predyTradeAfterCallback(
      tradeParams: IPredyPool.TradeParamsStruct,
      tradeResult: IPredyPool.TradeResultStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    quoteExecuteOrder(
      gammaOrder: GammaOrderStruct,
      settlementData: ISettlement.SettlementDataStruct,
      quoter: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateQuoteTokenMap(
      pairId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    userPositions(
      vaultId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, BigNumber, BigNumber] & {
        owner: string;
        canceler: string;
        takeProfitPrice: BigNumber;
        stopLossPrice: BigNumber;
        slippageTolerance: BigNumber;
      }
    >;
  };

  filters: {
    "Traded(address,uint256)"(trader?: null, vaultId?: null): TradedEventFilter;
    Traded(trader?: null, vaultId?: null): TradedEventFilter;
  };

  estimateGas: {
    cancelOrder(
      positionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    close(
      positionId: PromiseOrValue<BigNumberish>,
      settlementData: ISettlement.SettlementDataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    executeOrder(
      order: IFillerMarket.SignedOrderStruct,
      settlementData: ISettlement.SettlementDataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    predyTradeAfterCallback(
      tradeParams: IPredyPool.TradeParamsStruct,
      tradeResult: IPredyPool.TradeResultStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    quoteExecuteOrder(
      gammaOrder: GammaOrderStruct,
      settlementData: ISettlement.SettlementDataStruct,
      quoter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateQuoteTokenMap(
      pairId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    userPositions(
      vaultId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    cancelOrder(
      positionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    close(
      positionId: PromiseOrValue<BigNumberish>,
      settlementData: ISettlement.SettlementDataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    executeOrder(
      order: IFillerMarket.SignedOrderStruct,
      settlementData: ISettlement.SettlementDataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    predyTradeAfterCallback(
      tradeParams: IPredyPool.TradeParamsStruct,
      tradeResult: IPredyPool.TradeResultStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    quoteExecuteOrder(
      gammaOrder: GammaOrderStruct,
      settlementData: ISettlement.SettlementDataStruct,
      quoter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateQuoteTokenMap(
      pairId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    userPositions(
      vaultId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
