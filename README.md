# Editor.js Framework

基于 Editor.js 的 Vue 3 + TypeScript + TSX 编辑器框架

## 技术栈

- **Vue 3** - 渐进式 JavaScript 框架
- **TypeScript** - 类型安全的 JavaScript 超集
- **TSX** - TypeScript + JSX 语法支持
- **Editor.js** - 块状编辑器框架
- **Vite** - 下一代前端构建工具

## 项目结构

```
editor/
├── src/
│   ├── components/
│   │   ├── Editor.tsx        # Editor.js 组件封装
│   │   └── index.ts          # 组件导出
│   ├── App.tsx               # 主应用组件 (TSX)
│   ├── main.ts               # 应用入口
│   └── style.css             # 全局样式
├── package.json
├── tsconfig.json             # TypeScript 配置
├── tsconfig.app.json         # 应用 TypeScript 配置 (支持 JSX)
└── vite.config.ts            # Vite 配置 (包含 Vue JSX 插件)
```

## 已安装依赖

### 运行时依赖
- `vue` - Vue 3 核心库
- `@editorjs/editorjs` - Editor.js 核心库

### 开发依赖
- `@vitejs/plugin-vue` - Vue 3 Vite 插件
- `@vitejs/plugin-vue-jsx` - Vue 3 JSX/TSX 支持
- `typescript` - TypeScript 编译器
- `vite` - 构建工具

## 配置说明

### TypeScript 配置 (tsconfig.app.json)
```json
{
  "compilerOptions": {
    "jsx": "preserve",
    "jsxImportSource": "vue"
  },
  "include": ["src/**/*.ts", "src/**/*.tsx"]
}
```

### Vite 配置 (vite.config.ts)
```typescript
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [vue(), vueJsx()]
})
```

## 使用说明

### 启动开发服务器
```bash
pnpm dev
```

### 构建生产版本
```bash
pnpm build
```

### 预览生产构建
```bash
pnpm preview
```

## Editor 组件使用

```tsx
import { defineComponent } from 'vue'
import Editor from './components/Editor'

export default defineComponent({
  setup() {
    const handleReady = () => {
      console.log('Editor.js is ready!')
    }

    const handleChange = (data: any) => {
      console.log('Content changed:', data)
    }

    return () => (
      <Editor 
        holderId="editorjs"
        placeholder="开始编辑..."
        onReady={handleReady}
        onChange={handleChange}
      />
    )
  }
})
```

## 下一步

可以继续添加 Editor.js 工具插件:
- `@editorjs/header` - 标题工具
- `@editorjs/list` - 列表工具
- `@editorjs/paragraph` - 段落工具
- `@editorjs/image` - 图片工具
- `@editorjs/embed` - 嵌入工具
- 等等...

安装插件:
```bash
pnpm add @editorjs/header @editorjs/list @editorjs/paragraph
```
