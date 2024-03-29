import { decodeAbiParameters, encodeAbiParameters } from 'viem'

import { PERMIT2_MAPPING } from '../constants'
import { Address, Bytes } from '../types'

import {
  GammaOrderParams,
  ORDER_INFO_TYPES,
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
  { name: 'minSlippageTolerance', type: 'uint64' },
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
  {
    name: 'GammaOrder',
    type: 'tuple',
    components: [
      {
        name: 'info',
        type: 'tuple',
        components: [
          { name: 'market', type: 'address' },
          { name: 'trader', type: 'address' },
          { name: 'nonce', type: 'uint256' },
          { name: 'deadline', type: 'uint256' },
        ],
      },
      { name: 'pairId', type: 'uint256' },
      { name: 'entryTokenAddress', type: 'address' },
      { name: 'tradeAmount', type: 'int256' },
      { name: 'tradeAmountSqrt', type: 'int256' },
      { name: 'marginAmount', type: 'int256' },
      { name: 'hedgeInterval', type: 'uint256' },
      { name: 'sqrtPriceTrigger', type: 'uint256' },
      { name: 'minSlippageTolerance', type: 'uint64' },
      { name: 'maxSlippageTolerance', type: 'uint64' },
      { name: 'validatorAddress', type: 'address' },
      { name: 'validationData', type: 'bytes' },
    ],
  },
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

  serialize(): Bytes {
    return encodeAbiParameters(GAMMA_ORDER_ABI, [this.gammaOrder])
  }

  static parse(encoded: Bytes, chainId: number, permit2?: string): GammaOrder {
    const decoded = decodeAbiParameters(GAMMA_ORDER_ABI, encoded)

    const order = decoded[0] as GammaOrderParams

    return new GammaOrder(order, chainId, permit2)
  }

  public witnessInfo() {
    return {
      info: this.gammaOrder.info,
      pairId: this.gammaOrder.pairId,
      entryTokenAddress: this.gammaOrder.entryTokenAddress,
      tradeAmount: this.gammaOrder.tradeAmount,
      tradeAmountSqrt: this.gammaOrder.tradeAmountSqrt,
      marginAmount: this.gammaOrder.marginAmount,
      hedgeInterval: this.gammaOrder.hedgeInterval,
      sqrtPriceTrigger: this.gammaOrder.sqrtPriceTrigger,
      minSlippageTolerance: this.gammaOrder.minSlippageTolerance,
      maxSlippageTolerance: this.gammaOrder.maxSlippageTolerance,
      validatorAddress: this.gammaOrder.validatorAddress,
      validationData: this.gammaOrder.validationData,
    }
  }

  toPermit() {
    return {
      permitted: {
        token: this.gammaOrder.entryTokenAddress,
        amount:
          this.gammaOrder.marginAmount > 0n ? this.gammaOrder.marginAmount : 0n,
      },
      spender: this.gammaOrder.info.market,
      nonce: this.gammaOrder.info.nonce,
      deadline: this.gammaOrder.info.deadline,
    }
  }

  /// @dev Returns the EIP712 typed data and value for viem
  permitData() {
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
        deadline: permit.deadline,
        nonce: permit.nonce,
        permitted: permit.permitted,
        spender: permit.spender,
        witness: this.witnessInfo(),
      },
    }
  }
}
