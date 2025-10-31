// Editor.js 插件类型声明
declare module '@editorjs/header' {
  import { BlockTool, BlockToolConstructorOptions } from '@editorjs/editorjs'
  export default class Header implements BlockTool {
    constructor(options: BlockToolConstructorOptions)
    render(): HTMLElement
    save(blockContent: HTMLElement): any
    static get toolbox(): { icon: string; title?: string }
  }
}

declare module '@editorjs/paragraph' {
  import { BlockTool, BlockToolConstructorOptions } from '@editorjs/editorjs'
  export default class Paragraph implements BlockTool {
    constructor(options: BlockToolConstructorOptions)
    render(): HTMLElement
    save(blockContent: HTMLElement): any
    static get toolbox(): { icon: string; title?: string }
  }
}

declare module '@editorjs/list' {
  import { BlockTool, BlockToolConstructorOptions } from '@editorjs/editorjs'
  export default class List implements BlockTool {
    constructor(options: BlockToolConstructorOptions)
    render(): HTMLElement
    save(blockContent: HTMLElement): any
    static get toolbox(): { icon: string; title?: string }
  }
}

declare module '@editorjs/code' {
  import { BlockTool, BlockToolConstructorOptions } from '@editorjs/editorjs'
  export default class Code implements BlockTool {
    constructor(options: BlockToolConstructorOptions)
    render(): HTMLElement
    save(blockContent: HTMLElement): any
    static get toolbox(): { icon: string; title?: string }
  }
}

declare module '@editorjs/quote' {
  import { BlockTool, BlockToolConstructorOptions } from '@editorjs/editorjs'
  export default class Quote implements BlockTool {
    constructor(options: BlockToolConstructorOptions)
    render(): HTMLElement
    save(blockContent: HTMLElement): any
    static get toolbox(): { icon: string; title?: string }
  }
}

declare module '@editorjs/delimiter' {
  import { BlockTool, BlockToolConstructorOptions } from '@editorjs/editorjs'
  export default class Delimiter implements BlockTool {
    constructor(options: BlockToolConstructorOptions)
    render(): HTMLElement
    save(blockContent: HTMLElement): any
    static get toolbox(): { icon: string; title?: string }
  }
}

declare module '@editorjs/warning' {
  import { BlockTool, BlockToolConstructorOptions } from '@editorjs/editorjs'
  export default class Warning implements BlockTool {
    constructor(options: BlockToolConstructorOptions)
    render(): HTMLElement
    save(blockContent: HTMLElement): any
    static get toolbox(): { icon: string; title?: string }
  }
}

declare module '@editorjs/table' {
  import { BlockTool, BlockToolConstructorOptions } from '@editorjs/editorjs'
  export default class Table implements BlockTool {
    constructor(options: BlockToolConstructorOptions)
    render(): HTMLElement
    save(blockContent: HTMLElement): any
    static get toolbox(): { icon: string; title?: string }
  }
}

declare module '@editorjs/image' {
  import { BlockTool, BlockToolConstructorOptions } from '@editorjs/editorjs'
  export default class Image implements BlockTool {
    constructor(options: BlockToolConstructorOptions)
    render(): HTMLElement
    save(blockContent: HTMLElement): any
    static get toolbox(): { icon: string; title?: string }
  }
}

declare module '@editorjs/inline-code' {
  import { InlineTool } from '@editorjs/editorjs'
  export default class InlineCode implements InlineTool {
    render(): HTMLElement
    surround(range: Range): void
    checkState(selection: Selection): boolean
    static get isInline(): boolean
    static get sanitize(): any
  }
}

declare module '@editorjs/underline' {
  import { InlineTool } from '@editorjs/editorjs'
  export default class Underline implements InlineTool {
    render(): HTMLElement
    surround(range: Range): void
    checkState(selection: Selection): boolean
    static get isInline(): boolean
    static get sanitize(): any
  }
}

declare module '@editorjs/simple-image' {
  import { BlockTool, BlockToolConstructorOptions } from '@editorjs/editorjs'
  export default class SimpleImage implements BlockTool {
    constructor(options: BlockToolConstructorOptions)
    render(): HTMLElement
    save(blockContent: HTMLElement): any
    static get toolbox(): { icon: string; title?: string }
  }
}

declare module '@editorjs/link' {
  import { InlineTool } from '@editorjs/editorjs'
  export default class LinkTool implements InlineTool {
    render(): HTMLElement
    surround(range: Range): void
    checkState(selection: Selection): boolean
    static get isInline(): boolean
    static get sanitize(): any
  }
}

declare module '@editorjs/checklist' {
  import { BlockTool, BlockToolConstructorOptions } from '@editorjs/editorjs'
  export default class Checklist implements BlockTool {
    constructor(options: BlockToolConstructorOptions)
    render(): HTMLElement
    save(blockContent: HTMLElement): any
    static get toolbox(): { icon: string; title?: string }
  }
}

declare module '@editorjs/embed' {
  import { BlockTool, BlockToolConstructorOptions } from '@editorjs/editorjs'
  export default class Embed implements BlockTool {
    constructor(options: BlockToolConstructorOptions)
    render(): HTMLElement
    save(blockContent: HTMLElement): any
    static get toolbox(): { icon: string; title?: string }
  }
}

declare module '@editorjs/marker' {
  import { InlineTool } from '@editorjs/editorjs'
  export default class Marker implements InlineTool {
    render(): HTMLElement
    surround(range: Range): void
    checkState(selection: Selection): boolean
    static get isInline(): boolean
    static get sanitize(): any
  }
}

declare module '@editorjs/raw' {
  import { BlockTool, BlockToolConstructorOptions } from '@editorjs/editorjs'
  export default class RawTool implements BlockTool {
    constructor(options: BlockToolConstructorOptions)
    render(): HTMLElement
    save(blockContent: HTMLElement): any
    static get toolbox(): { icon: string; title?: string }
  }
}

declare module '@editorjs/attaches' {
  import { BlockTool, BlockToolConstructorOptions } from '@editorjs/editorjs'
  export default class AttachesTool implements BlockTool {
    constructor(options: BlockToolConstructorOptions)
    render(): HTMLElement
    save(blockContent: HTMLElement): any
    static get toolbox(): { icon: string; title?: string }
  }
}

declare module '@editorjs/nested-list' {
  import { BlockTool, BlockToolConstructorOptions } from '@editorjs/editorjs'
  export default class NestedList implements BlockTool {
    constructor(options: BlockToolConstructorOptions)
    render(): HTMLElement
    save(blockContent: HTMLElement): any
    static get toolbox(): { icon: string; title?: string }
  }
}
