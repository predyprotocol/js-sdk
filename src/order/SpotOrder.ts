import { solidityPack } from 'ethers/lib/utils'
import { decodeAbiParameters, encodeAbiParameters, isAddressEqual } from 'viem'

import {
  PERMIT2_MAPPING,
  SPOT_DUTCH_ORDER_VALIDATOR_MAPPING,
} from '../constants'
import { Address, Bytes } from '../types'
import { abs } from '../utils'

import {
  BaseValidationData,
  ORDER_INFO_TYPES,
  PERMIT_WITNESS_TRANSFER_FROM_TYPES,
  SpotOrderParams,
  TOKEN_PERMISSION_TYPES,
} from './types'

const SPOT_ORDER_TYPES_SINGLE = [
  { name: 'info', type: 'OrderInfo' },
  { name: 'quoteToken', type: 'address' },
  { name: 'baseToken', type: 'address' },
  { name: 'baseTokenAmount', type: 'int256' },
  { name: 'quoteTokenAmount', type: 'uint256' },
  { name: 'validatorAddress', type: 'address' },
  { name: 'validationData', type: 'bytes' },
]
export const SPOT_ORDER_TYPES = {
  SpotOrder: SPOT_ORDER_TYPES_SINGLE,
  OrderInfo: ORDER_INFO_TYPES,
}

export const SPOT_ORDER_PERMIT2_TYPES = {
  PermitWitnessTransferFrom: PERMIT_WITNESS_TRANSFER_FROM_TYPES('SpotOrder'),
  OrderInfo: ORDER_INFO_TYPES,
  SpotOrder: SPOT_ORDER_TYPES_SINGLE,
  TokenPermissions: TOKEN_PERMISSION_TYPES,
} as const

const SPOT_ORDER_ABI = [
  {
    name: 'SpotOrder',
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
      { name: 'quoteToken', type: 'address' },
      { name: 'baseToken', type: 'address' },
      { name: 'baseTokenAmount', type: 'int256' },
      { name: 'quoteTokenAmount', type: 'uint256' },
      { name: 'validatorAddress', type: 'address' },
      { name: 'validationData', type: 'bytes' },
    ],
  },
]

export class SpotOrder {
  public permit2Address: Address

  constructor(
    public readonly spotOrder: SpotOrderParams,
    readonly chainId: number,
    readonly _permit2Address?: Address
  ) {
    if (_permit2Address) {
      this.permit2Address = _permit2Address
    } else {
      this.permit2Address = PERMIT2_MAPPING[chainId] as Address
    }
  }

  serialize(): Bytes {
    return encodeAbiParameters(SPOT_ORDER_ABI, [this.spotOrder]) as Bytes
  }

  static parse(encoded: Bytes, chainId: number, permit2?: Address): SpotOrder {
    const decoded = decodeAbiParameters(SPOT_ORDER_ABI, encoded)

    const order = decoded[0] as SpotOrderParams

    return new SpotOrder(order, chainId, permit2)
  }
  public getOptimizedParams() {
    const compressed = this.getCompressedParams()

    return {
      trader: this.spotOrder.info.trader,
      nonce: this.spotOrder.info.nonce,
      quoteToken: this.spotOrder.quoteToken,
      baseToken: this.spotOrder.baseToken,
      baseTokenAmount: this.spotOrder.baseTokenAmount,
      quoteTokenAmount: this.spotOrder.quoteTokenAmount,
      params1: compressed.param1,
      params2: compressed.param2,
    }
  }

  getCompressedParams() {
    if (
      isAddressEqual(
        this.spotOrder.validatorAddress,
        SPOT_DUTCH_ORDER_VALIDATOR_MAPPING[this.chainId]
      )
    ) {
      const validationParams = SpotDutchOrderValidationData.deserialize(
        this.spotOrder.validationData
      )

      const param1 = solidityPack(
        ['uint32', 'uint32', 'uint64', 'uint64', 'uint64'],
        [
          0,
          (validationParams.endPrice * 10000n) / validationParams.startPrice,
          validationParams.endTime,
          validationParams.startTime,
          this.spotOrder.info.deadline,
        ]
      ) as Bytes
      const param2 = validationParams.startPrice

      return { param1, param2 }
    } else {
      const validationParams = SpotLimitOrderValidationData.deserialize(
        this.spotOrder.validationData
      )

      const param1 = solidityPack(
        ['uint32', 'uint32', 'uint64', 'uint64', 'uint64'],
        [1, 0, 0, 0, this.spotOrder.info.deadline]
      ) as Bytes
      const param2 = validationParams.limitQuoteTokenAmount

      return { param1, param2 }
    }
  }

  public witnessInfo() {
    return {
      info: this.spotOrder.info,
      quoteToken: this.spotOrder.quoteToken,
      baseToken: this.spotOrder.baseToken,
      baseTokenAmount: this.spotOrder.baseTokenAmount,
      quoteTokenAmount: this.spotOrder.quoteTokenAmount,
      validatorAddress: this.spotOrder.validatorAddress,
      validationData: this.spotOrder.validationData,
    }
  }

  toPermit() {
    let token = ''
    let amount = 0n

    if (this.spotOrder.baseTokenAmount > 0n) {
      token = this.spotOrder.quoteToken
      amount = this.spotOrder.quoteTokenAmount
    } else {
      token = this.spotOrder.baseToken
      amount = abs(this.spotOrder.baseTokenAmount)
    }

    return {
      permitted: {
        token,
        amount,
      },
      spender: this.spotOrder.info.market,
      nonce: this.spotOrder.info.nonce,
      deadline: this.spotOrder.info.deadline,
    }
  }

  permitData() {
    const permit = this.toPermit()

    return {
      primaryType: 'PermitWitnessTransferFrom',
      domain: {
        name: 'Permit2',
        chainId: this.chainId,
        verifyingContract: this.permit2Address,
      },
      types: SPOT_ORDER_PERMIT2_TYPES,
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

export const SPOT_DUTCH_ORDER_VALIDATION_ABI = [
  {
    name: 'SpotDutchOrderValidationData',
    type: 'tuple',
    components: [
      { name: 'startPrice', type: 'uint256' },
      { name: 'endPrice', type: 'uint256' },
      { name: 'startTime', type: 'uint256' },
      { name: 'endTime', type: 'uint256' },
    ],
  },
]

export class SpotDutchOrderValidationData extends BaseValidationData {
  constructor(
    public startPrice: bigint,
    public endPrice: bigint,
    public startTime: number,
    public endTime: number
  ) {
    super()
  }

  serialize(): Bytes {
    return encodeAbiParameters(SPOT_DUTCH_ORDER_VALIDATION_ABI, [
      {
        startPrice: this.startPrice,
        endPrice: this.endPrice,
        startTime: this.startTime,
        endTime: this.endTime,
      },
    ]) as Bytes
  }

  static deserialize(validationData: Bytes) {
    const decoded = decodeAbiParameters(
      SPOT_LIMIT_ORDER_VALIDATION_ABI,
      validationData
    )[0] as {
      startPrice: bigint
      endPrice: bigint
      startTime: number
      endTime: number
    }

    return new SpotDutchOrderValidationData(
      decoded.startPrice,
      decoded.endPrice,
      decoded.startTime,
      decoded.endTime
    )
  }
}

export const SPOT_LIMIT_ORDER_VALIDATION_ABI = [
  {
    name: 'LimitOrderValidationData',
    type: 'tuple',
    components: [{ name: 'limitQuoteTokenAmount', type: 'uint256' }],
  },
]

export class SpotLimitOrderValidationData extends BaseValidationData {
  constructor(public limitQuoteTokenAmount: bigint) {
    super()
  }

  serialize(): Bytes {
    return encodeAbiParameters(SPOT_LIMIT_ORDER_VALIDATION_ABI, [
      { limitQuoteTokenAmount: this.limitQuoteTokenAmount },
    ]) as Bytes
  }

  static deserialize(validationData: Bytes) {
    const decoded = decodeAbiParameters(
      SPOT_LIMIT_ORDER_VALIDATION_ABI,
      validationData
    )[0] as {
      limitQuoteTokenAmount: bigint
    }

    return new SpotLimitOrderValidationData(decoded.limitQuoteTokenAmount)
  }
}
