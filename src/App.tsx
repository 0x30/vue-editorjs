import { defineComponent } from 'vue'
import Editor from './components/Editor'
import './style.css'

export default defineComponent({
  name: 'App',
  setup() {
    const handleReady = () => {
      console.log('Editor.js is ready!')
    }

    const handleChange = (data: any) => {
      console.log('Content changed:', data)
    }

    return () => (
      <div id="app">
        <h1>Editor.js Framework</h1>
        <Editor 
          holderId="editorjs"
          placeholder="点击这里开始编辑..."
          onReady={handleReady}
          onChange={handleChange}
        />
      </div>
    )
  }
})
