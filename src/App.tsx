import { defineComponent } from 'vue'
import Editor, { type UploadResponse } from './components/Editor'
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

    /**
     * 处理图片上传
     * @param file - 要上传的图片文件
     * @returns 上传结果，包含图片 URL
     */
    const handleImageUpload = async (file: File): Promise<UploadResponse> => {
      console.log('上传图片:', file.name, file.size)
      
      // TODO: 这里实现你的图片上传逻辑
      // 例如：上传到服务器、OSS 等
      // const formData = new FormData()
      // formData.append('file', file)
      // const response = await fetch('/api/upload/image', {
      //   method: 'POST',
      //   body: formData
      // })
      // const result = await response.json()
      
      // 模拟上传延迟（实际使用时删除）
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // 暂时使用本地预览
      const url = URL.createObjectURL(file)
      
      return {
        success: 1,
        file: {
          url,
          // 可以返回更多信息
          name: file.name,
          size: file.size,
        }
      }
    }

    /**
     * 处理文件上传
     * @param file - 要上传的文件
     * @returns 上传结果，包含文件 URL
     */
    const handleFileUpload = async (file: File): Promise<UploadResponse> => {
      console.log('上传文件:', file.name, file.size)
      
      // TODO: 这里实现你的文件上传逻辑
      // 类似图片上传的实现
      
      // 模拟上传延迟
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const url = URL.createObjectURL(file)
      
      return {
        success: 1,
        file: {
          url,
          name: file.name,
          size: file.size,
          extension: file.name.split('.').pop() || '',
          title: file.name, // 默认使用文件名作为标题，用户可以修改
        }
      }
    }

    return () => (
      <div id="app">
        <h1>Editor.js Framework</h1>
        <Editor 
          holderId="editorjs"
          placeholder="点击这里开始编辑..."
          onReady={handleReady}
          onChange={handleChange}
          onUploadImage={handleImageUpload}
          onUploadFile={handleFileUpload}
        />
      </div>
    )
  }
})
