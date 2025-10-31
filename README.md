# @0x30/vue-editorjs

基于 Vue 3 + TypeScript 的 Editor.js 组件封装，内置 18 个常用插件和完整的中文国际化支持。

## 特性

- ✅ Vue 3 + TypeScript + TSX 支持
- ✅ 18 个 Editor.js 官方插件预装
- ✅ 完整的中文和英文国际化
- ✅ 类型安全的上传回调
- ✅ 只读模式支持
- ✅ 初始数据加载
- ✅ 完整的 TypeScript 类型定义

## 已集成插件

- Header - 标题
- NestedList - 嵌套列表
- Paragraph - 段落
- Image - 图片
- Code - 代码块
- Link - 链接
- Quote - 引用
- Delimiter - 分隔符
- Table - 表格
- Checklist - 清单
- Embed - 嵌入
- Warning - 警告
- Marker - 高亮
- InlineCode - 行内代码
- Underline - 下划线
- Raw - 原始 HTML
- Attaches - 附件

## 安装

通过 Git 仓库安装：

```bash
npm install git+https://github.com/0x30/vue-editorjs.git

# 或使用 pnpm
pnpm add git+https://github.com/0x30/vue-editorjs.git

# 或使用指定分支/标签/commit
npm install git+https://github.com/0x30/vue-editorjs.git#main
npm install git+https://github.com/0x30/vue-editorjs.git#v1.0.0
npm install git+https://github.com/0x30/vue-editorjs.git#abc1234
```

## 使用方法

### 基础用法

```vue
<template>
  <div>
    <Editor
      holder-id="editorjs"
      placeholder="开始编写你的内容..."
      :on-change="handleChange"
    />
  </div>
</template>

<script setup lang="ts">
import { Editor, type OutputData } from '@0x30/vue-editorjs'

const handleChange = (data: OutputData) => {
  console.log('编辑器内容改变:', data)
}
</script>
```

### 带上传功能

```vue
<template>
  <Editor
    holder-id="editorjs"
    :on-upload-image="handleImageUpload"
    :on-upload-file="handleFileUpload"
    :on-change="handleChange"
  />
</template>

<script setup lang="ts">
import { Editor, type UploadResponse } from '@0x30/vue-editorjs'

const handleImageUpload = async (file: File): Promise<UploadResponse> => {
  // 实现你的图片上传逻辑
  const formData = new FormData()
  formData.append('image', file)
  
  const response = await fetch('/api/upload/image', {
    method: 'POST',
    body: formData
  })
  
  const data = await response.json()
  
  return {
    success: 1,
    file: {
      url: data.url,
      name: file.name,
      size: file.size
    }
  }
}

const handleFileUpload = async (file: File): Promise<UploadResponse> => {
  // 实现你的文件上传逻辑
  const formData = new FormData()
  formData.append('file', file)
  
  const response = await fetch('/api/upload/file', {
    method: 'POST',
    body: formData
  })
  
  const data = await response.json()
  
  return {
    success: 1,
    file: {
      url: data.url,
      title: file.name,
      size: file.size,
      extension: file.name.split('.').pop()
    }
  }
}
</script>
```

### 只读模式

```vue
<template>
  <div>
    <button @click="toggleReadOnly">
      {{ readOnly ? '编辑' : '只读' }}
    </button>
    <Editor
      holder-id="editorjs"
      :read-only="readOnly"
      :data="editorData"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Editor, type OutputData } from '@0x30/vue-editorjs'

const readOnly = ref(false)
const editorData = ref<OutputData>({
  time: Date.now(),
  blocks: [
    {
      type: 'header',
      data: {
        text: '只读模式示例',
        level: 2
      }
    }
  ]
})

const toggleReadOnly = () => {
  readOnly.value = !readOnly.value
}
</script>
```

### 加载已有数据

```vue
<template>
  <Editor
    holder-id="editorjs"
    :data="savedData"
    :on-ready="handleReady"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Editor, type OutputData } from '@0x30/vue-editorjs'

const savedData = ref<OutputData>({
  time: 1234567890,
  blocks: [
    {
      type: 'header',
      data: {
        text: '欢迎回来',
        level: 1
      }
    },
    {
      type: 'paragraph',
      data: {
        text: '这是之前保存的内容'
      }
    }
  ]
})

const handleReady = () => {
  console.log('编辑器已准备就绪')
}
</script>
```

## API

### Props

| 属性            | 类型                            | 默认值       | 描述           |
| --------------- | ------------------------------- | ------------ | -------------- |
| `placeholder`   | `string`                        | `'输入内容'` | 占位符文本     |
| `readOnly`      | `boolean`                       | `false`      | 是否只读模式   |
| `data`          | `OutputData \| undefined`       | `undefined`  | 初始数据       |
| `onUploadImage` | `UploadFunction \| undefined`   | `undefined`  | 图片上传回调   |
| `onUploadFile`  | `UploadFunction \| undefined`   | `undefined`  | 文件上传回调   |
| `onChange`      | `OnChangeCallback \| undefined` | `undefined`  | 内容变化回调   |
| `onReady`       | `OnReadyCallback \| undefined`  | `undefined`  | 编辑器就绪回调 |

### 类型定义

#### UploadResponse

```typescript
interface UploadResponse {
  success: 1 | 0;
  file: {
    url: string;
    // 图片相关字段
    name?: string;
    size?: number;
    // 附件相关字段
    title?: string;
    extension?: string;
    // 其他自定义字段
    [key: string]: any;
  };
}
```

#### UploadFunction

```typescript
type UploadFunction = (file: File) => Promise<UploadResponse>;
```

#### OnChangeCallback

```typescript
type OnChangeCallback = (data: OutputData) => void;
```

#### OnReadyCallback

```typescript
type OnReadyCallback = () => void;
```

#### OutputData

```typescript
interface OutputData {
  time: number;
  blocks: Array<{
    type: string;
    data: any;
  }>;
  version?: string;
}
```

## 国际化

组件默认使用中文界面。如需使用英文或自定义语言包：

```typescript
import { zhCN, enUS } from '@0x30/vue-editorjs'

// 查看语言包结构
console.log(zhCN)
console.log(enUS)
```

## 开发

```bash
# 安装依赖
pnpm install

# 开发模式（运行示例）
pnpm dev

# 构建库文件
pnpm build

# 构建示例
pnpm build:demo
```

## License

MIT

## 作者

0x30

