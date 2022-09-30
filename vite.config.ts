import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import Unocss from 'unocss/vite'
import {
  presetAttributify,
  presetUno,
} from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    preact(),
    Unocss({
      rules: [],
      shortcuts: {
        "app-button":
          "m0 p1 border-0 bg-transparent border-rounded hover:cursor-pointer hover:bg-amber outline-0 focus:bg-indigo",
      },
      presets: [
        presetAttributify(), // required if using attributify mode
        presetUno(), // required
      ]
    }),
  ]
})
