const color = 'rgb(155, 89, 182)'

export function progressToGradient(seconds: number) {
  const start = ((seconds ?? 0) / (10 * 60)) * 100
  const end = start < 5 ? 0 : start + 5

  // prettier-ignore
  return `linear-gradient(90deg, ${color} ${start}%, transparent ${end}%, transparent 100%)`
}
