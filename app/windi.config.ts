import { defineConfig } from 'windicss/helpers'
import { range } from './src/global/functions/numbers'

export default defineConfig({
  darkMode: 'class',
  // https://windicss.org/posts/v30.html#attributify-mode
  attributify: {
    prefix: 'w:',
  },
  safelist: [range(20, 2).map((i) => `w-1/${i}`)],
  plugins: [require('windicss/plugin/aspect-ratio')],
  theme: {
    extend: {
      animation: {
        'bounce-left': 'bounceLeft 1s infinite',
        'bounce-right': 'bounceRight 1s infinite',
      },
      zIndex: {
        hiddenBehind: -1,
        fixed: 5000,
      },
    },
  },
})
