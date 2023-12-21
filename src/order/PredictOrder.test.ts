import { ZERO_ADDRESS } from '../constants'

import { PredictOrder } from './PredictOrder'

const ZERO = 0n

describe('PredictOrder', () => {
  describe('permitData', () => {
    it('succeeds to generate permit data', () => {
      const order = new PredictOrder(
        {
          pairId: 1n,
          entryTokenAddress: ZERO_ADDRESS,
          duration: 60n,
          tradeAmount: ZERO,
          tradeAmountSqrt: ZERO,
          marginAmount: ZERO,
          validatorAddress: '0x',
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

      const { domain } = order.permitData()
      expect(domain).toEqual({
        chainId: 1,
        name: 'Permit2',
        verifyingContract: '0x000000000022d473030f116ddee9f6b43ac78ba3',
      })
      // expect(types).toEqual(BigNumber.from(0));
      // expect(values).toEqual(BigNumber.from(0));
    })
  })

  describe('serialize', () => {
    it('succeeds to serialize', () => {
      const order = new PredictOrder(
        {
          pairId: 1n,
          duration: 60n,
          entryTokenAddress: ZERO_ADDRESS,
          tradeAmount: ZERO,
          tradeAmountSqrt: ZERO,
          marginAmount: ZERO,
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

      const decoded = PredictOrder.parse(encoded, 1)

      expect(decoded.predictOrder.pairId).toEqual(order.predictOrder.pairId)
    })
  })
})
