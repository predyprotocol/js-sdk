import { abs, sqrt } from "../utils"

export const Q96 = 2n ** 96n
const ONE_1E8 = 100000000n
const RISK_RATIO = 100995049n
const DEBT_RISK_RATIO = 200000n

export class Position {

  constructor(
    public stable: bigint,
    public squart: bigint,
    public underlying: bigint,
    public riskRatio: bigint = RISK_RATIO
  ) {
  }

  calculateLiquidationPrice1(margin: bigint) {
    return computePrice(
      this.calculateLiquidationSqrtPrice1(margin)
    )
  }

  calculateLiquidationPrice2(margin: bigint) {
    return computePrice(
      this.calculateLiquidationSqrtPrice2(margin)
    )
  }

  calculateLiquidationSqrtPrice1(margin: bigint) {
    const liqSqrtPrice = this.calculateLiquidationSqrtPrice(margin, true)

    return liqSqrtPrice * this.riskRatio / ONE_1E8
  }

  calculateLiquidationSqrtPrice2(margin: bigint) {
    const liqSqrtPrice = this.calculateLiquidationSqrtPrice(margin, false)

    return liqSqrtPrice * ONE_1E8 / this.riskRatio
  }

  private calculateLiquidationSqrtPrice(margin: bigint, sign: boolean) {
    if (this.underlying === 0n || this.squart < 0n) {
      return 0n
    }

    // scaled by 1e16
    const numerator1 = this.squart * -1n

    // scaled by 1e32
    const numerator21 = this.squart * this.squart

    // scaled by 1e32
    const numerator22 = (this.stable + margin) * this.underlying

    if (numerator21 < numerator22) {
      return 0n
    }

    // scaled by 1e16
    const numerator2 = sqrt(numerator21 - numerator22) * (sign ? 1n : -1n)

    // scaled by 1e16
    const denominator = this.underlying

    return (numerator1 + numerator2) * Q96 / denominator
  }

  /**
   * Calculates minDeposit
   * @param sqrtPrice
   * @param scalers
   * @returns
   */
  calculateMinDeposit(sqrtPrice: bigint) {
    const minValue = this.calculateMinValue(sqrtPrice)
    const positionValue = this.calculateValue(sqrtPrice)
    const minMinDeposit = this.calculateSquartDebt(sqrtPrice) * DEBT_RISK_RATIO / ONE_1E8

    return positionValue - minValue + minMinDeposit
  }

  private calculateMinValue(sqrtPrice: bigint) {
    if (this.underlying === 0n) {
      return 0n
    }

    const lowerPrice = sqrtPrice * ONE_1E8 / this.riskRatio
    const upperPrice = sqrtPrice * this.riskRatio / ONE_1E8
    const minPrice = abs(this.squart * Q96 / this.underlying)

    const valueLower = this.calculateValue(lowerPrice)
    const valueUpper = this.calculateValue(upperPrice)
    const valueMin = this.calculateValue(minPrice)

    const min = valueLower < valueUpper ? valueLower : valueUpper

    if (this.squart < 0n && this.underlying > 0n) {
      return valueMin < min ? valueMin : min
    }

    return min
  }

  calculateSquartDebt(sqrtPrice: bigint) {
    const debtSquart = this.squart < 0n ? abs(this.squart) : 0n

    return debtSquart * 2n * sqrtPrice / Q96
  }

  /**
   * Calculates position value
   * @param position
   * @param sqrtPrice
   * @param scalers
   * @returns position value scaled by margin decimals
   */
  calculateValue(sqrtPrice: bigint) {
    const price = computePrice(sqrtPrice)

    return this.stable +
      (this.squart * 2n * sqrtPrice) / Q96 +
      (this.underlying * price / Q96)
  }
}

/**
 * Computes price
 * @param sqrtPrice
 * @param scalers
 * @returns price scaled by margin decimals
 */
export function computePrice(sqrtPrice: bigint) {
  return sqrtPrice * sqrtPrice / Q96
}
