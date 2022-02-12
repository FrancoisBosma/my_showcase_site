import { convertHex2Dec } from '@GLOBAL/functions/numbers'

export const translateColorHex2Dec = (colorHexCode: string) => {
  colorHexCode = colorHexCode.trim()
  if (colorHexCode.startsWith('#')) colorHexCode = colorHexCode.slice(1)
  if (![3, 6, 8].includes(colorHexCode.length)) throw new Error('Unexpected argument')
  const bShortExpression = colorHexCode.length === 3
  const step = bShortExpression ? 1 : 2
  const values: number[] = []
  do {
    let subStr = colorHexCode.substring(0, step)
    if (bShortExpression) subStr += subStr
    values.push(convertHex2Dec(subStr))
    colorHexCode = colorHexCode.slice(step)
  } while (colorHexCode)
  const output = { r: 0, g: 0, b: 0, a: 1 }
  Object.keys(output).forEach((key, index) => (output[key] = values[index]))
  return output
}
