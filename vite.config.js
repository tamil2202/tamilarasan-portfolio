import { defaultConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    base: "/tamilarasan-portfolio",
    plugins: [react()],
})