import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [plugin(), tailwindcss()],
    build: {
        outDir: 'build',
    },
    envDir: './environments',
    server: {
        port: 3000,
        proxy: {
            '/api': {
                target: 'https://localhost:7141',
                changeOrigin: true,
                secure: false,
                // rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    }
})
