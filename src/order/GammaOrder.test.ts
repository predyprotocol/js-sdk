import { ZERO_ADDRESS } from '../constants'

import { GammaOrder } from './GammaOrder'

const ZERO = 0n

describe('GammaOrder', () => {
  describe('permitData', () => {
    it('succeeds to generate permit data', () => {
      const order = new GammaOrder(
        {
          pairId: 1n,
          entryTokenAddress: ZERO_ADDRESS,
          tradeAmount: ZERO,
          tradeAmountSqrt: ZERO,
          marginAmount: ZERO,
          hedgeInterval: 0n,
          sqrtPriceTrigger: 0n,
          maxSlippageTolerance: 0n,
          validatorAddress: ZERO_ADDRESS,
          validationData: ZERO_ADDRESS,
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
      expect(message).toEqual({
        deadline: 10n,
        nonce: 0n,
        permitted: { amount: 0n, token: ZERO_ADDRESS },
        spender: ZERO_ADDRESS,
        witness: {
          entryTokenAddress: ZERO_ADDRESS,
          hedgeInterval: 0n,
          info: {
            market: ZERO_ADDRESS,
            trader: ZERO_ADDRESS,
            nonce: 0n,
            deadline: 10n,
          },
          marginAmount: 0n,
          maxSlippageTolerance: 0n,
          pairId: 1n,
          sqrtPriceTrigger: 0n,
          tradeAmount: 0n,
          tradeAmountSqrt: 0n,
          validationData: ZERO_ADDRESS,
          validatorAddress: ZERO_ADDRESS,
        },
      })
    })
  })

  describe('serialize', () => {
    it('succeeds to serialize', () => {
      const order = new GammaOrder(
        {
          pairId: 1n,
          entryTokenAddress: ZERO_ADDRESS,
          tradeAmount: ZERO,
          tradeAmountSqrt: ZERO,
          marginAmount: ZERO,
          hedgeInterval: 0n,
          sqrtPriceTrigger: 0n,
          maxSlippageTolerance: 0n,
          validatorAddress: ZERO_ADDRESS,
          validationData: ZERO_ADDRESS,
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

      const decoded = GammaOrder.parse(encoded, 1)

      expect(decoded.gammaOrder.pairId).toEqual(order.gammaOrder.pairId)
    })
  })
})
