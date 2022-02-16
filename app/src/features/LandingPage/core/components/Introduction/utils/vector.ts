export const r180 = Math.PI
export const r90 = Math.PI / 2
export const r15 = Math.PI / 12
export function polar2cart(x = 0, y = 0, r = 0, theta = 0) {
  const dx = r * Math.cos(theta)
  const dy = r * Math.sin(theta)
  return [x + dx, y + dy]
}
