import { LimitOrderValidationData } from './LimitOrderValidationData'

describe('LimitOrderValidationData', () => {
  describe('serialize', () => {
    it('serialize and deserialize', () => {
      const data = new LimitOrderValidationData(1n, 2n, 3n, 4n)
      const validationData = LimitOrderValidationData.deserialize(
        data.serialize()
      )

      expect(validationData.triggerPrice.toString()).toBe('1')
      expect(validationData.triggerPriceSqrt.toString()).toBe('2')
      expect(validationData.limitPrice.toString()).toBe('3')
      expect(validationData.limitPriceSqrt.toString()).toBe('4')
    })
  })
})
