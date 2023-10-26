/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  PerpMarketQuoter,
  PerpMarketQuoterInterface,
} from "../PerpMarketQuoter";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract PerpMarket",
        name: "_perpMarket",
        type: "address",
      },
      {
        internalType: "contract PredyPoolQuoter",
        name: "_predyPoolQuoter",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "perpMarket",
    outputs: [
      {
        internalType: "contract PerpMarket",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "predyPoolQuoter",
    outputs: [
      {
        internalType: "contract PredyPoolQuoter",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "market",
                type: "address",
              },
              {
                internalType: "address",
                name: "trader",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "nonce",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "deadline",
                type: "uint256",
              },
            ],
            internalType: "struct OrderInfo",
            name: "info",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "positionId",
            type: "uint256",
          },
          {
            internalType: "uint64",
            name: "pairId",
            type: "uint64",
          },
          {
            internalType: "int256",
            name: "tradeAmount",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "marginAmount",
            type: "int256",
          },
          {
            internalType: "address",
            name: "validatorAddress",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "validationData",
            type: "bytes",
          },
        ],
        internalType: "struct PerpOrder",
        name: "order",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "address",
            name: "settlementContractAddress",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "encodedData",
            type: "bytes",
          },
        ],
        internalType: "struct ISettlement.SettlementData",
        name: "settlementData",
        type: "tuple",
      },
    ],
    name: "quoteExecuteOrder",
    outputs: [
      {
        components: [
          {
            internalType: "int256",
            name: "entryUpdate",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "payoff",
            type: "int256",
          },
        ],
        internalType: "struct PerpMarket.PerpTradeResult",
        name: "perpTradeResult",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "positionId",
        type: "uint256",
      },
    ],
    name: "quoteUserPosition",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "fillerMarketId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "int256",
            name: "positionAmount",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "entryValue",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "marginAmount",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "cumulativeFundingRates",
            type: "int256",
          },
        ],
        internalType: "struct PerpMarket.UserPosition",
        name: "userPosition",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161092338038061092383398101604081905261002f91610078565b600080546001600160a01b039384166001600160a01b031991821617909155600180549290931691161790556100b2565b6001600160a01b038116811461007557600080fd5b50565b6000806040838503121561008b57600080fd5b825161009681610060565b60208401519092506100a781610060565b809150509250929050565b610862806100c16000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063462bf388146100515780637521ec921461008157806388c2a408146100ee57806389e678be14610101575b600080fd5b600054610064906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b61009461008f36600461033f565b61012f565b604051610078919081518152602080830151908201526040808301516001600160a01b031690820152606080830151908201526080808301519082015260a0808301519082015260c0918201519181019190915260e00190565b600154610064906001600160a01b031681565b61011461010f366004610555565b6101d4565b60408051825181526020928301519281019290925201610078565b6101376102f9565b600054604051633a90f64960e11b8152600481018490526001600160a01b0390911690637521ec9290602401600060405180830381600087803b15801561017d57600080fd5b505af192505050801561018e575060015b6101cf573d8080156101bc576040519150601f19603f3d011682016040523d82523d6000602084013e6101c1565b606091505b506101cb81610291565b9150505b919050565b604080518082019091526000808252602082015260005460015460405163fe753f7160e01b81526001600160a01b039283169263fe753f719261021f928892889216906004016106b1565b600060405180830381600087803b15801561023957600080fd5b505af192505050801561024a575060015b61028b573d808015610278576040519150601f19603f3d011682016040523d82523d6000602084013e61027d565b606091505b50610287816102bf565b9150505b92915050565b6102996102f9565b60c0825110156102ab57815182602001fd5b8180602001905181019061028b919061078b565b604080518082019091526000808252602082015260c0825110156102e557815182602001fd5b8180602001905181019061028b91906107fa565b6040518060e00160405280600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b60006020828403121561035157600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff8111828210171561039157610391610358565b60405290565b60405160e0810167ffffffffffffffff8111828210171561039157610391610358565b6001600160a01b03811681146103cf57600080fd5b50565b80356101cf816103ba565b6000608082840312156103ef57600080fd5b6040516080810181811067ffffffffffffffff8211171561041257610412610358565b6040529050808235610423816103ba565b81526020830135610433816103ba565b8060208301525060408301356040820152606083013560608201525092915050565b803567ffffffffffffffff811681146101cf57600080fd5b600082601f83011261047e57600080fd5b813567ffffffffffffffff8082111561049957610499610358565b604051601f8301601f19908116603f011681019082821181831017156104c1576104c1610358565b816040528381528660208588010111156104da57600080fd5b836020870160208301376000602085830101528094505050505092915050565b60006040828403121561050c57600080fd5b61051461036e565b90508135610521816103ba565b8152602082013567ffffffffffffffff81111561053d57600080fd5b6105498482850161046d565b60208301525092915050565b6000806040838503121561056857600080fd5b823567ffffffffffffffff8082111561058057600080fd5b90840190610140828703121561059557600080fd5b61059d610397565b6105a787846103dd565b8152608083013560208201526105bf60a08401610455565b604082015260c0830135606082015260e083013560808201526105e561010084016103d2565b60a0820152610120830135828111156105fd57600080fd5b6106098882860161046d565b60c0830152509350602085013591508082111561062557600080fd5b50610632858286016104fa565b9150509250929050565b6000815180845260005b8181101561066257602081850181015186830182015201610646565b506000602082860101526020601f19601f83011685010191505092915050565b60018060a01b03815116825260006020820151604060208501526106a9604085018261063c565b949350505050565b6060808252845180516001600160a01b0390811684840152602080830151909116608085015260408083015160a0860152919092015160c08401529085015160e083015284015167ffffffffffffffff81166101008301526000905060608501516101208301526080850151610140818185015260a087015191506107426101608501836001600160a01b03169052565b60c08701519150806101808501525061075f6101a084018261063c565b905082810360208401526107738186610682565b9150506106a960408301846001600160a01b03169052565b600060e0828403121561079d57600080fd5b6107a5610397565b825181526020830151602082015260408301516107c1816103ba565b80604083015250606083015160608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b60006040828403121561080c57600080fd5b61081461036e565b8251815260208301516020820152809150509291505056fea2646970667358221220210a1cef686aabe2e09d8036cada3f87eec758c20468768da10a1718d80b539964736f6c63430008130033";

type PerpMarketQuoterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PerpMarketQuoterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PerpMarketQuoter__factory extends ContractFactory {
  constructor(...args: PerpMarketQuoterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _perpMarket: PromiseOrValue<string>,
    _predyPoolQuoter: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PerpMarketQuoter> {
    return super.deploy(
      _perpMarket,
      _predyPoolQuoter,
      overrides || {}
    ) as Promise<PerpMarketQuoter>;
  }
  override getDeployTransaction(
    _perpMarket: PromiseOrValue<string>,
    _predyPoolQuoter: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _perpMarket,
      _predyPoolQuoter,
      overrides || {}
    );
  }
  override attach(address: string): PerpMarketQuoter {
    return super.attach(address) as PerpMarketQuoter;
  }
  override connect(signer: Signer): PerpMarketQuoter__factory {
    return super.connect(signer) as PerpMarketQuoter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PerpMarketQuoterInterface {
    return new utils.Interface(_abi) as PerpMarketQuoterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PerpMarketQuoter {
    return new Contract(address, _abi, signerOrProvider) as PerpMarketQuoter;
  }
}
