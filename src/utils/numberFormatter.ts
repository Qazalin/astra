/**
 * Formats a large number into a readable string
 * @param orgNum positive or negative number
 * @param decimals number of decimal places to show
 */
export function numberFormatter(orgNum: number, decimals = 2): string {
  const num = Math.abs(orgNum);
  if (num >= 1e9) return `${round(orgNum / 1e9, decimals)}B`;
  else if (num >= 1e6) return `${round(orgNum / 1e6, decimals)}M`;
  else if (num >= 1e3) return `${round(orgNum / 1e3, decimals)}K`;
  else return `${Math.round(orgNum)}`;
}

export function round(value: number, precision: number) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}
