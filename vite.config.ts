import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import Unocss from 'unocss/vite'
import {
  presetAttributify,
  presetUno,
  presetTypography
} from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    preact(),
    Unocss({
      rules: [["custom-rule", { color: "red" }]],
      shortcuts: {
        "custom-shortcut": "text-lg text-orange hover:text-teal",
        "app-button":
          "m0 p1 border-none bg-transparent border-rounded hover:cursor-pointer hover:bg-amber outline-0 focus:bg-indigo",
      },
      presets: [
        presetAttributify(), // required if using attributify mode
        presetUno(), // required
        presetTypography(),
      ]
    }),
  ]
})
