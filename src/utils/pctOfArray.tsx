/**
 * For a given array of numbers, retrieve the percentage share of
 * each value in the array from the total sum of the array
 * @param arr The array of values
 */
export function pctOfArray(arr: number[]) {
  const sum = arr.reduce((a, b) => a + b, 0);
  const pcts = arr.map((val) => (val / sum) * 100);
  return pcts;
}

/**
 * Change from V1 to V2
 * @param num1 The first number (starting point)
 * @param num2 The second number (ending point)
 * Δ𝑉 / |𝑉1| × 100 = Percentage Change
 */
export function pctChange(num1: number, num2: number): number {
  const diff = num2 - num1;
  const pct = (diff / num1) * 100;
  return pct;
}
