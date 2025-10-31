import type { OutputData } from '@editorjs/editorjs'

// 导出 EditorJS 的输出数据类型
export type { OutputData }

// EditorJS 块数据类型
export interface EditorBlock {
  id?: string
  type: string
  data: any
}

// EditorJS 完整数据结构
export interface EditorData {
  time?: number
  blocks: EditorBlock[]
  version?: string
}
