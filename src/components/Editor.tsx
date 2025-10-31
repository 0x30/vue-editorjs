import { defineComponent, onMounted, onBeforeUnmount, ref } from 'vue'
import EditorJS from '@editorjs/editorjs'
import { zhCN } from '../locales'
import Header from '@editorjs/header'
import List from "@editorjs/list";
import NestedList from "@editorjs/nested-list";
import Paragraph from "@editorjs/paragraph";
import Image from "@editorjs/image";
import SimpleImage from "@editorjs/simple-image";
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
  },
  emits: ["ready", "change"],
  setup(props, { emit }) {
    const editorInstance = ref<EditorJS | null>(null);

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
                uploadByFile(file: File) {
                  // 这里应该实现文件上传逻辑
                  // 暂时返回一个示例 URL
                  return Promise.resolve({
                    success: 1,
                    file: {
                      url: URL.createObjectURL(file),
                    },
                  });
                },
                uploadByUrl(url: string) {
                  return Promise.resolve({
                    success: 1,
                    file: { url },
                  });
                },
              },
            },
          },

          // 简单图片
          simpleImage: SimpleImage,

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
                uploadByFile(file: File) {
                  return Promise.resolve({
                    success: 1,
                    file: {
                      url: URL.createObjectURL(file),
                      size: file.size,
                      name: file.name,
                      extension: file.name.split(".").pop(),
                    },
                  });
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
