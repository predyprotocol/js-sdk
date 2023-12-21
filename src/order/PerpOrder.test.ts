import { ZERO_ADDRESS } from '../constants'

import { PerpOrder } from './PerpOrder'

describe('PerpOrder', () => {
  describe('permitData', () => {
    it('succeeds to generate permit data', () => {
      const order = new PerpOrder(
        {
          pairId: 1n,
          entryTokenAddress: ZERO_ADDRESS,
          tradeAmount: 0n,
          marginAmount: 0n,
          takeProfitPrice: 0n,
          stopLossPrice: 0n,
          slippageTolerance: 0n,
          leverage: 0,
          validatorAddress: ZERO_ADDRESS,
          validationData: '0x',
          info: {
            market: ZERO_ADDRESS,
            trader: ZERO_ADDRESS,
            nonce: 0n,
            deadline: 10n,
          },
        },
        1,
        ''
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
      const order = new PerpOrder(
        {
          pairId: 1n,
          entryTokenAddress: ZERO_ADDRESS,
          tradeAmount: 0n,
          marginAmount: 0n,
          takeProfitPrice: 0n,
          stopLossPrice: 0n,
          slippageTolerance: 0n,
          leverage: 0,
          validatorAddress: ZERO_ADDRESS,
          validationData: '0x',
          info: {
            market: ZERO_ADDRESS,
            trader: ZERO_ADDRESS,
            nonce: 0n,
            deadline: 10n,
          },
        },
        1,
        ''
      )

      const encoded = order.serialize()

      const decoded = PerpOrder.parse(encoded, 1)

      expect(decoded.perpOrder).toEqual(order.perpOrder)
    })
  })
})
