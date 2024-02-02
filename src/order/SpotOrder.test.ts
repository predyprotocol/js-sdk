import { ZERO_ADDRESS } from '../constants'

import { SpotDutchOrderValidationData, SpotOrder } from './SpotOrder'

describe('SpotOrder', () => {
  describe('permitData', () => {
    it('succeeds to generate permit data', () => {
      const order = new SpotOrder(
        {
          quoteToken: ZERO_ADDRESS,
          baseToken: ZERO_ADDRESS,
          baseTokenAmount: 0n,
          quoteTokenAmount: 0n,
          validatorAddress: ZERO_ADDRESS,
          validationData: '0x',
          info: {
            market: ZERO_ADDRESS,
            trader: ZERO_ADDRESS,
            nonce: 0n,
            deadline: 10n,
          },
        },
        1
      )

      const { domain, message } = order.permitData()
      expect(domain).toEqual({
        chainId: 1,
        name: 'Permit2',
        verifyingContract: '0x000000000022d473030f116ddee9f6b43ac78ba3',
      })

      expect(message.deadline).toEqual(10n)
    })
  })

  describe('serialize', () => {
    it('succeeds to serialize', () => {
      const order = new SpotOrder(
        {
          quoteToken: ZERO_ADDRESS,
          baseToken: ZERO_ADDRESS,
          baseTokenAmount: 0n,
          quoteTokenAmount: 0n,
          validatorAddress: ZERO_ADDRESS,
          validationData: '0x',
          info: {
            market: ZERO_ADDRESS,
            trader: ZERO_ADDRESS,
            nonce: 0n,
            deadline: 10n,
          },
        },
        1
      )

      const encoded = order.serialize()

      const decoded = SpotOrder.parse(encoded, 1)

      expect(decoded.spotOrder).toEqual(order.spotOrder)
    })
  })

  describe('getCompressedParams', () => {
    it('succeeds to get optimized params', () => {
      const order = new SpotOrder(
        {
          quoteToken: ZERO_ADDRESS,
          baseToken: ZERO_ADDRESS,
          baseTokenAmount: 0n,
          quoteTokenAmount: 0n,
          validatorAddress: '0x803bB804271b3563Aca4A7CDE4c35D5D37Ea2206',
          validationData: '0x000000000000000000000000000000000000000000000009c0823954cd7af305000000000000000000000000000000000000000000000009c0823954cd7af30500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
          info: {
            market: ZERO_ADDRESS,
            trader: ZERO_ADDRESS,
            nonce: 0n,
            deadline: 10n,
          },
        },
        1
      )

      const params = order.getCompressedParams()
      expect(params.param1).toEqual(
        '0x000000010000000000000000000000000000000000000000000000000000000a'
      )
    })
  })
})

describe('SpotDutchOrderValidationData', () => {
  describe('serialize', () => {
    it('serialize and deserialize', () => {
      const data = new SpotDutchOrderValidationData(1n, 2n, 3, 4)
      const validationData = SpotDutchOrderValidationData.deserialize(
        data.serialize()
      )

      expect(validationData.startPrice).toBe(1n)
      expect(validationData.endPrice).toBe(2n)
      expect(validationData.startTime).toBe(3)
      expect(validationData.endTime).toBe(4)
    })
  })
})
