import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./"),
        },
    },
    build: {
        outDir: 'assets/built',
        emptyOutDir: true,
        rollupOptions: {
            input: 'src/digital-products-hero.tsx',
            output: {
                entryFileNames: '[name].js',
                chunkFileNames: '[name]-[hash].js',
                assetFileNames: '[name]-[hash].[ext]'
            }
        }
    },
    define: {
        'process.env': {}
    }
});
