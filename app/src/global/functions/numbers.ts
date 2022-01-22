export const range = (end: number, start = 0, step = 1) =>
  Array.from({ length: Math.ceil((end + 1 - start) / step) }, (_, i) => start + i * step)
