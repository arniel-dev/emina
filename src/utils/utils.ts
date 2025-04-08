export function numberWithCommas(numbers: number | null) {
  if (numbers === null) return;
  return numbers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
