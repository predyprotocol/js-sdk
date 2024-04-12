import { ZERO_ADDRESS } from '../constants'

import { GammaOrder } from './GammaOrder'

const ZERO = 0n

describe('GammaOrder', () => {
  describe('permitData', () => {
    it('succeeds to generate permit data', () => {
      const order = new GammaOrder(
        {
          pairId: 1n,
          positionId: 1n,
          entryTokenAddress: ZERO_ADDRESS,
          quantity: ZERO,
          quantitySqrt: ZERO,
          marginAmount: ZERO,
          limitValue: ZERO,
          closePosition: false,
          leverage: 1,
          modifyInfo: {
            isEnabled: false,
            expiration: 0n,
            lowerLimit: 0n,
            upperLimit: 0n,
            hedgeInterval: 0,
            sqrtPriceTrigger: 0,
            minSlippageTolerance: 0,
            maxSlippageTolerance: 0,
            auctionPeriod: 0,
            auctionRange: 0,
          },
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
          pairId: 1n,
          positionId: 1n,
          entryTokenAddress: ZERO_ADDRESS,
          quantity: 0n,
          quantitySqrt: 0n,
          marginAmount: 0n,
          closePosition: false,
          limitValue: 0n,
          leverage: 1,
          info: {
            market: ZERO_ADDRESS,
            trader: ZERO_ADDRESS,
            nonce: 0n,
            deadline: 10n,
          },
          modifyInfo: {
            isEnabled: false,
            expiration: 0n,
            lowerLimit: 0n,
            upperLimit: 0n,
            hedgeInterval: 0,
            sqrtPriceTrigger: 0,
            minSlippageTolerance: 0,
            maxSlippageTolerance: 0,
            auctionPeriod: 0,
            auctionRange: 0,
          },
        },
      })
    })
  })

  describe('serialize', () => {
    it('succeeds to serialize', () => {
      const order = new GammaOrder(
        {
          pairId: 1n,
          positionId: 1n,
          entryTokenAddress: ZERO_ADDRESS,
          quantity: ZERO,
          quantitySqrt: ZERO,
          marginAmount: ZERO,
          limitValue: ZERO,
          closePosition: false,
          leverage: 1,
          info: {
            market: ZERO_ADDRESS,
            trader: ZERO_ADDRESS,
            nonce: 0n,
            deadline: 10n,
          },
          modifyInfo: {
            isEnabled: false,
            expiration: 0n,
            lowerLimit: 0n,
            upperLimit: 0n,
            hedgeInterval: 0,
            sqrtPriceTrigger: 0,
            minSlippageTolerance: 0,
            maxSlippageTolerance: 0,
            auctionPeriod: 0,
            auctionRange: 0,
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

  describe('getOptimizedData', () => {
    it('succeeds to get optimized params', () => {
      const order = new GammaOrder(
        {
          pairId: 1n,
          positionId: 1n,
          entryTokenAddress: ZERO_ADDRESS,
          quantity: ZERO,
          quantitySqrt: ZERO,
          marginAmount: ZERO,
          limitValue: ZERO,
          closePosition: false,
          leverage: 1,
          modifyInfo: {
            isEnabled: false,
            expiration: 1n,
            lowerLimit: 0n,
            upperLimit: 0n,
            hedgeInterval: 2,
            sqrtPriceTrigger: 3,
            minSlippageTolerance: 4,
            maxSlippageTolerance: 5,
            auctionPeriod: 6,
            auctionRange: 7,
          },
          info: {
            market: ZERO_ADDRESS,
            trader: ZERO_ADDRESS,
            nonce: 0n,
            deadline: 10n,
          },
        },
        1
      )

      const params = order.getOptimizedData()
      expect(params).toEqual(
        '0x0006000000000007000000050000000400000003000000020000000000000001'
      )
    })
  })
})
