import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})

//when you install tailwindcss then after go -> to vite.config.js
//then you have import tailwindcss then ->
//and you have to addon in definconfig function and in plugins add this 
//tailwindcss(call this function thats it)
//thats the process of how to manage tailwindcss.