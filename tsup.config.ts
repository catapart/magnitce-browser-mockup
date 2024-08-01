import { defineConfig } from 'tsup';
export default defineConfig({
    loader:{
        '.html': 'text',
        '.css': 'text'
    },
    noExternal: [/(.*)/],
    splitting: false
})