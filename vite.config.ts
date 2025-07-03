import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import injectCss from "vite-plugin-css-injected-by-js";

import UnocssPlugin from '@unocss/vite';

export default defineConfig({
  plugins: [
    solidPlugin(),
    injectCss(),
    UnocssPlugin({
      // your config or in uno.config.ts
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
