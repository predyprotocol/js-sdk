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
  utils
} from 'ethers'
import type { FunctionFragment, Result } from '@ethersproject/abi'
import type { Listener, Provider } from '@ethersproject/providers'
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue
} from './common'

export type OrderInfoStruct = {
  market: PromiseOrValue<string>
  trader: PromiseOrValue<string>
  filler: PromiseOrValue<string>
  nonce: PromiseOrValue<BigNumberish>
  deadline: PromiseOrValue<BigNumberish>
}

export type OrderInfoStructOutput = [
  string,
  string,
  string,
  BigNumber,
  BigNumber
] & {
  market: string
  trader: string
  filler: string
  nonce: BigNumber
  deadline: BigNumber
}

export type GammaOrderStruct = {
  info: OrderInfoStruct
  positionId: PromiseOrValue<BigNumberish>
  pairId: PromiseOrValue<BigNumberish>
  entryTokenAddress: PromiseOrValue<string>
  tradeAmount: PromiseOrValue<BigNumberish>
  tradeAmountSqrt: PromiseOrValue<BigNumberish>
  marginAmount: PromiseOrValue<BigNumberish>
  validatorAddress: PromiseOrValue<string>
  validationData: PromiseOrValue<BytesLike>
}

export type GammaOrderStructOutput = [
  OrderInfoStructOutput,
  BigNumber,
  BigNumber,
  string,
  BigNumber,
  BigNumber,
  BigNumber,
  string,
  string
] & {
  info: OrderInfoStructOutput
  positionId: BigNumber
  pairId: BigNumber
  entryTokenAddress: string
  tradeAmount: BigNumber
  tradeAmountSqrt: BigNumber
  marginAmount: BigNumber
  validatorAddress: string
  validationData: string
}

export declare namespace ISettlement {
  export type SettlementDataStruct = {
    settlementContractAddress: PromiseOrValue<string>
    encodedData: PromiseOrValue<BytesLike>
  }

  export type SettlementDataStructOutput = [string, string] & {
    settlementContractAddress: string
    encodedData: string
  }
}

export declare namespace IPredyPool {
  export type PayoffStruct = {
    perpEntryUpdate: PromiseOrValue<BigNumberish>
    sqrtEntryUpdate: PromiseOrValue<BigNumberish>
    sqrtRebalanceEntryUpdateUnderlying: PromiseOrValue<BigNumberish>
    sqrtRebalanceEntryUpdateStable: PromiseOrValue<BigNumberish>
    perpPayoff: PromiseOrValue<BigNumberish>
    sqrtPayoff: PromiseOrValue<BigNumberish>
  }

  export type PayoffStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    perpEntryUpdate: BigNumber
    sqrtEntryUpdate: BigNumber
    sqrtRebalanceEntryUpdateUnderlying: BigNumber
    sqrtRebalanceEntryUpdateStable: BigNumber
    perpPayoff: BigNumber
    sqrtPayoff: BigNumber
  }

  export type TradeResultStruct = {
    payoff: IPredyPool.PayoffStruct
    vaultId: PromiseOrValue<BigNumberish>
    fee: PromiseOrValue<BigNumberish>
    minMargin: PromiseOrValue<BigNumberish>
    averagePrice: PromiseOrValue<BigNumberish>
    sqrtTwap: PromiseOrValue<BigNumberish>
    sqrtPrice: PromiseOrValue<BigNumberish>
  }

  export type TradeResultStructOutput = [
    IPredyPool.PayoffStructOutput,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    payoff: IPredyPool.PayoffStructOutput
    vaultId: BigNumber
    fee: BigNumber
    minMargin: BigNumber
    averagePrice: BigNumber
    sqrtTwap: BigNumber
    sqrtPrice: BigNumber
  }
}

export interface PerpMarketQuoterInterface extends utils.Interface {
  functions: {
    'gammaTradeMarket()': FunctionFragment
    'predyPoolQuoter()': FunctionFragment
    'quoteExecuteOrder(((address,address,address,uint256,uint256),uint256,uint64,address,int256,int256,int256,address,bytes),(address,bytes))': FunctionFragment
  }

  getFunction(
    nameOrSignatureOrTopic:
      | 'gammaTradeMarket'
      | 'predyPoolQuoter'
      | 'quoteExecuteOrder'
  ): FunctionFragment

  encodeFunctionData(
    functionFragment: 'gammaTradeMarket',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'predyPoolQuoter',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'quoteExecuteOrder',
    values: [GammaOrderStruct, ISettlement.SettlementDataStruct]
  ): string

  decodeFunctionResult(
    functionFragment: 'gammaTradeMarket',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'predyPoolQuoter',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'quoteExecuteOrder',
    data: BytesLike
  ): Result

  events: {}
}

export interface PerpMarketQuoter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  interface: PerpMarketQuoterInterface

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>
  listeners(eventName?: string): Array<Listener>
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this
  removeAllListeners(eventName?: string): this
  off: OnEvent<this>
  on: OnEvent<this>
  once: OnEvent<this>
  removeListener: OnEvent<this>

  functions: {
    gammaTradeMarket(overrides?: CallOverrides): Promise<[string]>

    predyPoolQuoter(overrides?: CallOverrides): Promise<[string]>

    quoteExecuteOrder(
      order: GammaOrderStruct,
      settlementData: ISettlement.SettlementDataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>
  }

  gammaTradeMarket(overrides?: CallOverrides): Promise<string>

  predyPoolQuoter(overrides?: CallOverrides): Promise<string>

  quoteExecuteOrder(
    order: GammaOrderStruct,
    settlementData: ISettlement.SettlementDataStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  callStatic: {
    gammaTradeMarket(overrides?: CallOverrides): Promise<string>

    predyPoolQuoter(overrides?: CallOverrides): Promise<string>

    quoteExecuteOrder(
      order: GammaOrderStruct,
      settlementData: ISettlement.SettlementDataStruct,
      overrides?: CallOverrides
    ): Promise<IPredyPool.TradeResultStructOutput>
  }

  filters: {}

  estimateGas: {
    gammaTradeMarket(overrides?: CallOverrides): Promise<BigNumber>

    predyPoolQuoter(overrides?: CallOverrides): Promise<BigNumber>

    quoteExecuteOrder(
      order: GammaOrderStruct,
      settlementData: ISettlement.SettlementDataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>
  }

  populateTransaction: {
    gammaTradeMarket(overrides?: CallOverrides): Promise<PopulatedTransaction>

    predyPoolQuoter(overrides?: CallOverrides): Promise<PopulatedTransaction>

    quoteExecuteOrder(
      order: GammaOrderStruct,
      settlementData: ISettlement.SettlementDataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>
  }
}
