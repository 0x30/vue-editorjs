import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Library build configuration
  if (mode === 'lib') {
    return {
      plugins: [
        vue(),
        vueJsx(),
        dts({
          insertTypesEntry: true,
          tsconfigPath: './tsconfig.app.json',
          outDir: 'dist',
        }),
      ],
      build: {
        lib: {
          entry: resolve(__dirname, 'lib/index.ts'),
          name: 'VueEditorJS',
          formats: ['es', 'umd'],
          fileName: format =>
            `vue-editorjs.${format === 'es' ? 'js' : 'umd.cjs'}`,
        },
        copyPublicDir: false,
        rollupOptions: {
          external: ['vue'],
          output: {
            exports: 'named',
            globals: {
              vue: 'Vue',
            },
          },
        },
      },
    }
  }

  // Demo/development build configuration
  return {
    plugins: [vue(), vueJsx()],
  }
})
