import { defineComponent, onMounted, onBeforeUnmount, ref } from 'vue'
import EditorJS from '@editorjs/editorjs'

export default defineComponent({
  name: 'Editor',
  props: {
    holderId: {
      type: String,
      default: 'editorjs'
    },
    placeholder: {
      type: String,
      default: '点击这里开始编辑...'
    }
  },
  emits: ['ready', 'change'],
  setup(props, { emit }) {
    const editorInstance = ref<EditorJS | null>(null)

    onMounted(() => {
      editorInstance.value = new EditorJS({
        holder: props.holderId,
        placeholder: props.placeholder,
        onChange: async (api) => {
          const data = await api.saver.save()
          emit('change', data)
        },
        onReady: () => {
          emit('ready')
        }
      })
    })

    onBeforeUnmount(() => {
      if (editorInstance.value) {
        editorInstance.value.destroy()
        editorInstance.value = null
      }
    })

    return () => (
      <div id={props.holderId}></div>
    )
  }
})
