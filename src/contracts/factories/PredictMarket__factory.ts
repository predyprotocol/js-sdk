/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import type { Provider, TransactionRequest } from '@ethersproject/providers'
import type { PromiseOrValue } from '../common'
import type { PredictMarket, PredictMarketInterface } from '../PredictMarket'

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
    name: 'CloseBeforeExpiration',
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
        internalType: 'uint256',
        name: 'vaultId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'closeValue',
        type: 'uint256'
      }
    ],
    name: 'Closed',
    type: 'event'
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
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'expiration',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'duration',
        type: 'uint256'
      }
    ],
    name: 'Opened',
    type: 'event'
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
        name: '',
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
        internalType: 'uint256',
        name: 'expiration',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  }
] as const

const _bytecode =
  '0x60806040523480156200001157600080fd5b50604051620024c2380380620024c283398101604081905262000034916200007f565b600080546001600160a01b039384166001600160a01b03199182161790915560028054929093169116179055620000be565b6001600160a01b03811681146200007c57600080fd5b50565b600080604083850312156200009357600080fd5b8251620000a08162000066565b6020840151909250620000b38162000066565b809150509250929050565b6123f480620000ce6000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80631e7f13701461005c578063333c6a3d146100b3578063944b560b146100d3578063a966d863146100e8578063e1c951ca146100fb575b600080fd5b61008f61006a36600461107c565b600360205260009081526040902080546001909101546001600160a01b039091169082565b604080516001600160a01b0390931683526020830191909152015b60405180910390f35b6100c66100c1366004611303565b61010e565b6040516100aa91906113c6565b6100e66100e136600461148a565b610381565b005b6100c66100f6366004611533565b610592565b6100e661010936600461107c565b610907565b610116611008565b6000838152600360205260409020600181015461013257600080fd5b42816001015411156101575760405163bf0038a760e01b815260040160405180910390fd5b60008054604051632500ed8d60e21b8152600481018790526001600160a01b0390911690639403b634906024016102a060405180830381865afa1580156101a2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101c691906116a1565b6000546040805160a0808201835284018051518252602082018a90525160800151519394506001600160a01b0390921692639b819b30929182019061020a906117cd565b81526020018460a0015160a0015160000151610225906117cd565b81526020016040518060400160405280600180811115610247576102476117e9565b8152600060209182015260405161025f9291016117ff565b604051602081830303815290604052815250866040518363ffffffff1660e01b815260040161028f929190611888565b610180604051808303816000875af11580156102af573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102d39190611905565b60005460a08301515160405163acfcd9fd60e01b8152929550610372926001600160a01b039092169163acfcd9fd916103129160040190815260200190565b602060405180830381865afa15801561032f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061035391906119bd565b8461036285600101544261095c565b60a08086015101515115156109e3565b50600060019091015592915050565b6000546001600160a01b031633146103ac57604051637542ed5d60e11b815260040160405180910390fd5b600082608001518060200190518101906103c691906119d6565b90506000815160018111156103dd576103dd6117e9565b036104105761040b6103f28460000151610b0d565b60005460208401516001600160a01b0390911690610b88565b505050565b600181516001811115610425576104256117e9565b0361040b57600080546020850151604051632500ed8d60e21b81526001600160a01b0390921691639403b634916104629160040190815260200190565b6102a060405180830381865afa158015610480573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104a491906116a1565b608081015160005460405163031adb4d60e61b8152600160048201523060248201526044810183905292935090916001600160a01b039091169063c6b6d34090606401600060405180830381600087803b15801561050157600080fd5b505af1158015610515573d6000803e3d6000fd5b5050505061054d6105298660000151610b0d565b6020808801516000908152600390915260409020546001600160a01b031683610b88565b602080860151604080519182529181018390527fbb1c869dafbabf53b7b5a50e7864066365b4c5d1bcfa0220f75cc2a2acfb44f6910160405180910390a15050505050565b61059a611008565b600083600001518060200190518101906105b49190611ab1565b905060006105c6828660200151610c85565b6020808401516001600160401b03166000908152600190915260409020549091506001600160a01b03166105f957600080fd5b6020808301516001600160401b031660009081526001909152604090205460608301516001600160a01b0390811691161461063357600080fd5b61063c81610d19565b60008054906101000a90046001600160a01b03166001600160a01b0316639b819b306040518060a0016040528085602001516001600160401b0316815260200160008152602001856080015181526020018560a0015181526020016040518060400160405280600060018111156106b5576106b56117e9565b815260c08801516020918201526040516106d09291016117ff565b604051602081830303815290604052815250866040518363ffffffff1660e01b8152600401610700929190611888565b610180604051808303816000875af1158015610720573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107449190611905565b8251602090810151828201516000908152600390925260409182902080546001600160a01b0319166001600160a01b03909216919091179055830151909350610796906001600160401b031642611b99565b60208481018051600090815260038352604080822060010194909455549051855190920151925163055a6d9b60e51b815260048101929092526001600160a01b039283166024830152919091169063ab4db36090604401600060405180830381600087803b15801561080757600080fd5b505af115801561081b573d6000803e3d6000fd5b505050508160e001516001600160a01b031663e3580f4c83856040518363ffffffff1660e01b8152600401610851929190611bac565b60006040518083038186803b15801561086957600080fd5b505afa15801561087d573d6000803e3d6000fd5b50508351602090810151868201516040808801516000838152600386528290206001015482516001600160a01b039095168552948401929092526001600160401b039091169082015260608101919091527f1ae84d4a14bea8146749d9831e35557d4318d019c88ef77238907396f34fb38e9250608001905060405180910390a150505b92915050565b6000818152600160205260409020546001600160a01b03166109595761092c81610b0d565b600082815260016020526040902080546001600160a01b0319166001600160a01b03929092169190911790555b50565b600082821161096e575061271a610901565b60006104b061097d8585611c7d565b61098990612710611c90565b6109939190611ca7565b90506127108111156109aa576127d8915050610901565b6127106109bb61271a6127d8611c7d565b6109c59083611c90565b6109cf9190611ca7565b6109db9061271a611b99565b949350505050565b600060606109f18680611c90565b901c9050600084608001511315610a4257608084015183610a1483612710611c90565b610a1e9190611ca7565b1115610a3d576040516378eff95d60e11b815260040160405180910390fd5b610a93565b600084608001511215610a93578360800151610a5d906117cd565b612710610a6a8584611c90565b610a749190611ca7565b1015610a93576040516378eff95d60e11b815260040160405180910390fd5b818015610ae8575063060c9913610aae866305f5e100611c90565b610ab89190611ca7565b8460c001511080610ae8575060c08401516305f5e100610adc63060c991388611c90565b610ae69190611ca7565b105b15610b065760405163dbaffb0160e01b815260040160405180910390fd5b5050505050565b6000805460405163324abcfb60e21b81526004810184905282916001600160a01b03169063c92af3ec9060240161078060405180830381865afa158015610b58573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b7c9190611f5e565b60600151519392505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b1790529151600092839290871691610be49190612049565b6000604051808303816000865af19150503d8060008114610c21576040519150601f19603f3d011682016040523d82523d6000602084013e610c26565b606091505b5091509150818015610c50575080511580610c50575080806020019051810190610c509190612065565b610b065760405162461bcd60e51b815260206004820152600260248201526114d560f21b604482015260640160405180910390fd5b6040805161012081018252600060a0820181815260c0830182905260e08301829052610100830182905282526020820181905291810182905260608082019290925260808101919091526040518060a001604052808460000151815260200184606001516001600160a01b031681526020018460c001518152602001610d0a85610eba565b81526020019290925250919050565b610d2281610f4d565b6002546001600160a01b031663137c29fe610da8836040805160a0810182526000606082018181526080830182905282526020820181905291810191909152506040805160a0810182526020808401516001600160a01b031660608084019182528585015160808501529083528451840151918301919091529251909201519082015290565b60408051808201825260008082526020918201528151808301835230815291860151908201528460000151602001518560600151604051602001610deb90612080565b60408051601f198184030181526080830190915260478083529091906123786020830139604051602001610e209291906121ab565b60408051601f1981840301815260608301909152602e80835290919061234a6020830139604051602001610e559291906121da565b60408051601f198184030181529082905260808901516001600160e01b031960e089901b168352610e8c969594939260040161222d565b600060405180830381600087803b158015610ea657600080fd5b505af1158015610b06573d6000803e3d6000fd5b6000604051602001610ecb90612080565b60405160208183030381529060405280519060200120610eee8360000151610f9e565b83602001518460400151856060015186608001518760a001518860c001518960e001518a6101000151604051602001610f309a999897969594939291906122d0565b604051602081830303815290604052805190602001209050919050565b8051516001600160a01b03163014610f7857604051639db8d5b160e01b815260040160405180910390fd5b8051606001514211156109595760405163387b2e5560e11b815260040160405180910390fd5b60006040518060800160405280604781526020016123786047913980516020918201208351848301516040808701516060808901518351978801969096526001600160a01b03948516928701929092529290911690840152608083015260a082015260c001610f30565b6040518060e0016040528061104c6040518060c001604052806000815260200160008152602001600081526020016000815260200160008152602001600081525090565b81526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006020828403121561108e57600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b03811182821017156110cd576110cd611095565b60405290565b60405160e081016001600160401b03811182821017156110cd576110cd611095565b60405160c081016001600160401b03811182821017156110cd576110cd611095565b60405160a081016001600160401b03811182821017156110cd576110cd611095565b60405161010081016001600160401b03811182821017156110cd576110cd611095565b604051608081016001600160401b03811182821017156110cd576110cd611095565b60405161012081016001600160401b03811182821017156110cd576110cd611095565b60405161022081016001600160401b03811182821017156110cd576110cd611095565b60405161018081016001600160401b03811182821017156110cd576110cd611095565b604051601f8201601f191681016001600160401b038111828210171561120f5761120f611095565b604052919050565b6001600160a01b038116811461095957600080fd5b60006001600160401b0382111561124557611245611095565b50601f01601f191660200190565b600082601f83011261126457600080fd5b81356112776112728261122c565b6111e7565b81815284602083860101111561128c57600080fd5b816020850160208301376000918101602001919091529392505050565b6000604082840312156112bb57600080fd5b6112c36110ab565b905081356112d081611217565b815260208201356001600160401b038111156112eb57600080fd5b6112f784828501611253565b60208301525092915050565b6000806040838503121561131657600080fd5b8235915060208301356001600160401b0381111561133357600080fd5b61133f858286016112a9565b9150509250929050565b8051805183526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015250602081015160c0830152604081015160e08301526060810151610100830152608081015161012083015260a081015161014083015260c08101516101608301525050565b61018081016109018284611349565b60008183036101808112156113e957600080fd5b6113f16110d3565b915060c081121561140157600080fd5b5061140a6110f5565b823581526020830135602082015260408301356040820152606083013560608201526080830135608082015260a083013560a08201528082525060c0820135602082015260e082013560408201526101008201356060820152610120820135608082015261014082013560a082015261016082013560c082015292915050565b6000806101a0838503121561149e57600080fd5b82356001600160401b03808211156114b557600080fd5b9084019060a082870312156114c957600080fd5b6114d1611117565b8235815260208301356020820152604083013560408201526060830135606082015260808301358281111561150557600080fd5b61151188828601611253565b60808301525080945050505061152a84602085016113d5565b90509250929050565b6000806040838503121561154657600080fd5b82356001600160401b038082111561155d57600080fd5b908401906040828703121561157157600080fd5b6115796110ab565b82358281111561158857600080fd5b61159488828601611253565b8252506020830135828111156115a957600080fd5b6115b588828601611253565b6020830152508094505060208501359150808211156115d357600080fd5b5061133f858286016112a9565b80516115eb81611217565b919050565b8051600281900b81146115eb57600080fd5b80516001600160401b03811681146115eb57600080fd5b60006040828403121561162b57600080fd5b6116336110ab565b9050815181526020820151602082015292915050565b600060c0828403121561165b57600080fd5b6116636110f5565b9050815181526020820151602082015260408201516040820152606082015160608201526080820151608082015260a082015160a082015292915050565b60008183036102a08112156116b557600080fd5b6116bd6110f5565b8351815260208401516116cf81611217565b602082015260408401516116e281611217565b604082015260608401516116f581611217565b606082015260808481015190820152610200609f198301121561171757600080fd5b61171f611139565b915060a0840151825261173460c085016115f0565b602083015261174560e085016115f0565b60408301526117576101008501611602565b606083015261176a856101208601611619565b608083015261177d856101608601611649565b60a0830152611790856102208601611619565b60c08301526117a3856102608601611619565b60e083015260a08101919091529392505050565b634e487b7160e01b600052601160045260246000fd5b6000600160ff1b82016117e2576117e26117b7565b5060000390565b634e487b7160e01b600052602160045260246000fd5b815160408201906002811061182457634e487b7160e01b600052602160045260246000fd5b808352506020830151602083015292915050565b60005b8381101561185357818101518382015260200161183b565b50506000910152565b60008151808452611874816020860160208601611838565b601f01601f19169290920160200192915050565b60408152825160408201526020830151606082015260408301516080820152606083015160a08201526000608084015160a060c08401526118cc60e084018261185c565b9050828103602084015260018060a01b0384511681526020840151604060208301526118fb604083018261185c565b9695505050505050565b600081830361018081121561191957600080fd5b6119216110d3565b60c082121561192f57600080fd5b6119376110f5565b9150835182526020840151602083015260408401516040830152606084015160608301526080840151608083015260a084015160a083015281815260c0840151602082015260e084015160408201526101008401516060820152610120840151608082015261014084015160a082015261016084015160c0820152809250505092915050565b6000602082840312156119cf57600080fd5b5051919050565b6000604082840312156119e857600080fd5b6119f06110ab565b8251600281106119ff57600080fd5b81526020928301519281019290925250919050565b600060808284031215611a2657600080fd5b611a2e61115c565b90508151611a3b81611217565b81526020820151611a4b81611217565b80602083015250604082015160408201526060820151606082015292915050565b600082601f830112611a7d57600080fd5b8151611a8b6112728261122c565b818152846020838601011115611aa057600080fd5b6109db826020830160208701611838565b600060208284031215611ac357600080fd5b81516001600160401b0380821115611ada57600080fd5b908301906101808286031215611aef57600080fd5b611af761117e565b611b018684611a14565b8152611b0f60808401611602565b6020820152611b2060a08401611602565b6040820152611b3160c084016115e0565b606082015260e083015160808201526101008084015160a083015261012084015160c0830152611b6461014085016115e0565b60e083015261016084015183811115611b7c57600080fd5b611b8888828701611a6c565b918301919091525095945050505050565b80820180821115610901576109016117b7565b6101a0808252835180516001600160a01b039081169284019290925260208082015183166101c08501526040808301516101e0860152606092830151610200860152908601516001600160401b0390811661022086015290860151166102408401528401518116610260830152608084015161028083015260a08401516102a083015260c08401516102c083015260e0840151166102e0820152610100830151610180610300830152600090611c6661032084018261185c565b915050611c766020830184611349565b9392505050565b81810381811115610901576109016117b7565b8082028115828204841417610901576109016117b7565b600082611cc457634e487b7160e01b600052601260045260246000fd5b500490565b600060808284031215611cdb57600080fd5b611ce361115c565b90508151815260208201516020820152604082015160408201526060820151606082015292915050565b60008183036101c0811215611d2157600080fd5b611d296110f5565b91508251611d3681611217565b82526020830151611d4681611217565b602083015260c0603f1982011215611d5d57600080fd5b50611d666110f5565b60408301518152606083015160208201526080830151604082015260a0830151606082015260c0830151608082015260e083015160a082015280604083015250611db4836101008401611cc9565b606082015261018082015160808201526101a082015160a082015292915050565b600060a08284031215611de757600080fd5b611def611117565b905081518152611e01602083016115f0565b6020820152611e12604083016115f0565b6040820152611e2360608301611602565b6060820152611e3460808301611602565b608082015292915050565b60006102608284031215611e5257600080fd5b611e5a6111a1565b9050611e65826115e0565b8152611e73602083016115f0565b6020820152611e84604083016115f0565b6040820152611e9560608301611602565b60608201526080828101519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a0611f0884828501611619565b908201526101e0611f1b84848301611619565b6101c08301526102208301519082015261024090910151610200820152919050565b805180151581146115eb57600080fd5b805160ff811681146115eb57600080fd5b60006107808284031215611f7157600080fd5b611f796111c4565b82518152611f89602084016115e0565b6020820152611f9a604084016115e0565b6040820152611fac8460608501611d0d565b6060820152611fbf846102208501611d0d565b6080820152611fd2846103e08501611dd5565b60a0820152611fe5846104808501611e3f565b60c0820152611ff76106e084016115e0565b60e08201526120096107008401611f3d565b61010082015261201c6107208401611f3d565b61012082015261202f6107408401611f4d565b610140820152610760929092015161016083015250919050565b6000825161205b818460208701611838565b9190910192915050565b60006020828403121561207757600080fd5b611c7682611f3d565b6c0a0e4cac8d2c6e89ee4c8cae45609b1b81526e13dc99195c925b999bc81a5b999bcb608a1b600d8201526d1d5a5b9d0d8d081c185a5c92590b60921b601c8201526f1d5a5b9d0d8d08191d5c985d1a5bdb8b60821b602a8201527f6164647265737320656e747279546f6b656e416464726573732c000000000000603a820152721a5b9d0c8d4d881d1c985919505b5bdd5b9d0b606a1b60548201527f696e74323536207472616465416d6f756e74537172742c0000000000000000006067820152741d5a5b9d0c8d4d881b585c99da5b905b5bdd5b9d0b605a1b607e8201527f616464726573732076616c696461746f7241646472657373000000000000000060938201527462797465732076616c69646174696f6e446174612960581b60ab82015260c00190565b600083516121bd818460208801611838565b8351908301906121d1818360208801611838565b01949350505050565b74507265646963744f72646572207769746e6573732960581b81526000835161220a816015850160208801611838565b835190830190612221816015840160208801611838565b01601501949350505050565b6000610140612250838a5180516001600160a01b03168252602090810151910152565b6020890151604084015260408901516060840152612284608084018980516001600160a01b03168252602090810151910152565b6001600160a01b03871660c084015260e0830186905261010083018190526122ae8184018661185c565b90508281036101208401526122c3818561185c565b9998505050505050505050565b8a8152602081018a90526001600160401b038981166040830152881660608201526001600160a01b03878116608083015260a0820187905260c0820186905260e08201859052831661010082015261014061012082018190526000906123388382018561185c565b9d9c5050505050505050505050505056fe546f6b656e5065726d697373696f6e73286164647265737320746f6b656e2c75696e7432353620616d6f756e74294f72646572496e666f2861646472657373206d61726b65742c61646472657373207472616465722c75696e74323536206e6f6e63652c75696e7432353620646561646c696e6529a2646970667358221220242f0da3a1200002a6ba5d173481970f79239ddb91f8cf7a672fd6ceb062413a64736f6c63430008130033'

type PredictMarketConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (
  xs: PredictMarketConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1

export class PredictMarket__factory extends ContractFactory {
  constructor(...args: PredictMarketConstructorParams) {
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
  ): Promise<PredictMarket> {
    return super.deploy(
      _predyPool,
      permit2Address,
      overrides || {}
    ) as Promise<PredictMarket>
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
  override attach(address: string): PredictMarket {
    return super.attach(address) as PredictMarket
  }
  override connect(signer: Signer): PredictMarket__factory {
    return super.connect(signer) as PredictMarket__factory
  }

  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): PredictMarketInterface {
    return new utils.Interface(_abi) as PredictMarketInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PredictMarket {
    return new Contract(address, _abi, signerOrProvider) as PredictMarket
  }
}
