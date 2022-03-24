import {defineConfig} from 'vite'

export default defineConfig({
    plugins: [],
    theme: {
        extend: {},
    },
    content: ["./index.html", './src/**/*.{svelte,js,ts}'],
});
