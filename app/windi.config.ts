import { defineConfig } from 'windicss/helpers'
import { range } from './src/global/functions/numbers'

export default defineConfig({
  darkMode: 'class',
  // https://windicss.org/posts/v30.html#attributify-mode
  attributify: {
    prefix: 'w:',
  },
  safelist: [range(20, 2).map((i) => `w-1/${i}`)],
  plugins: [],
})
