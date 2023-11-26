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
import type {
  FunctionFragment,
  Result,
  EventFragment
} from '@ethersproject/abi'
import type { Listener, Provider } from '@ethersproject/providers'
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue
} from './common'

export declare namespace IFillerMarket {
  export type SignedOrderStruct = {
    order: PromiseOrValue<BytesLike>
    sig: PromiseOrValue<BytesLike>
  }

  export type SignedOrderStructOutput = [string, string] & {
    order: string
    sig: string
  }
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

export interface SpotMarketInterface extends utils.Interface {
  functions: {
    'executeOrder((bytes,bytes),(address,bytes))': FunctionFragment
    'take(bool,address,uint256)': FunctionFragment
  }

  getFunction(nameOrSignatureOrTopic: 'executeOrder' | 'take'): FunctionFragment

  encodeFunctionData(
    functionFragment: 'executeOrder',
    values: [IFillerMarket.SignedOrderStruct, ISettlement.SettlementDataStruct]
  ): string
  encodeFunctionData(
    functionFragment: 'take',
    values: [
      PromiseOrValue<boolean>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string

  decodeFunctionResult(
    functionFragment: 'executeOrder',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'take', data: BytesLike): Result

  events: {
    'SpotTraded(address,address,int256,int256)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'SpotTraded'): EventFragment
}

export interface SpotTradedEventObject {
  baseToken: string
  quoteToken: string
  baseAmount: BigNumber
  quoteAmount: BigNumber
}
export type SpotTradedEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  SpotTradedEventObject
>

export type SpotTradedEventFilter = TypedEventFilter<SpotTradedEvent>

export interface SpotMarket extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  interface: SpotMarketInterface

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
    executeOrder(
      order: IFillerMarket.SignedOrderStruct,
      settlementData: ISettlement.SettlementDataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    take(
      isQuoteAsset: PromiseOrValue<boolean>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>
  }

  executeOrder(
    order: IFillerMarket.SignedOrderStruct,
    settlementData: ISettlement.SettlementDataStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  take(
    isQuoteAsset: PromiseOrValue<boolean>,
    to: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  callStatic: {
    executeOrder(
      order: IFillerMarket.SignedOrderStruct,
      settlementData: ISettlement.SettlementDataStruct,
      overrides?: CallOverrides
    ): Promise<void>

    take(
      isQuoteAsset: PromiseOrValue<boolean>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>
  }

  filters: {
    'SpotTraded(address,address,int256,int256)'(
      baseToken?: null,
      quoteToken?: null,
      baseAmount?: null,
      quoteAmount?: null
    ): SpotTradedEventFilter
    SpotTraded(
      baseToken?: null,
      quoteToken?: null,
      baseAmount?: null,
      quoteAmount?: null
    ): SpotTradedEventFilter
  }

  estimateGas: {
    executeOrder(
      order: IFillerMarket.SignedOrderStruct,
      settlementData: ISettlement.SettlementDataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    take(
      isQuoteAsset: PromiseOrValue<boolean>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>
  }

  populateTransaction: {
    executeOrder(
      order: IFillerMarket.SignedOrderStruct,
      settlementData: ISettlement.SettlementDataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    take(
      isQuoteAsset: PromiseOrValue<boolean>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>
  }
}