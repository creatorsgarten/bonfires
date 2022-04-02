export function progressToGradient(seconds: number) {
  const color1 = '#f5576c'
  const color2 = 'rgb(155, 89, 182)'

  const percentage = ((seconds ?? 0) / (10 * 60)) * 100
  const p2 = percentage < 5 ? 0 : percentage + 4

  // prettier-ignore
  return `linear-gradient(90deg, ${color1} 1%, ${color2} ${percentage}%, transparent ${p2}%, transparent 100%)`
}
