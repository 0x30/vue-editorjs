import { defineComponent, onMounted, onBeforeUnmount, ref, type PropType } from 'vue'
import EditorJS from '@editorjs/editorjs'
import { zhCN } from '../locales'
import Header from '@editorjs/header'
import List from "@editorjs/list";
import NestedList from "@editorjs/nested-list";
import Paragraph from "@editorjs/paragraph";
import Image from "@editorjs/image";
import Code from "@editorjs/code";
import LinkTool from "@editorjs/link";
import Quote from "@editorjs/quote";
import Delimiter from "@editorjs/delimiter";
import Table from "@editorjs/table";
import Checklist from "@editorjs/checklist";
import Embed from "@editorjs/embed";
import Warning from "@editorjs/warning";
import Marker from "@editorjs/marker";
import InlineCode from "@editorjs/inline-code";
import Underline from "@editorjs/underline";
import RawTool from "@editorjs/raw";
import AttachesTool from "@editorjs/attaches";

// 上传响应接口
export interface UploadResponse {
  success: 1 | 0
  file: {
    url: string
    [key: string]: any
  }
}

// 上传函数类型
export type UploadFunction = (file: File) => Promise<UploadResponse>

export default defineComponent({
  name: "Editor",
  props: {
    holderId: {
      type: String,
      default: "editorjs",
    },
    placeholder: {
      type: String,
      default: "点击这里开始编辑...",
    },
    // 图片上传函数
    onUploadImage: {
      type: Function as PropType<UploadFunction>,
      required: false,
    },
    // 文件/附件上传函数
    onUploadFile: {
      type: Function as PropType<UploadFunction>,
      required: false,
    },
  },
  emits: ["ready", "change"],
  setup(props, { emit }) {
    const editorInstance = ref<EditorJS | null>(null);

    // 默认图片上传处理（使用本地预览）
    const defaultImageUploader = async (file: File): Promise<UploadResponse> => {
      // 创建本地预览 URL
      const url = URL.createObjectURL(file)
      return {
        success: 1,
        file: {
          url,
          // 可以添加更多信息
          name: file.name,
          size: file.size,
        }
      }
    }

    // 默认文件上传处理
    const defaultFileUploader = async (file: File): Promise<UploadResponse> => {
      const url = URL.createObjectURL(file)
      return {
        success: 1,
        file: {
          url,
          name: file.name,
          size: file.size,
          extension: file.name.split('.').pop() || '',
        }
      }
    }

    onMounted(() => {
      editorInstance.value = new EditorJS({
        holder: props.holderId,
        placeholder: props.placeholder,

        // 中文 i18n 配置
        i18n: zhCN,

        // 配置所有工具
        tools: {
          // 标题工具
          header: {
            class: Header,
            config: {
              placeholder: "输入标题",
              levels: [1, 2, 3, 4, 5, 6],
              defaultLevel: 2,
            },
          },

          // 段落工具 (默认)
          paragraph: {
            class: Paragraph,
            inlineToolbar: true,
            config: {
              placeholder: "输入文本",
            },
          },

          // 列表工具
          list: {
            class: List,
            inlineToolbar: true,
            config: {
              defaultStyle: "unordered",
            },
          },

          // 嵌套列表
          nestedList: {
            class: NestedList,
            inlineToolbar: true,
            config: {
              defaultStyle: "unordered",
            },
          },

          // 图片工具
          image: {
            class: Image,
            config: {
              uploader: {
                /**
                 * 通过文件上传图片
                 * @param file - 要上传的文件
                 */
                uploadByFile: async (file: File) => {
                  // 如果提供了自定义上传函数，使用它
                  if (props.onUploadImage) {
                    return await props.onUploadImage(file)
                  }
                  // 否则使用默认的本地预览
                  return await defaultImageUploader(file)
                },
                /**
                 * 通过 URL 上传图片
                 * @param url - 图片 URL
                 */
                uploadByUrl: async (url: string) => {
                  return {
                    success: 1,
                    file: { url }
                  }
                },
              },
            },
          },

          // 代码块
          code: {
            class: Code,
            config: {
              placeholder: "输入代码",
            },
          },

          // 链接工具
          linkTool: {
            class: LinkTool,
            config: {
              endpoint: "/api/fetchUrl", // 需要后端支持
            },
          },

          // 引用
          quote: {
            class: Quote,
            inlineToolbar: true,
            config: {
              quotePlaceholder: "输入引用",
              captionPlaceholder: "引用来源",
            },
          },

          // 分隔符
          delimiter: Delimiter,

          // 表格
          table: {
            class: Table,
            inlineToolbar: true,
            config: {
              rows: 2,
              cols: 3,
            },
          },

          // 清单
          checklist: {
            class: Checklist,
            inlineToolbar: true,
          },

          // 嵌入内容
          embed: {
            class: Embed,
            config: {
              services: {
                youtube: true,
                coub: true,
                codepen: true,
                twitter: true,
                instagram: true,
                vimeo: true,
                imgur: true,
                gfycat: true,
                "twitch-video": true,
                "twitch-channel": true,
                github: true,
              },
            },
          },

          // 警告
          warning: {
            class: Warning,
            inlineToolbar: true,
            config: {
              titlePlaceholder: "标题",
              messagePlaceholder: "消息",
            },
          },

          // 高亮标记 (内联工具)
          marker: {
            class: Marker,
          },

          // 内联代码
          inlineCode: {
            class: InlineCode,
          },

          // 下划线
          underline: Underline,

          // 原始 HTML
          raw: RawTool,

          // 附件
          attaches: {
            class: AttachesTool,
            config: {
              uploader: {
                /**
                 * 上传附件文件
                 * @param file - 要上传的文件
                 */
                uploadByFile: async (file: File) => {
                  // 如果提供了自定义上传函数，使用它
                  if (props.onUploadFile) {
                    return await props.onUploadFile(file)
                  }
                  // 否则使用默认的本地预览
                  return await defaultFileUploader(file)
                },
              },
            },
          },
        },

        onChange: async (api) => {
          const data = await api.saver.save();
          emit("change", data);
        },

        onReady: () => {
          emit("ready");
        },
      });
    });

    onBeforeUnmount(() => {
      if (editorInstance.value) {
        editorInstance.value.destroy();
        editorInstance.value = null;
      }
    });

    return () => <div id={props.holderId}></div>;
  },
});
