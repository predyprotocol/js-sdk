/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import type { Provider, TransactionRequest } from '@ethersproject/providers'
import type { PromiseOrValue } from '../common'
import type {
  GammaTradeMarket,
  GammaTradeMarketInterface
} from '../GammaTradeMarket'

const _abi = [
  {
    inputs: [
      {
        internalType: 'contract IPredyPool',
        name: '_predyPool',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'permit2Address',
        type: 'address'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    inputs: [],
    name: 'CallerIsNotFiller',
    type: 'error'
  },
  {
    inputs: [],
    name: 'CallerIsNotPredyPool',
    type: 'error'
  },
  {
    inputs: [],
    name: 'DeadlinePassed',
    type: 'error'
  },
  {
    inputs: [],
    name: 'InvalidMarket',
    type: 'error'
  },
  {
    inputs: [],
    name: 'OutOfAcceptablePriceRange',
    type: 'error'
  },
  {
    inputs: [],
    name: 'SignerIsNotVaultOwner',
    type: 'error'
  },
  {
    inputs: [],
    name: 'SlippageTooLarge',
    type: 'error'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'trader',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'vaultId',
        type: 'uint256'
      }
    ],
    name: 'Traded',
    type: 'event'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'positionId',
        type: 'uint256'
      }
    ],
    name: 'cancelOrder',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'positionId',
        type: 'uint256'
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'settlementContractAddress',
            type: 'address'
          },
          {
            internalType: 'bytes',
            name: 'encodedData',
            type: 'bytes'
          }
        ],
        internalType: 'struct ISettlement.SettlementData',
        name: 'settlementData',
        type: 'tuple'
      }
    ],
    name: 'close',
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: 'int256',
                name: 'perpEntryUpdate',
                type: 'int256'
              },
              {
                internalType: 'int256',
                name: 'sqrtEntryUpdate',
                type: 'int256'
              },
              {
                internalType: 'int256',
                name: 'sqrtRebalanceEntryUpdateUnderlying',
                type: 'int256'
              },
              {
                internalType: 'int256',
                name: 'sqrtRebalanceEntryUpdateStable',
                type: 'int256'
              },
              {
                internalType: 'int256',
                name: 'perpPayoff',
                type: 'int256'
              },
              {
                internalType: 'int256',
                name: 'sqrtPayoff',
                type: 'int256'
              }
            ],
            internalType: 'struct IPredyPool.Payoff',
            name: 'payoff',
            type: 'tuple'
          },
          {
            internalType: 'uint256',
            name: 'vaultId',
            type: 'uint256'
          },
          {
            internalType: 'int256',
            name: 'fee',
            type: 'int256'
          },
          {
            internalType: 'int256',
            name: 'minMargin',
            type: 'int256'
          },
          {
            internalType: 'int256',
            name: 'averagePrice',
            type: 'int256'
          },
          {
            internalType: 'uint256',
            name: 'sqrtTwap',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'sqrtPrice',
            type: 'uint256'
          }
        ],
        internalType: 'struct IPredyPool.TradeResult',
        name: 'tradeResult',
        type: 'tuple'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'bytes',
            name: 'order',
            type: 'bytes'
          },
          {
            internalType: 'bytes',
            name: 'sig',
            type: 'bytes'
          }
        ],
        internalType: 'struct IFillerMarket.SignedOrder',
        name: 'order',
        type: 'tuple'
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'settlementContractAddress',
            type: 'address'
          },
          {
            internalType: 'bytes',
            name: 'encodedData',
            type: 'bytes'
          }
        ],
        internalType: 'struct ISettlement.SettlementData',
        name: 'settlementData',
        type: 'tuple'
      }
    ],
    name: 'executeOrder',
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: 'int256',
                name: 'perpEntryUpdate',
                type: 'int256'
              },
              {
                internalType: 'int256',
                name: 'sqrtEntryUpdate',
                type: 'int256'
              },
              {
                internalType: 'int256',
                name: 'sqrtRebalanceEntryUpdateUnderlying',
                type: 'int256'
              },
              {
                internalType: 'int256',
                name: 'sqrtRebalanceEntryUpdateStable',
                type: 'int256'
              },
              {
                internalType: 'int256',
                name: 'perpPayoff',
                type: 'int256'
              },
              {
                internalType: 'int256',
                name: 'sqrtPayoff',
                type: 'int256'
              }
            ],
            internalType: 'struct IPredyPool.Payoff',
            name: 'payoff',
            type: 'tuple'
          },
          {
            internalType: 'uint256',
            name: 'vaultId',
            type: 'uint256'
          },
          {
            internalType: 'int256',
            name: 'fee',
            type: 'int256'
          },
          {
            internalType: 'int256',
            name: 'minMargin',
            type: 'int256'
          },
          {
            internalType: 'int256',
            name: 'averagePrice',
            type: 'int256'
          },
          {
            internalType: 'uint256',
            name: 'sqrtTwap',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'sqrtPrice',
            type: 'uint256'
          }
        ],
        internalType: 'struct IPredyPool.TradeResult',
        name: 'tradeResult',
        type: 'tuple'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'pairId',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'vaultId',
            type: 'uint256'
          },
          {
            internalType: 'int256',
            name: 'tradeAmount',
            type: 'int256'
          },
          {
            internalType: 'int256',
            name: 'tradeAmountSqrt',
            type: 'int256'
          },
          {
            internalType: 'bytes',
            name: 'extraData',
            type: 'bytes'
          }
        ],
        internalType: 'struct IPredyPool.TradeParams',
        name: 'tradeParams',
        type: 'tuple'
      },
      {
        components: [
          {
            components: [
              {
                internalType: 'int256',
                name: 'perpEntryUpdate',
                type: 'int256'
              },
              {
                internalType: 'int256',
                name: 'sqrtEntryUpdate',
                type: 'int256'
              },
              {
                internalType: 'int256',
                name: 'sqrtRebalanceEntryUpdateUnderlying',
                type: 'int256'
              },
              {
                internalType: 'int256',
                name: 'sqrtRebalanceEntryUpdateStable',
                type: 'int256'
              },
              {
                internalType: 'int256',
                name: 'perpPayoff',
                type: 'int256'
              },
              {
                internalType: 'int256',
                name: 'sqrtPayoff',
                type: 'int256'
              }
            ],
            internalType: 'struct IPredyPool.Payoff',
            name: 'payoff',
            type: 'tuple'
          },
          {
            internalType: 'uint256',
            name: 'vaultId',
            type: 'uint256'
          },
          {
            internalType: 'int256',
            name: 'fee',
            type: 'int256'
          },
          {
            internalType: 'int256',
            name: 'minMargin',
            type: 'int256'
          },
          {
            internalType: 'int256',
            name: 'averagePrice',
            type: 'int256'
          },
          {
            internalType: 'uint256',
            name: 'sqrtTwap',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'sqrtPrice',
            type: 'uint256'
          }
        ],
        internalType: 'struct IPredyPool.TradeResult',
        name: 'tradeResult',
        type: 'tuple'
      }
    ],
    name: 'predyTradeAfterCallback',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: 'address',
                name: 'market',
                type: 'address'
              },
              {
                internalType: 'address',
                name: 'trader',
                type: 'address'
              },
              {
                internalType: 'address',
                name: 'filler',
                type: 'address'
              },
              {
                internalType: 'uint256',
                name: 'nonce',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'deadline',
                type: 'uint256'
              }
            ],
            internalType: 'struct OrderInfo',
            name: 'info',
            type: 'tuple'
          },
          {
            internalType: 'uint256',
            name: 'positionId',
            type: 'uint256'
          },
          {
            internalType: 'uint64',
            name: 'pairId',
            type: 'uint64'
          },
          {
            internalType: 'address',
            name: 'entryTokenAddress',
            type: 'address'
          },
          {
            internalType: 'int256',
            name: 'tradeAmount',
            type: 'int256'
          },
          {
            internalType: 'int256',
            name: 'tradeAmountSqrt',
            type: 'int256'
          },
          {
            internalType: 'int256',
            name: 'marginAmount',
            type: 'int256'
          },
          {
            internalType: 'address',
            name: 'canceler',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: 'takeProfitPrice',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'stopLossPrice',
            type: 'uint256'
          },
          {
            internalType: 'uint64',
            name: 'slippageTolerance',
            type: 'uint64'
          },
          {
            internalType: 'address',
            name: 'validatorAddress',
            type: 'address'
          },
          {
            internalType: 'bytes',
            name: 'validationData',
            type: 'bytes'
          }
        ],
        internalType: 'struct GammaOrder',
        name: 'gammaOrder',
        type: 'tuple'
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'settlementContractAddress',
            type: 'address'
          },
          {
            internalType: 'bytes',
            name: 'encodedData',
            type: 'bytes'
          }
        ],
        internalType: 'struct ISettlement.SettlementData',
        name: 'settlementData',
        type: 'tuple'
      },
      {
        internalType: 'contract PredyPoolQuoter',
        name: 'quoter',
        type: 'address'
      }
    ],
    name: 'quoteExecuteOrder',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'pairId',
        type: 'uint256'
      }
    ],
    name: 'updateQuoteTokenMap',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'vaultId',
        type: 'uint256'
      }
    ],
    name: 'userPositions',
    outputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'canceler',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'takeProfitPrice',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'stopLossPrice',
        type: 'uint256'
      },
      {
        internalType: 'uint64',
        name: 'slippageTolerance',
        type: 'uint64'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  }
] as const

const _bytecode =
  '0x60806040523480156200001157600080fd5b506040516200298f3803806200298f83398101604081905262000034916200007f565b600080546001600160a01b039384166001600160a01b03199182161790915560028054929093169116179055620000be565b6001600160a01b03811681146200007c57600080fd5b50565b600080604083850312156200009357600080fd5b8251620000a08162000066565b6020840151909250620000b38162000066565b809150509250929050565b6128c180620000ce6000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063514fcac71161005b578063514fcac71461014b578063944b560b1461015e578063a966d86314610171578063e1c951ca1461018457600080fd5b80631b17fb0f146100825780631e7f137014610097578063333c6a3d1461012b575b600080fd5b610095610090366004611587565b610197565b005b6100ea6100a53660046116db565b6003602081905260009182526040909120805460018201546002830154938301546004909301546001600160a01b03928316949290911692906001600160401b031685565b604080516001600160a01b0396871681529590941660208601529284019190915260608301526001600160401b0316608082015260a0015b60405180910390f35b61013e6101393660046116f4565b61025f565b60405161012291906117b7565b6100956101593660046116db565b6104d0565b61009561016c36600461187b565b61051d565b61013e61017f366004611924565b61078f565b6100956101923660046116db565b610b0b565b6040805160a08082018352858301516001600160401b031682526020808701518184015260808088015184860152918701516060840152835190810184526000808252918301529151630a20b62d60e21b81526001600160a01b03841691632882d8b49161020a91908790600401611a21565b610180604051808303816000875af115801561022a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061024e9190611a9e565b905061025981610b60565b50505050565b61026761122c565b60008381526003602052604080822082549151632500ed8d60e21b8152600481018790529092916001600160a01b031690639403b634906024016102a060405180830381865afa1580156102bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102e39190611c06565b6000805460a08301515160405163acfcd9fd60e01b8152600481019190915292935090916001600160a01b039091169063acfcd9fd90602401602060405180830381865afa158015610339573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061035d9190611d1c565b60a0808401516080908101515160408051938401815287546001600160a01b03908116855260018901541660208501526002880154908401526003870154606084015260048701546001600160401b0316918301919091529192506103c6916000129083610b8c565b6000546040805160a0808201835285018051518252602082018a90525160800151516001600160a01b0390931692639b819b309282019061040690611d4b565b81526020018560a0015160a001516000015161042190611d4b565b815260200160405180602001604052806000815250815250876040518363ffffffff1660e01b8152600401610457929190611a21565b610180604051808303816000875af1158015610477573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061049b9190611a9e565b600484015460a0808501510151519195506104c791839187916001600160401b03909116901515610bd1565b50505092915050565b600081815260036020526040902080546001600160a01b0316331480610502575060018101546001600160a01b031633145b61050b57600080fd5b60006002820181905560039091015550565b6000546001600160a01b0316331461054857604051637542ed5d60e11b815260040160405180910390fd5b806060015160000361068057600080546020840151604051632500ed8d60e21b81526001600160a01b0390921691639403b6349161058c9160040190815260200190565b6102a060405180830381865afa1580156105aa573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105ce9190611c06565b600054608082015160405163031adb4d60e61b81526001600482015230602482015260448101919091529192506001600160a01b03169063c6b6d34090606401600060405180830381600087803b15801561062857600080fd5b505af115801561063c573d6000803e3d6000fd5b5050505061067b6106508460000151610cfb565b60208086015160009081526003909152604090205460808401516001600160a01b0390911690610d76565b505050565b6000826080015180602001905181019061069a9190611d1c565b905060008113156106c75761067b6106b58460000151610cfb565b6000546001600160a01b031683610d76565b600081121561067b576000546001600160a01b031663c6b6d3406001306106ed85611d4b565b6040516001600160e01b031960e086901b16815292151560048401526001600160a01b0390911660248301526044820152606401600060405180830381600087803b15801561073b57600080fd5b505af115801561074f573d6000803e3d6000fd5b5050505061067b6107638460000151610cfb565b6020808601516000908152600390915260409020546001600160a01b031661078a84611d4b565b610d76565b61079761122c565b600083600001518060200190518101906107b19190611e1f565b905060006107c3828660200151610e73565b6040808401516001600160401b03166000908152600160205220549091506001600160a01b03166107f357600080fd5b6040808301516001600160401b031660009081526001602052205460608301516001600160a01b0390811691161461082a57600080fd5b61083381610f29565b6000546040805160a08082018352858301516001600160401b03168252602080870151818401526080808801518486015291870151606084015260c087015184518083019190915284518082039092018252840184529082015290516309b819b360e41b81526001600160a01b0390921691639b819b30916108b9918890600401611a21565b610180604051808303816000875af11580156108d9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108fd9190611a9e565b92508160200151600003610a0d576020808401805160009081526003808452604080832087519095015185546001600160a01b038083166001600160a01b031992831617885560e08a01516001890180549183169190931617909155610100890151600288015561012089015193870193909355610140880151600480880180546001600160401b0390931667ffffffffffffffff199093169290921790915593549451915163055a6d9b60e51b8152949092169363ab4db360936109d59391019182526001600160a01b0316602082015260400190565b600060405180830381600087803b1580156109ef57600080fd5b505af1158015610a03573d6000803e3d6000fd5b5050505050610a52565b60208084015160009081526003825260409020548351909101516001600160a01b03908116911614610a525760405163708c545360e01b815260040160405180910390fd5b8161016001516001600160a01b031663281e23c783856040518363ffffffff1660e01b8152600401610a85929190611f3e565b60006040518083038186803b158015610a9d57600080fd5b505afa158015610ab1573d6000803e3d6000fd5b5050835160209081015186820151604080516001600160a01b039093168352928201527fe39122fcaa92bc902344d31c0f322ba04506be819fd20dafb197b26bf2e9045d935001905060405180910390a150505b92915050565b6000818152600160205260409020546001600160a01b0316610b5d57610b3081610cfb565b600082815260016020526040902080546001600160a01b0319166001600160a01b03929092169190911790555b50565b600081604051602001610b7391906117b7565b6040516020818303038152906040529050805181602001fd5b8215610bb257816060015181111580610ba9575080826040015111155b61067b57600080fd5b816040015181111580610ba95750808260600151111561067b57600080fd5b60006060610bdf8680612071565b901c9050600084608001511315610c3057608084015183610c0283612710612071565b610c0c9190612088565b1115610c2b576040516378eff95d60e11b815260040160405180910390fd5b610c81565b600084608001511215610c81578360800151610c4b90611d4b565b612710610c588584612071565b610c629190612088565b1015610c81576040516378eff95d60e11b815260040160405180910390fd5b818015610cd6575063060c9913610c9c866305f5e100612071565b610ca69190612088565b8460c001511080610cd6575060c08401516305f5e100610cca63060c991388612071565b610cd49190612088565b105b15610cf45760405163dbaffb0160e01b815260040160405180910390fd5b5050505050565b6000805460405163324abcfb60e21b81526004810184905282916001600160a01b03169063c92af3ec9060240161078060405180830381865afa158015610d46573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d6a9190612364565b60600151519392505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b1790529151600092839290871691610dd2919061244f565b6000604051808303816000865af19150503d8060008114610e0f576040519150601f19603f3d011682016040523d82523d6000602084013e610e14565b606091505b5091509150818015610e3e575080511580610e3e575080806020019051810190610e3e919061246b565b610cf45760405162461bcd60e51b815260206004820152600260248201526114d560f21b604482015260640160405180910390fd5b6040805161014081018252600060a0820181815260c0830182905260e083018290526101008301829052610120830182905282526020820181905291810182905260608082019290925260808101919091526000808460c0015113610ed9576000610edf565b8360c001515b90506040518060a001604052808560000151815260200185606001516001600160a01b03168152602001828152602001610f18866110c2565b815260200184905291505092915050565b610f3281611171565b6002546001600160a01b031663137c29fe610fb0836040805160a0808201835260006060808401828152608080860184905290855260208086018490529486019290925284519283018552858401516001600160a01b0316838201908152868601518484015283528551015192820192909252925101519082015290565b60408051808201825260008082526020918201528151808301835230815291860151908201528460000151602001518560600151604051602001610ff390612486565b60408051601f19818403018152608083019091526047808352909190612845602083013960405160200161102892919061263d565b60408051601f1981840301815260608301909152602e808352909190612817602083013960405160200161105d92919061266c565b60408051601f198184030181529082905260808901516001600160e01b031960e089901b16835261109496959493926004016126bd565b600060405180830381600087803b1580156110ae57600080fd5b505af1158015610cf4573d6000803e3d6000fd5b60006040516020016110d390612486565b604051602081830303815290604052805190602001206110f683600001516111c2565b83602001518460400151856060015186608001518760a001518860c001518960e001518a61010001518b61012001518c61014001518d61016001518e61018001516040516020016111549e9d9c9b9a99989796959493929190612760565b604051602081830303815290604052805190602001209050919050565b8051516001600160a01b0316301461119c57604051639db8d5b160e01b815260040160405180910390fd5b805160800151421115610b5d5760405163387b2e5560e11b815260040160405180910390fd5b60006040518060800160405280604781526020016128456047913980516020918201208351848301516060860151608087015160405161115496019485526001600160a01b0393841660208601529190921660408401526060830191909152608082015260a00190565b6040518060e001604052806112706040518060c001604052806000815260200160008152602001600081526020016000815260200160008152602001600081525090565b81526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b634e487b7160e01b600052604160045260246000fd5b60405160a081016001600160401b03811182821017156112d8576112d86112a0565b60405290565b604080519081016001600160401b03811182821017156112d8576112d86112a0565b6040516101a081016001600160401b03811182821017156112d8576112d86112a0565b60405160e081016001600160401b03811182821017156112d8576112d86112a0565b60405160c081016001600160401b03811182821017156112d8576112d86112a0565b60405161010081016001600160401b03811182821017156112d8576112d86112a0565b60405161022081016001600160401b03811182821017156112d8576112d86112a0565b60405161018081016001600160401b03811182821017156112d8576112d86112a0565b604051601f8201601f191681016001600160401b03811182821017156113f8576113f86112a0565b604052919050565b6001600160a01b0381168114610b5d57600080fd5b803561142081611400565b919050565b600060a0828403121561143757600080fd5b61143f6112b6565b9050813561144c81611400565b8152602082013561145c81611400565b6020820152604082013561146f81611400565b80604083015250606082013560608201526080820135608082015292915050565b6001600160401b0381168114610b5d57600080fd5b803561142081611490565b60006001600160401b038211156114c9576114c96112a0565b50601f01601f191660200190565b600082601f8301126114e857600080fd5b81356114fb6114f6826114b0565b6113d0565b81815284602083860101111561151057600080fd5b816020850160208301376000918101602001919091529392505050565b60006040828403121561153f57600080fd5b6115476112de565b9050813561155481611400565b815260208201356001600160401b0381111561156f57600080fd5b61157b848285016114d7565b60208301525092915050565b60008060006060848603121561159c57600080fd5b83356001600160401b03808211156115b357600080fd5b9085019061022082880312156115c857600080fd5b6115d0611300565b6115da8884611425565b815260a083013560208201526115f260c084016114a5565b604082015261160360e08401611415565b60608201526101008084013560808301526101208085013560a08401526101408086013560c085015261016061163a818801611415565b60e086015261018080880135858701526101a0880135848701526116616101c089016114a5565b838701526116726101e08901611415565b8287015261020088013594508685111561168b57600080fd5b6116978d868a016114d7565b908601525092975050505060208601359150808211156116b657600080fd5b506116c38682870161152d565b9250506116d260408501611415565b90509250925092565b6000602082840312156116ed57600080fd5b5035919050565b6000806040838503121561170757600080fd5b8235915060208301356001600160401b0381111561172457600080fd5b6117308582860161152d565b9150509250929050565b8051805183526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015250602081015160c0830152604081015160e08301526060810151610100830152608081015161012083015260a081015161014083015260c08101516101608301525050565b6101808101610b05828461173a565b60008183036101808112156117da57600080fd5b6117e2611323565b915060c08112156117f257600080fd5b506117fb611345565b823581526020830135602082015260408301356040820152606083013560608201526080830135608082015260a083013560a08201528082525060c0820135602082015260e082013560408201526101008201356060820152610120820135608082015261014082013560a082015261016082013560c082015292915050565b6000806101a0838503121561188f57600080fd5b82356001600160401b03808211156118a657600080fd5b9084019060a082870312156118ba57600080fd5b6118c26112b6565b823581526020830135602082015260408301356040820152606083013560608201526080830135828111156118f657600080fd5b611902888286016114d7565b60808301525080945050505061191b84602085016117c6565b90509250929050565b6000806040838503121561193757600080fd5b82356001600160401b038082111561194e57600080fd5b908401906040828703121561196257600080fd5b61196a6112de565b82358281111561197957600080fd5b611985888286016114d7565b82525060208301358281111561199a57600080fd5b6119a6888286016114d7565b6020830152508094505060208501359150808211156119c457600080fd5b506117308582860161152d565b60005b838110156119ec5781810151838201526020016119d4565b50506000910152565b60008151808452611a0d8160208601602086016119d1565b601f01601f19169290920160200192915050565b60408152825160408201526020830151606082015260408301516080820152606083015160a08201526000608084015160a060c0840152611a6560e08401826119f5565b9050828103602084015260018060a01b038451168152602084015160406020830152611a9460408301826119f5565b9695505050505050565b6000818303610180811215611ab257600080fd5b611aba611323565b60c0821215611ac857600080fd5b611ad0611345565b9150835182526020840151602083015260408401516040830152606084015160608301526080840151608083015260a084015160a083015281815260c0840151602082015260e084015160408201526101008401516060820152610120840151608082015261014084015160a082015261016084015160c0820152809250505092915050565b805161142081611400565b8051600281900b811461142057600080fd5b805161142081611490565b600060408284031215611b9057600080fd5b611b986112de565b9050815181526020820151602082015292915050565b600060c08284031215611bc057600080fd5b611bc8611345565b9050815181526020820151602082015260408201516040820152606082015160608201526080820151608082015260a082015160a082015292915050565b60008183036102a0811215611c1a57600080fd5b611c22611345565b835181526020840151611c3481611400565b60208201526040840151611c4781611400565b60408201526060840151611c5a81611400565b606082015260808481015190820152610200609f1983011215611c7c57600080fd5b611c84611367565b915060a08401518252611c9960c08501611b61565b6020830152611caa60e08501611b61565b6040830152611cbc6101008501611b73565b6060830152611ccf856101208601611b7e565b6080830152611ce2856101608601611bae565b60a0830152611cf5856102208601611b7e565b60c0830152611d08856102608601611b7e565b60e083015260a08101919091529392505050565b600060208284031215611d2e57600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b6000600160ff1b8201611d6057611d60611d35565b5060000390565b600060a08284031215611d7957600080fd5b611d816112b6565b90508151611d8e81611400565b81526020820151611d9e81611400565b60208201526040820151611db181611400565b80604083015250606082015160608201526080820151608082015292915050565b600082601f830112611de357600080fd5b8151611df16114f6826114b0565b818152846020838601011115611e0657600080fd5b611e178260208301602087016119d1565b949350505050565b600060208284031215611e3157600080fd5b81516001600160401b0380821115611e4857600080fd5b908301906102208286031215611e5d57600080fd5b611e65611300565b611e6f8684611d67565b815260a08301516020820152611e8760c08401611b73565b6040820152611e9860e08401611b56565b60608201526101008084015160808301526101208085015160a08401526101408086015160c0850152610160611ecf818801611b56565b60e086015261018080880151858701526101a088015184870152611ef66101c08901611b73565b83870152611f076101e08901611b56565b82870152610200880151945086851115611f2057600080fd5b611f2c8b868a01611dd2565b90860152509298975050505050505050565b6101a0808252835180516001600160a01b0390811684840152602082015181166101c08501526040820151166101e084015260608101516102008401526080015161022083015260009050602084015161024083015260408401516001600160401b0381166102608401525060608401516001600160a01b0381166102808401525060808401516102a083015260a08401516102c083015260c08401516102e083015260e08401516001600160a01b038116610300840152506101008401516103208301526101208401516103408301526101408401516001600160401b038116610360840152506101608401516001600160a01b038116610380840152506101808401516102206103a084015261205a6103c08401826119f5565b91505061206a602083018461173a565b9392505050565b8082028115828204841417610b0557610b05611d35565b6000826120a557634e487b7160e01b600052601260045260246000fd5b500490565b6000608082840312156120bc57600080fd5b604051608081018181106001600160401b03821117156120de576120de6112a0565b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60008183036101c081121561212357600080fd5b61212b611345565b9150825161213881611400565b8252602083015161214881611400565b602083015260c0603f198201121561215f57600080fd5b50612168611345565b60408301518152606083015160208201526080830151604082015260a0830151606082015260c0830151608082015260e083015160a0820152806040830152506121b68361010084016120aa565b606082015261018082015160808201526101a082015160a082015292915050565b600060a082840312156121e957600080fd5b6121f16112b6565b90508151815261220360208301611b61565b602082015261221460408301611b61565b6040820152606082015161222781611490565b6060820152608082015161223a81611490565b608082015292915050565b6000610260828403121561225857600080fd5b61226061138a565b905061226b82611b56565b815261227960208301611b61565b602082015261228a60408301611b61565b604082015261229b60608301611b73565b60608201526080828101519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a061230e84828501611b7e565b908201526101e061232184848301611b7e565b6101c08301526102208301519082015261024090910151610200820152919050565b8051801515811461142057600080fd5b805160ff8116811461142057600080fd5b6000610780828403121561237757600080fd5b61237f6113ad565b8251815261238f60208401611b56565b60208201526123a060408401611b56565b60408201526123b2846060850161210f565b60608201526123c584610220850161210f565b60808201526123d8846103e085016121d7565b60a08201526123eb846104808501612245565b60c08201526123fd6106e08401611b56565b60e082015261240f6107008401612343565b6101008201526124226107208401612343565b6101208201526124356107408401612353565b610140820152610760929092015161016083015250919050565b600082516124618184602087016119d1565b9190910192915050565b60006020828403121561247d57600080fd5b61206a82612343565b6a08ec2dadac29ee4c8cae4560ab1b81526e13dc99195c925b999bc81a5b999bcb608a1b600b820152721d5a5b9d0c8d4d881c1bdcda5d1a5bdb92590b606a1b601a8201526d1d5a5b9d0d8d081c185a5c92590b60921b602d8201527f6164647265737320656e747279546f6b656e416464726573732c000000000000603b820152721a5b9d0c8d4d881d1c985919505b5bdd5b9d0b606a1b60558201527f696e74323536207472616465416d6f756e74537172742c0000000000000000006068820152731a5b9d0c8d4d881b585c99da5b905b5bdd5b9d0b60621b607f820152701859191c995cdcc818d85b98d95b195c8b607a1b60938201527f75696e743235362074616b6550726f66697450726963652c000000000000000060a4820152751d5a5b9d0c8d4d881cdd1bdc131bdcdcd41c9a58d94b60521b60bc8201527f75696e74363420736c697070616765546f6c6572616e63652c0000000000000060d28201527f616464726573732076616c696461746f7241646472657373000000000000000060eb8201527462797465732076616c69646174696f6e446174612960581b61010382015260006101188201610b05565b6000835161264f8184602088016119d1565b8351908301906126638183602088016119d1565b01949350505050565b7247616d6d614f72646572207769746e6573732960681b81526000835161269a8160138501602088016119d1565b8351908301906126b18160138401602088016119d1565b01601301949350505050565b60006101406126e0838a5180516001600160a01b03168252602090810151910152565b6020890151604084015260408901516060840152612714608084018980516001600160a01b03168252602090810151910152565b6001600160a01b03871660c084015260e08301869052610100830181905261273e818401866119f5565b905082810361012084015261275381856119f5565b9998505050505050505050565b8e81528d60208201528c60408201526001600160401b038c16606082015260018060a01b038b1660808201528960a08201528860c08201528760e08201526127b46101008201886001600160a01b03169052565b85610120820152846101408201526127d86101608201856001600160401b03169052565b6001600160a01b0383166101808201526101c06101a082015260006128016101c08301846119f5565b90509f9e50505050505050505050505050505056fe546f6b656e5065726d697373696f6e73286164647265737320746f6b656e2c75696e7432353620616d6f756e74294f72646572496e666f2861646472657373206d61726b65742c61646472657373207472616465722c75696e74323536206e6f6e63652c75696e7432353620646561646c696e6529a264697066735822122057150e956562810cd78a0d6a0feab129c4e24930887debddaca9d6bce218052e64736f6c63430008130033'

type GammaTradeMarketConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (
  xs: GammaTradeMarketConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1

export class GammaTradeMarket__factory extends ContractFactory {
  constructor(...args: GammaTradeMarketConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      super(_abi, _bytecode, args[0])
    }
  }

  override deploy(
    _predyPool: PromiseOrValue<string>,
    permit2Address: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<GammaTradeMarket> {
    return super.deploy(
      _predyPool,
      permit2Address,
      overrides || {}
    ) as Promise<GammaTradeMarket>
  }
  override getDeployTransaction(
    _predyPool: PromiseOrValue<string>,
    permit2Address: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _predyPool,
      permit2Address,
      overrides || {}
    )
  }
  override attach(address: string): GammaTradeMarket {
    return super.attach(address) as GammaTradeMarket
  }
  override connect(signer: Signer): GammaTradeMarket__factory {
    return super.connect(signer) as GammaTradeMarket__factory
  }

  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): GammaTradeMarketInterface {
    return new utils.Interface(_abi) as GammaTradeMarketInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GammaTradeMarket {
    return new Contract(address, _abi, signerOrProvider) as GammaTradeMarket
  }
}
