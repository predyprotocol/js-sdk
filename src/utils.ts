export const abs = (n: bigint) => (n < 0n ? -n : n)

export function sqrt(value: bigint) {
  if (value === 0n) {
    return 0n
  }

  if (value < 0n) {
    throw new Error('value must be positive')
  }

  if (value < 2n) {
    return value;
  }

  function newtonIteration(n: bigint, x0: bigint) {
    const x1 = ((n / x0) + x0) >> 1n;
    if (x0 === x1 || x0 === (x1 - 1n)) {
      return x0;
    }
    return newtonIteration(n, x1);
  }

  return newtonIteration(value, 1n);
}
