import {
  PermitTransferFrom,
  PermitTransferFromData,
  SignatureTransfer,
  Witness,
} from '@uniswap/permit2-sdk'
import { PERMIT2_MAPPING } from '@uniswap/uniswapx-sdk'
import { BigNumber, ethers } from 'ethers'

import { Address } from '../types'

import {
  ORDER_INFO_TYPES,
  OrderInfo,
  PERMIT_WITNESS_TRANSFER_FROM_TYPES,
  PredictOrderParams,
  TOKEN_PERMISSION_TYPES,
} from './types'

const PREDICT_ORDER_TYPES_SINGLE = [
  { name: 'info', type: 'OrderInfo' },
  { name: 'pairId', type: 'uint64' },
  { name: 'duration', type: 'uint64' },
  { name: 'entryTokenAddress', type: 'address' },
  { name: 'tradeAmount', type: 'int256' },
  { name: 'tradeAmountSqrt', type: 'int256' },
  { name: 'marginAmount', type: 'uint256' },
  { name: 'validatorAddress', type: 'address' },
  { name: 'validationData', type: 'bytes' },
]

export const PREDICT_ORDER_TYPES = {
  PredictOrder: PREDICT_ORDER_TYPES_SINGLE,
  OrderInfo: ORDER_INFO_TYPES,
}

export const PREDICT_ORDER_PERMIT2_TYPES = {
  PermitWitnessTransferFrom: PERMIT_WITNESS_TRANSFER_FROM_TYPES('PredictOrder'),
  OrderInfo: ORDER_INFO_TYPES,
  PredictOrder: PREDICT_ORDER_TYPES_SINGLE,
  TokenPermissions: TOKEN_PERMISSION_TYPES,
} as const

const PREDICT_ORDER_ABI = [
  'tuple(' +
  [
    'tuple(address,address,uint256,uint256)',
    'uint64',
    'uint64',
    'address',
    'int256',
    'int256',
    'uint256',
    'address',
    'bytes',
  ].join(',') +
  ')',
]

export class PredictOrder {
  public permit2Address: string

  constructor(
    public readonly predictOrder: PredictOrderParams,
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

    return abiCoder.encode(PREDICT_ORDER_ABI, [
      [
        [
          this.predictOrder.orderInfo.market,
          this.predictOrder.orderInfo.trader,
          this.predictOrder.orderInfo.nonce,
          this.predictOrder.orderInfo.deadline,
        ],
        this.predictOrder.pairId,
        this.predictOrder.duration,
        this.predictOrder.entryTokenAddress,
        this.predictOrder.tradeAmount,
        this.predictOrder.tradeAmountSqrt,
        this.predictOrder.marginAmount,
        this.predictOrder.validatorAddress,
        this.predictOrder.validationData,
      ],
    ])
  }

  static parse(
    encoded: string,
    chainId: number,
    permit2?: string
  ): PredictOrder {
    const abiCoder = new ethers.utils.AbiCoder()
    const decoded = abiCoder.decode(PREDICT_ORDER_ABI, encoded)

    const [
      [
        [market, trader, nonce, deadline],
        pairId,
        duration,
        entryTokenAddress,
        tradeAmount,
        tradeAmountSqrt,
        marginAmount,
        validatorAddress,
        validationData,
      ],
    ] = decoded

    return new PredictOrder(
      {
        orderInfo: new OrderInfo(market, trader, nonce, deadline.toNumber()),
        pairId: pairId.toNumber(),
        duration: duration.toNumber(),
        tradeAmount,
        tradeAmountSqrt,
        marginAmount,
        entryTokenAddress,
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
        market: this.predictOrder.orderInfo.market,
        trader: this.predictOrder.orderInfo.trader,
        nonce: this.predictOrder.orderInfo.nonce,
        deadline: this.predictOrder.orderInfo.deadline,
      },
      pairId: this.predictOrder.pairId,
      duration: this.predictOrder.duration,
      entryTokenAddress: this.predictOrder.entryTokenAddress,
      tradeAmount: this.predictOrder.tradeAmount,
      tradeAmountSqrt: this.predictOrder.tradeAmountSqrt,
      marginAmount: this.predictOrder.marginAmount,
      validatorAddress: this.predictOrder.validatorAddress,
      validationData: this.predictOrder.validationData,
    }
  }

  witnessInfoForViem() {
    return {
      info: this.predictOrder.orderInfo.toWitnessDataForViem(),
      pairId: BigInt(this.predictOrder.pairId.toString()),
      duration: BigInt(this.predictOrder.duration.toString()),
      entryTokenAddress: this.predictOrder.entryTokenAddress,
      tradeAmount: BigInt(this.predictOrder.tradeAmount.toString()),
      tradeAmountSqrt: BigInt(this.predictOrder.tradeAmountSqrt.toString()),
      marginAmount: BigInt(this.predictOrder.marginAmount.toString()),
      validatorAddress: this.predictOrder.validatorAddress,
      validationData: this.predictOrder.validationData,
    }
  }

  /// @dev Returns the EIP712 typed data and value for ethers.js
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
        token: this.predictOrder.entryTokenAddress,
        amount: this.predictOrder.marginAmount.gt(0)
          ? this.predictOrder.marginAmount
          : BigNumber.from(0),
      },
      spender: this.predictOrder.orderInfo.market,
      nonce: this.predictOrder.orderInfo.nonce,
      deadline: this.predictOrder.orderInfo.deadline,
    }
  }

  /// @dev Returns the EIP712 typed data and value for viem
  permitDataForViem() {
    const permit = this.toPermit()

    return {
      domain: {
        name: 'Permit2',
        chainId: this.chainId,
        verifyingContract: this.permit2Address as Address,
      },
      types: PREDICT_ORDER_PERMIT2_TYPES,
      message: {
        deadline: BigInt(permit.deadline.toString()),
        nonce: BigInt(permit.nonce.toString()),
        permitted: {
          token: permit.permitted.token,
          amount: BigInt(permit.permitted.amount.toString()),
        },
        spender: permit.spender,
        witness: this.witnessInfoForViem(),
      },
    }
  }

  private witness(): Witness {
    return {
      witness: this.witnessInfo(),
      witnessTypeName: 'PredictOrder',
      witnessType: PREDICT_ORDER_TYPES,
    }
  }

  hash(): string {
    return ethers.utils._TypedDataEncoder
      .from(PREDICT_ORDER_TYPES)
      .hash(this.witnessInfo())
  }
}
