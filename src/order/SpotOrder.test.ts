import { ZERO_ADDRESS } from '../constants'

import { SpotOrder } from './SpotOrder'

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
})
