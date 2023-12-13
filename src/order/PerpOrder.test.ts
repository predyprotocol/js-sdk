import { BigNumber, constants } from 'ethers'

import { PerpOrder } from './PerpOrder'

const ZERO = BigNumber.from(0)

describe('PerpOrder', () => {
  describe('permitData', () => {
    it('succeeds to generate permit data', () => {
      const order = new PerpOrder(
        {
          pairId: 1,
          entryTokenAddress: constants.AddressZero,
          tradeAmount: ZERO,
          marginAmount: ZERO,
          takeProfitPrice: ZERO,
          stopLossPrice: ZERO,
          slippageTolerance: 0,
          validatorAddress: '',
          validationData: '',
          chainId: 1,
          orderInfo: {
            trader: '',
            market: '',
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
      const order = new PerpOrder(
        {
          pairId: 1,
          entryTokenAddress: constants.AddressZero,
          tradeAmount: ZERO,
          marginAmount: ZERO,
          takeProfitPrice: ZERO,
          stopLossPrice: ZERO,
          slippageTolerance: 0,
          validatorAddress: constants.AddressZero,
          validationData: '0x',
          chainId: 1,
          orderInfo: {
            trader: constants.AddressZero,
            market: constants.AddressZero,
            nonce: ZERO,
            deadline: 0,
          },
        },
        1,
        ''
      )

      const encoded = order.serialize()

      const decoded = PerpOrder.parse(encoded, 1)

      expect(decoded.perpOrder.pairId).toEqual(order.perpOrder.pairId)
    })
  })
})
