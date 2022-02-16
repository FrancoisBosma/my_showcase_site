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
      screens: {
        '3xs': { min: '400px' },
        '2xs': { min: '450px' },
        xs: { min: '520px' },
      },
      zIndex: {
        behind: -1,
        fixed: 5000,
      },
    },
  },
  shortcuts: {
    'hover-emphasis': 'hover:(text-[var(--emphasis)] border-[var(--emphasis)])',
    discreet: 'opacity-50',
  },
})
