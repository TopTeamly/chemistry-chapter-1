import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// إعدادات Vite لمشروع أطلس - الباب الأول (الكيمياء)
export default defineConfig({
  plugins: [react()],
  base: '/chemistry-chapter-1/',
})
