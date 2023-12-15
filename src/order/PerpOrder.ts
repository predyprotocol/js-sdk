import {
  PermitTransferFrom,
  PermitTransferFromData,
  SignatureTransfer,
  Witness,
} from '@uniswap/permit2-sdk'
import { PERMIT2_MAPPING } from '@uniswap/uniswapx-sdk'
import { ethers } from 'ethers'

import { Address } from '../types'

import {
  ORDER_INFO_TYPES,
  PERMIT_WITNESS_TRANSFER_FROM_TYPES,
  PerpOrderParams,
  TOKEN_PERMISSION_TYPES,
} from './types'

const PERP_ORDER_TYPES_SINGLE = [
  { name: 'info', type: 'OrderInfo' },
  { name: 'pairId', type: 'uint256' },
  { name: 'entryTokenAddress', type: 'address' },
  { name: 'tradeAmount', type: 'int256' },
  { name: 'marginAmount', type: 'int256' },
  { name: 'takeProfitPrice', type: 'uint256' },
  { name: 'stopLossPrice', type: 'uint256' },
  { name: 'slippageTolerance', type: 'uint64' },
  { name: 'validatorAddress', type: 'address' },
  { name: 'validationData', type: 'bytes' },
]

export const PERP_ORDER_TYPES = {
  PerpOrder: PERP_ORDER_TYPES_SINGLE,
  OrderInfo: ORDER_INFO_TYPES,
}

export const PERP_ORDER_PERMIT2_TYPES = {
  PermitWitnessTransferFrom: PERMIT_WITNESS_TRANSFER_FROM_TYPES('PerpOrder'),
  OrderInfo: ORDER_INFO_TYPES,
  PerpOrder: PERP_ORDER_TYPES_SINGLE,
  TokenPermissions: TOKEN_PERMISSION_TYPES,
} as const

const PERP_ORDER_ABI = [
  'tuple(' +
    [
      'tuple(address,address,uint256,uint256)',
      'uint256',
      'address',
      'int256',
      'int256',
      'uint256',
      'uint256',
      'uint64',
      'address',
      'bytes',
    ].join(',') +
    ')',
]

export class PerpOrder {
  public permit2Address: string

  constructor(
    public readonly perpOrder: PerpOrderParams,
    readonly chainId: number,
    readonly _permit2Address?: string
  ) {
    if (_permit2Address) {
      this.permit2Address = _permit2Address
    } else {
      this.permit2Address = PERMIT2_MAPPING[chainId]
    }
  }

  serialize(): string {
    const abiCoder = new ethers.utils.AbiCoder()

    return abiCoder.encode(PERP_ORDER_ABI, [
      [
        [
          this.perpOrder.orderInfo.market,
          this.perpOrder.orderInfo.trader,
          this.perpOrder.orderInfo.nonce,
          this.perpOrder.orderInfo.deadline,
        ],
        this.perpOrder.pairId,
        this.perpOrder.entryTokenAddress,
        this.perpOrder.tradeAmount,
        this.perpOrder.marginAmount,
        this.perpOrder.takeProfitPrice,
        this.perpOrder.stopLossPrice,
        this.perpOrder.slippageTolerance,
        this.perpOrder.validatorAddress,
        this.perpOrder.validationData,
      ],
    ])
  }

  toLegacy() {
    return {
      info: {
        market: this.perpOrder.orderInfo.market,
        trader: this.perpOrder.orderInfo.trader,
        nonce: BigInt(this.perpOrder.orderInfo.nonce.toString()),
        deadline: BigInt(this.perpOrder.orderInfo.deadline),
      },
      pairId: BigInt(this.perpOrder.pairId),
      entryTokenAddress: this.perpOrder.entryTokenAddress,
      tradeAmount: BigInt(this.perpOrder.tradeAmount.toString()),
      marginAmount: BigInt(this.perpOrder.marginAmount.toString()),
      takeProfitPrice: BigInt(this.perpOrder.takeProfitPrice.toString()),
      stopLossPrice: BigInt(this.perpOrder.stopLossPrice.toString()),
      slippageTolerance: BigInt(this.perpOrder.slippageTolerance),
      validatorAddress: this.perpOrder.validatorAddress,
      validationData: this.perpOrder.validationData,
    }
  }

  static parse(encoded: string, chainId: number, permit2?: string): PerpOrder {
    const abiCoder = new ethers.utils.AbiCoder()
    const decoded = abiCoder.decode(PERP_ORDER_ABI, encoded)

    const [
      [
        [market, trader, nonce, deadline],
        pairId,
        entryTokenAddress,
        tradeAmount,
        marginAmount,
        takeProfitPrice,
        stopLossPrice,
        slippageTolerance,
        validatorAddress,
        validationData,
      ],
    ] = decoded

    return new PerpOrder(
      {
        orderInfo: {
          market,
          trader,
          nonce,
          deadline: deadline.toNumber(),
        },
        pairId: pairId.toNumber(),
        tradeAmount,
        marginAmount,
        entryTokenAddress,
        takeProfitPrice,
        stopLossPrice,
        slippageTolerance: slippageTolerance.toNumber(),
        validatorAddress,
        validationData,
        chainId,
      },
      chainId,
      permit2
    )
  }

  private witnessInfo() {
    return {
      info: {
        market: this.perpOrder.orderInfo.market,
        trader: this.perpOrder.orderInfo.trader,
        nonce: this.perpOrder.orderInfo.nonce,
        deadline: this.perpOrder.orderInfo.deadline,
      },
      pairId: this.perpOrder.pairId,
      entryTokenAddress: this.perpOrder.entryTokenAddress,
      tradeAmount: this.perpOrder.tradeAmount,
      marginAmount: this.perpOrder.marginAmount,
      takeProfitPrice: this.perpOrder.takeProfitPrice,
      stopLossPrice: this.perpOrder.stopLossPrice,
      slippageTolerance: this.perpOrder.slippageTolerance,
      validatorAddress: this.perpOrder.validatorAddress,
      validationData: this.perpOrder.validationData,
    }
  }

  permitData(): PermitTransferFromData {
    return SignatureTransfer.getPermitData(
      this.toPermit(),
      this.permit2Address,
      this.chainId,
      this.witness()
    ) as PermitTransferFromData
  }

  toPermit(): PermitTransferFrom {
    return {
      permitted: {
        token: this.perpOrder.entryTokenAddress,
        amount: this.perpOrder.marginAmount,
      },
      spender: this.perpOrder.orderInfo.market,
      nonce: this.perpOrder.orderInfo.nonce,
      deadline: this.perpOrder.orderInfo.deadline,
    }
  }

  private witness(): Witness {
    return {
      witness: this.witnessInfo(),
      witnessTypeName: 'PerpOrder',
      witnessType: PERP_ORDER_TYPES,
    }
  }

  hash(): string {
    return ethers.utils._TypedDataEncoder
      .from(PERP_ORDER_TYPES)
      .hash(this.witnessInfo())
  }

  permit2Message() {
    return {
      domain: {
        name: 'Permit2',
        chainId: this.chainId,
        verifyingContract: this.permit2Address as Address,
      },
      types: PERP_ORDER_PERMIT2_TYPES,
      message: {
        deadline: BigInt(this.perpOrder.orderInfo.deadline),
        nonce: BigInt(this.perpOrder.orderInfo.nonce.toString()),
        permitted: {
          token: this.perpOrder.entryTokenAddress,
          amount: this.perpOrder.marginAmount.gt(0)
            ? BigInt(this.perpOrder.marginAmount.toString())
            : BigInt(0),
        },
        spender: this.perpOrder.orderInfo.market,
        witness: this.toLegacy(),
      },
    }
  }
}
