import { ZERO_ADDRESS } from '../constants'

import { PerpOrderV3 } from './PerpOrderV3'

describe('PerpOrderV3', () => {
  describe('permitData', () => {
    it('succeeds to generate permit data', () => {
      const order = new PerpOrderV3(
        {
          pairId: 2n,
          entryTokenAddress: ZERO_ADDRESS,
          side: 'Buy',
          quantity: 0n,
          marginAmount: 0n,
          limitPrice: 0n,
          stopPrice: 0n,
          leverage: 3,
          reduceOnly: false,
          closePosition: false,
          auctionData: '0x',
          info: {
            market: ZERO_ADDRESS,
            trader: ZERO_ADDRESS,
            nonce: 0n,
            deadline: 123n,
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

      expect(message.deadline).toEqual(123n)
    })
  })

  describe('serialize', () => {
    it('succeeds to serialize', () => {
      const order = new PerpOrderV3(
        {
          pairId: 2n,
          entryTokenAddress: ZERO_ADDRESS,
          side: 'Buy',
          quantity: 0n,
          marginAmount: 0n,
          limitPrice: 0n,
          stopPrice: 0n,
          leverage: 3,
          reduceOnly: false,
          closePosition: false,
          auctionData: '0x',
          info: {
            market: ZERO_ADDRESS,
            trader: ZERO_ADDRESS,
            nonce: 0n,
            deadline: 1n,
          },
        },
        1,
        ''
      )

      const encoded = order.serialize()

      const decoded = PerpOrderV3.parse(encoded, 1)

      expect(decoded.perpOrder).toEqual(order.perpOrder)
    })
  })

  describe('getOptimizedData', () => {
    it('succeeds to get optimized params', () => {
      const order = new PerpOrderV3(
        {
          pairId: 2n,
          entryTokenAddress: ZERO_ADDRESS,
          side: 'Buy',
          quantity: 0n,
          marginAmount: 0n,
          limitPrice: 0n,
          stopPrice: 0n,
          leverage: 3,
          reduceOnly: false,
          closePosition: true,
          auctionData: '0x',
          info: {
            market: ZERO_ADDRESS,
            trader: ZERO_ADDRESS,
            nonce: 0n,
            deadline: 1n,
          },
        },
        1,
        ''
      )

      const params = order.getOptimizedData()
      expect(params).toEqual(
        '0x0000000000000000000000000101000300000000000000020000000000000001'
      )
    })
  })
})
