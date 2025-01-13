import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/game_trivial_vue.js/', // Reemplaza 'nombre-repo' con el nombre de tu repositorio
})


