import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/game_trivial_vue.js/',  // 👈 este debe coincidir exactamente con el nombre del repositorio
  plugins: [vue()],
})
