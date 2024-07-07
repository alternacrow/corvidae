import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    dictionary: 'src/dictionary/index.ts',
    seedrandom: 'src/seedrandom/index.ts',
  },
  format: ['esm', 'cjs'],
  dts: true,
  minify: true,
  clean: true,
});
