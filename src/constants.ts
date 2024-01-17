import { Address } from './types'

export const DUTCH_ORDER_VALIDATOR_MAPPING: {
  readonly [key: number]: Address
} = {
  1: '0x0000000000000000000000000000000000000000',
  42161: '0x1Df9b0A328A41E2b01C439fF9C90C481B3170c5e',
}

export const LIMIT_ORDER_VALIDATOR_MAPPING: {
  readonly [key: number]: Address
} = {
  1: '0x0000000000000000000000000000000000000000',
  42161: '0xAAA65f9851bC59DF7688bD3163738f00496f802d',
}

export const GENERAL_DUTCH_ORDER_VALIDATOR_MAPPING: {
  readonly [key: number]: Address
} = {
  1: '0x0000000000000000000000000000000000000000',
  42161: '0xbAA9Fec711d4b4276B7A37f891d172FF39EabD0d',
}

export const SPOT_DUTCH_ORDER_VALIDATOR_MAPPING: {
  readonly [key: number]: Address
} = {
  1: '0x0000000000000000000000000000000000000000',
  42161: '0x803bB804271b3563Aca4A7CDE4c35D5D37Ea2206',
}

export const SPOT_LIMIT_ORDER_VALIDATOR_MAPPING: {
  readonly [key: number]: Address
} = {
  1: '0x0000000000000000000000000000000000000000',
  42161: '0xbDb43F342Be3722746a9FF0C049b676987C88a4D',
}

export const UNISWAP_SETTLEMENT_MAPPING: {
  readonly [key: number]: Address
} = {
  1: '0x0000000000000000000000000000000000000000',
  42161: '0x5f1E0379D04f77d221fbFa4c4D6105d097Fd690C',
}

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'
