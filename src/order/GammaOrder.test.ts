import { BigNumber, constants } from 'ethers'

import { GammaOrder } from './GammaOrder'

const ZERO = BigNumber.from(0)

describe('GammaOrder', () => {
  describe('permitData', () => {
    it('succeeds to generate permit data', () => {
      const order = new GammaOrder(
        {
          pairId: 1,
          entryTokenAddress: constants.AddressZero,
          positionId: 1,
          tradeAmount: ZERO,
          tradeAmountSqrt: ZERO,
          marginAmount: ZERO,
          validatorAddress: '',
          validationData: '',
          chainId: 1,
          orderInfo: {
            trader: '',
            market: '',
            filler: '',
            nonce: ZERO,
            deadline: 0,
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
      const order = new GammaOrder(
        {
          pairId: 1,
          entryTokenAddress: constants.AddressZero,
          positionId: 1,
          tradeAmount: ZERO,
          tradeAmountSqrt: ZERO,
          marginAmount: ZERO,
          validatorAddress: constants.AddressZero,
          validationData: '0x',
          chainId: 1,
          orderInfo: {
            trader: constants.AddressZero,
            market: constants.AddressZero,
            filler: constants.AddressZero,
            nonce: ZERO,
            deadline: 0,
          },
        },
        1,
        ''
      )

      const encoded = order.serialize()

      const decoded = GammaOrder.parse(encoded, 1)

      expect(decoded.generalOrder.pairId).toEqual(order.generalOrder.pairId)
    })
  })
})
