import { defineConfig } from 'vite'
import tailwindcss from "@tailwindcss/vite";
import react from '@vitejs/plugin-react'
import { plugin } from 'postcss';

export default defineConfig({
  plugins: [
    tailwindcss(

    ),
    react()],
})
