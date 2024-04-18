import { utils } from 'ethers'
import { decodeAbiParameters, encodeAbiParameters } from 'viem'

import { PERMIT2_MAPPING } from '../constants'
import { Address, Bytes } from '../types'

import {
  GammaOrderParams,
  ORDER_INFO_TYPES,
  PERMIT_WITNESS_TRANSFER_FROM_TYPES,
  TOKEN_PERMISSION_TYPES,
} from './types'

const GAMMA_MODIFY_INFO_TYPES = [
  { name: 'isEnabled', type: 'bool' },
  { name: 'expiration', type: 'uint64' },
  { name: 'lowerLimit', type: 'uint256' },
  { name: 'upperLimit', type: 'uint256' },
  { name: 'hedgeInterval', type: 'uint32' },
  { name: 'sqrtPriceTrigger', type: 'uint32' },
  { name: 'minSlippageTolerance', type: 'uint32' },
  { name: 'maxSlippageTolerance', type: 'uint32' },
  { name: 'auctionPeriod', type: 'uint16' },
  { name: 'auctionRange', type: 'uint32' },
]

const GAMMA_ORDER_TYPES_SINGLE = [
  { name: 'info', type: 'OrderInfo' },
  { name: 'pairId', type: 'uint64' },
  { name: 'positionId', type: 'uint256' },
  { name: 'entryTokenAddress', type: 'address' },
  { name: 'quantity', type: 'int256' },
  { name: 'quantitySqrt', type: 'int256' },
  { name: 'marginAmount', type: 'int256' },
  { name: 'baseSqrtPrice', type: 'uint256' },
  { name: 'slippageTolerance', type: 'uint32' },
  { name: 'leverage', type: 'uint8' },
  { name: 'modifyInfo', type: 'GammaModifyInfo' },
]

export const GAMMA_ORDER_TYPES = {
  GammaOrder: GAMMA_ORDER_TYPES_SINGLE,
  GammaModifyInfo: GAMMA_MODIFY_INFO_TYPES,
  OrderInfo: ORDER_INFO_TYPES,
}

export const GAMMA_ORDER_PERMIT2_TYPES = {
  PermitWitnessTransferFrom: PERMIT_WITNESS_TRANSFER_FROM_TYPES('GammaOrder'),
  GammaOrder: GAMMA_ORDER_TYPES_SINGLE,
  GammaModifyInfo: GAMMA_MODIFY_INFO_TYPES,
  OrderInfo: ORDER_INFO_TYPES,
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
      { name: 'pairId', type: 'uint64' },
      { name: 'positionId', type: 'uint256' },
      { name: 'entryTokenAddress', type: 'address' },
      { name: 'quantity', type: 'int256' },
      { name: 'quantitySqrt', type: 'int256' },
      { name: 'marginAmount', type: 'int256' },
      { name: 'baseSqrtPrice', type: 'uint256' },
      { name: 'slippageTolerance', type: 'uint32' },
      { name: 'leverage', type: 'uint8' },
      {
        name: 'modifyInfo',
        type: 'tuple',
        components: [
          { name: 'isEnabled', type: 'bool' },
          { name: 'expiration', type: 'uint64' },
          { name: 'lowerLimit', type: 'uint256' },
          { name: 'upperLimit', type: 'uint256' },
          { name: 'hedgeInterval', type: 'uint32' },
          { name: 'sqrtPriceTrigger', type: 'uint32' },
          { name: 'minSlippageTolerance', type: 'uint32' },
          { name: 'maxSlippageTolerance', type: 'uint32' },
          { name: 'auctionPeriod', type: 'uint16' },
          { name: 'auctionRange', type: 'uint32' },
        ],
      },
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
      positionId: this.gammaOrder.positionId,
      entryTokenAddress: this.gammaOrder.entryTokenAddress,
      quantity: this.gammaOrder.quantity,
      quantitySqrt: this.gammaOrder.quantitySqrt,
      marginAmount: this.gammaOrder.marginAmount,
      baseSqrtPrice: this.gammaOrder.baseSqrtPrice,
      slippageTolerance: this.gammaOrder.slippageTolerance,
      leverage: this.gammaOrder.leverage,
      modifyInfo: this.gammaOrder.modifyInfo,
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

  public getOptimizedTradeParams() {
    return {
      trader: this.gammaOrder.info.trader,
      nonce: this.gammaOrder.info.nonce,
      positionId: this.gammaOrder.positionId,
      quantity: this.gammaOrder.quantity,
      quantitySqrt: this.gammaOrder.quantitySqrt,
      marginAmount: this.gammaOrder.marginAmount,
      baseSqrtPrice: this.gammaOrder.baseSqrtPrice,
      param: this.getOptimizedData(),
      modifyParam: this.getOptimizedModifyData(),
      lowerLimit: this.gammaOrder.modifyInfo.lowerLimit,
      upperLimit: this.gammaOrder.modifyInfo.upperLimit,
    }
  }

  public getOptimizedModifyParams() {
    return {
      trader: this.gammaOrder.info.trader,
      nonce: this.gammaOrder.info.nonce,
      deadline: this.gammaOrder.info.deadline,
      positionId: this.gammaOrder.positionId,
      param: this.getOptimizedModifyData(),
      lowerLimit: this.gammaOrder.modifyInfo.lowerLimit,
      upperLimit: this.gammaOrder.modifyInfo.upperLimit,
    }
  }

  getOptimizedData() {
    return utils.solidityPack(
      ['uint88', 'uint8', 'uint32', 'uint64', 'uint64'],
      [
        0,
        this.gammaOrder.leverage,
        this.gammaOrder.slippageTolerance,
        this.gammaOrder.pairId,
        this.gammaOrder.info.deadline,
      ]
    ) as Bytes
  }

  getOptimizedModifyData() {
    return utils.solidityPack(
      [
        'uint16',
        'uint16',
        'uint32',
        'uint32',
        'uint32',
        'uint32',
        'uint32',
        'uint64',
      ],
      [
        this.gammaOrder.modifyInfo.auctionPeriod,
        this.gammaOrder.modifyInfo.isEnabled ? 1 : 0,
        this.gammaOrder.modifyInfo.auctionRange,
        this.gammaOrder.modifyInfo.maxSlippageTolerance,
        this.gammaOrder.modifyInfo.minSlippageTolerance,
        this.gammaOrder.modifyInfo.sqrtPriceTrigger,
        this.gammaOrder.modifyInfo.hedgeInterval,
        this.gammaOrder.modifyInfo.expiration,
      ]
    ) as Bytes
  }
}
