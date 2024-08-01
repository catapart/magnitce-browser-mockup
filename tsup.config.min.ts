import { defineConfig } from 'tsup';
export default defineConfig({
    outExtension()
    {
        return {
            js: `.min.js`,
        }
    },
    loader:{
        '.html': 'text',
        '.css': 'text'
    },
    noExternal: [/(.*)/],
    splitting: false
})