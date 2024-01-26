import { computePrice, Position, Q96 } from './position'

describe('position', () => {
  const sqrtPrice1 = 2n ** 96n
  const sqrtPrice2 = 2n * 2n ** 96n
  const sqrtPrice3 = 2n ** 96n / 2n

  describe('computePrice', () => {
    it('compute price', () => {
      expect(computePrice(sqrtPrice1).toString()).toBe(Q96.toString())
      expect(computePrice(sqrtPrice2).toString()).toBe((4n * Q96).toString())
      expect(computePrice(sqrtPrice3).toString()).toBe((Q96 / 4n).toString())
    })
  })

  describe('calculateMinDeposit', () => {
    it('calculate minDeposit', () => {
      const position = new Position(-900000n, 1000000n, -1000000n)
      expect(position.calculateMinDeposit(sqrtPrice1).toString()).toBe('99')
    })
  })

  describe('calculateValue', () => {
    it('calculates position value of gamma long', () => {
      const position = new Position(1000000n, -1000000n, 1000000n)

      expect(position.calculateValue(sqrtPrice1).toString()).toBe('0')
      expect(position.calculateValue(sqrtPrice2).toString()).toBe('1000000')
      expect(position.calculateValue(sqrtPrice3).toString()).toBe('250000')
    })

    it('calculates position value of gamma short', () => {
      const position = new Position(-900000n, 1000000n, -1000000n)

      expect(position.calculateValue(sqrtPrice1).toString()).toBe('100000')
      expect(position.calculateValue(sqrtPrice2).toString()).toBe('-900000')
      expect(position.calculateValue(sqrtPrice3).toString()).toBe('-150000')
    })
  })

  describe('calculateLiquidationPrice', () => {
    it('calculates liquidation price', () => {
      const position = new Position(-900000n, 1000000n, -1000000n)

      const lowerSqrtPrice = position.calculateLiquidationSqrtPrice1(0n)

      expect(((lowerSqrtPrice * 1000000n) / Q96).toString()).toBe('690576')

      expect(position.calculateValue(lowerSqrtPrice).toString()).toBe('4257')
    })

    it('calculates liquidation price', () => {
      const position = new Position(-900000n, 1000000n, -1000000n)

      const upperSqrtPrice = position.calculateLiquidationSqrtPrice2(0n)

      expect(((upperSqrtPrice * 1000000n) / Q96).toString()).toBe('1303258')
      expect(position.calculateValue(upperSqrtPrice).toString()).toBe('8034')
    })
  })
})
