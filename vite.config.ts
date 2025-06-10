import { fileURLToPath, URL } from 'node:url'

import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig, loadEnv } from 'vite'
import { compression } from 'vite-plugin-compression2'
import vueDevTools from 'vite-plugin-vue-devtools'
import zipPack from 'vite-plugin-zip-pack'

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (element) => element.startsWith('iconify-icon'),
        },
      },
    }),
    vueDevTools(),
    tailwindcss(),
    Components({
      dirs: ['src/components'],
      resolvers: [ElementPlusResolver({ importStyle: 'sass' }), IconsResolver()],
    }),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        {
          '@vueuse/core': ['useToggle'],
        },
      ],
      resolvers: [
        ElementPlusResolver({ importStyle: 'sass' }),
        IconsResolver({
          componentPrefix: 'i',
          enabledCollections: ['ep', 'lucide'],
        }),
      ],
      eslintrc: {
        enabled: true,
      },
    }),
    Icons({ autoInstall: true, compiler: 'vue3' }),
    // 压缩算法，nginx也要对应的配置brotli
    compression({
      algorithm: 'brotliCompress',
    }),
    zipPack({
      outDir: resolve(__dirname, '.'),
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/styles/element/index.scss" as *;@use "@/assets/styles/element/dark.scss" as dark;`,
      },
    },
  },
  server: {
    port: 80,
    strictPort: true,
    open: true,
  },
})
