import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import path from 'path'

// Put your repo name
// between slahes like '/repo/'
const gitRepositoryName = '/react-mobx-interno/'

// https://vitejs.dev/config/
export default defineConfig({
  base: gitRepositoryName,
  define: {
    GIT_REP: JSON.stringify(gitRepositoryName)
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
    }
  },
  plugins: [svgr(), react()]
})