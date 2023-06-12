import { defineConfig } from 'vite'
import * as path from 'path'
import pkg from './package.json'

const deps = Object.keys({
  ...pkg.dependencies,
})

export default defineConfig({
  build: {
    emptyOutDir: false,
    sourcemap: true,
    minify: false,
    // NOTE(miguel): `lib.entry` is unused since we provide `rollupOptions.input`.
    lib: { entry: '', formats: ['es', 'cjs'] },
    rollupOptions: {
      input: {
        client: path.resolve(__dirname, 'client'),
      },
      output: {
        entryFileNames: '[name].[format].js',
        chunkFileNames: '[name].[format].js',
      },
      external: new RegExp(`^(${deps.join('|')})($|\/)`),
    },
  },
})
