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
  GammaOrderParams,
  ORDER_INFO_TYPES,
  OrderInfo,
  PERMIT_WITNESS_TRANSFER_FROM_TYPES,
  TOKEN_PERMISSION_TYPES,
} from './types'

const GAMMA_ORDER_TYPES_SINGLE = [
  { name: 'info', type: 'OrderInfo' },
  { name: 'pairId', type: 'uint256' },
  { name: 'entryTokenAddress', type: 'address' },
  { name: 'tradeAmount', type: 'int256' },
  { name: 'tradeAmountSqrt', type: 'int256' },
  { name: 'marginAmount', type: 'int256' },
  { name: 'hedgeInterval', type: 'uint256' },
  { name: 'sqrtPriceTrigger', type: 'uint256' },
  { name: 'maxSlippageTolerance', type: 'uint64' },
  { name: 'validatorAddress', type: 'address' },
  { name: 'validationData', type: 'bytes' },
]

export const GAMMA_ORDER_TYPES = {
  GammaOrder: GAMMA_ORDER_TYPES_SINGLE,
  OrderInfo: ORDER_INFO_TYPES,
}

export const GAMMA_ORDER_PERMIT2_TYPES = {
  PermitWitnessTransferFrom: PERMIT_WITNESS_TRANSFER_FROM_TYPES('GammaOrder'),
  OrderInfo: ORDER_INFO_TYPES,
  GammaOrder: GAMMA_ORDER_TYPES_SINGLE,
  TokenPermissions: TOKEN_PERMISSION_TYPES,
} as const

const GAMMA_ORDER_ABI = [
  'tuple(' +
  [
    'tuple(address,address,uint256,uint256)',
    'uint256',
    'address',
    'int256',
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

export class GammaOrder {
  public permit2Address: string

  constructor(
    public readonly gammaOrder: GammaOrderParams,
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

    return abiCoder.encode(GAMMA_ORDER_ABI, [
      [
        [
          this.gammaOrder.orderInfo.market,
          this.gammaOrder.orderInfo.trader,
          this.gammaOrder.orderInfo.nonce,
          this.gammaOrder.orderInfo.deadline,
        ],
        this.gammaOrder.pairId,
        this.gammaOrder.entryTokenAddress,
        this.gammaOrder.tradeAmount,
        this.gammaOrder.tradeAmountSqrt,
        this.gammaOrder.marginAmount,
        this.gammaOrder.hedgeInterval,
        this.gammaOrder.sqrtPriceTrigger,
        this.gammaOrder.maxSlippageTolerance,
        this.gammaOrder.validatorAddress,
        this.gammaOrder.validationData,
      ],
    ])
  }

  static parse(encoded: string, chainId: number, permit2?: string): GammaOrder {
    const abiCoder = new ethers.utils.AbiCoder()
    const decoded = abiCoder.decode(GAMMA_ORDER_ABI, encoded)

    const [
      [
        [market, trader, nonce, deadline],
        pairId,
        entryTokenAddress,
        tradeAmount,
        tradeAmountSqrt,
        marginAmount,
        hedgeInterval,
        sqrtPriceTrigger,
        maxSlippageTolerance,
        validatorAddress,
        validationData,
      ],
    ] = decoded

    return new GammaOrder(
      {
        orderInfo: new OrderInfo(market, trader, nonce, deadline.toNumber()),
        pairId: pairId.toNumber(),
        tradeAmount,
        tradeAmountSqrt,
        marginAmount,
        entryTokenAddress,
        hedgeInterval,
        sqrtPriceTrigger,
        maxSlippageTolerance: maxSlippageTolerance.toNumber(),
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
        market: this.gammaOrder.orderInfo.market,
        trader: this.gammaOrder.orderInfo.trader,
        nonce: this.gammaOrder.orderInfo.nonce,
        deadline: this.gammaOrder.orderInfo.deadline,
      },
      pairId: this.gammaOrder.pairId,
      entryTokenAddress: this.gammaOrder.entryTokenAddress,
      tradeAmount: this.gammaOrder.tradeAmount,
      tradeAmountSqrt: this.gammaOrder.tradeAmountSqrt,
      marginAmount: this.gammaOrder.marginAmount,
      hedgeInterval: this.gammaOrder.hedgeInterval,
      sqrtPriceTrigger: this.gammaOrder.sqrtPriceTrigger,
      maxSlippageTolerance: this.gammaOrder.maxSlippageTolerance,
      validatorAddress: this.gammaOrder.validatorAddress,
      validationData: this.gammaOrder.validationData,
    }
  }

  witnessInfoForViem() {
    return {
      info: this.gammaOrder.orderInfo.toWitnessDataForViem(),
      pairId: BigInt(this.gammaOrder.pairId),
      entryTokenAddress: this.gammaOrder.entryTokenAddress,
      tradeAmount: BigInt(this.gammaOrder.tradeAmount.toString()),
      tradeAmountSqrt: BigInt(this.gammaOrder.tradeAmountSqrt.toString()),
      marginAmount: BigInt(this.gammaOrder.marginAmount.toString()),
      hedgeInterval: BigInt(this.gammaOrder.hedgeInterval.toString()),
      sqrtPriceTrigger: BigInt(this.gammaOrder.sqrtPriceTrigger.toString()),
      maxSlippageTolerance: BigInt(this.gammaOrder.maxSlippageTolerance),
      validatorAddress: this.gammaOrder.validatorAddress,
      validationData: this.gammaOrder.validationData,
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
        token: this.gammaOrder.entryTokenAddress,
        amount: this.gammaOrder.marginAmount.gt(0)
          ? this.gammaOrder.marginAmount
          : BigNumber.from(0),
      },
      spender: this.gammaOrder.orderInfo.market,
      nonce: this.gammaOrder.orderInfo.nonce,
      deadline: this.gammaOrder.orderInfo.deadline,
    }
  }

  /// @dev Returns the EIP712 typed data and value for viem
  permitDataForViem() {
    const permit = this.toPermit()

    return {
      primaryType: 'PermitWitnessTransferFrom',
      domain: {
        name: 'Permit2',
        chainId: this.chainId,
        verifyingContract: this.permit2Address as Address,
      },
      types: GAMMA_ORDER_PERMIT2_TYPES,
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
      witnessTypeName: 'GammaOrder',
      witnessType: GAMMA_ORDER_TYPES,
    }
  }

  hash(): string {
    return ethers.utils._TypedDataEncoder
      .from(GAMMA_ORDER_TYPES)
      .hash(this.witnessInfo())
  }
}
