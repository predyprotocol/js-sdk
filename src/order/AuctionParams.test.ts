import { AuctionParams } from './AuctionParams'

describe('AuctionParams', () => {
  describe('serialize', () => {
    it('serialize and deserialize', () => {
      const data = new AuctionParams(1n, 2n, 3n, 4n)
      const validationData = AuctionParams.deserialize(data.serialize())

      expect(validationData.startPrice).toBe(1n)
      expect(validationData.endPrice).toBe(2n)
      expect(validationData.startTime).toBe(3n)
      expect(validationData.endTime).toBe(4n)
    })
  })
})
