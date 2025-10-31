import { defineComponent, ref } from "vue";
import Editor, { type UploadResponse, type OutputData } from "./components/Editor";
import "./style.css";

export default defineComponent({
  name: "App",
  setup() {
    const dataRef = ref<OutputData>();
    const readOnly = ref(false);
    
    // 示例：之前保存的数据（可以从 localStorage 或服务器获取）
    const initialData = ref<OutputData | undefined>(undefined);

    const handleReady = () => {
      console.log("Editor.js is ready!");
    };

    const handleChange = (data: OutputData) => {
      console.log("Content changed:", data);
      dataRef.value = data;
      // 可以在这里保存到 localStorage
      // localStorage.setItem('editorData', JSON.stringify(data))
    };
    
    // 切换只读模式
    const toggleReadOnly = () => {
      readOnly.value = !readOnly.value;
    };
    
    // 加载保存的数据
    const loadSavedData = () => {
      // 示例数据
      const savedData: OutputData = {
        time: Date.now(),
        blocks: [
          {
            type: "header",
            data: {
              text: "这是加载的标题",
              level: 2
            }
          },
          {
            type: "paragraph",
            data: {
              text: "这是加载的段落内容"
            }
          }
        ],
        version: "2.28.0"
      };
      initialData.value = savedData;
    };
    
    // 清空编辑器
    const clearEditor = () => {
      initialData.value = undefined;
      dataRef.value = undefined;
    };

    /**
     * 处理图片上传
     * @param file - 要上传的图片文件
     * @returns 上传结果，包含图片 URL
     */
    const handleImageUpload = async (file: File): Promise<UploadResponse> => {
      console.log("上传图片:", file.name, file.size);

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
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // 暂时使用本地预览
      const url = URL.createObjectURL(file);

      return {
        success: 1,
        file: {
          url,
          // 可以返回更多信息
          name: file.name,
          size: file.size,
        },
      };
    };

    /**
     * 处理文件上传
     * @param file - 要上传的文件
     * @returns 上传结果，包含文件 URL
     */
    const handleFileUpload = async (file: File): Promise<UploadResponse> => {
      console.log("上传文件:", file.name, file.size);

      // TODO: 这里实现你的文件上传逻辑
      // 类似图片上传的实现

      // 模拟上传延迟
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const url = URL.createObjectURL(file);

      return {
        success: 1,
        file: {
          url,
          name: file.name,
          size: file.size,
          extension: file.name.split(".").pop() || "",
          title: file.name, // 默认使用文件名作为标题，用户可以修改
        },
      };
    };

    return () => (
      <div id="app">
        <h1>Editor.js Framework</h1>
        
        <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
          <button onClick={toggleReadOnly}>
            {readOnly.value ? '切换到编辑模式' : '切换到只读模式'}
          </button>
          <button onClick={loadSavedData}>加载示例数据</button>
          <button onClick={clearEditor}>清空编辑器</button>
        </div>
        
        <Editor
          key={initialData.value ? 'with-data' : 'no-data'}
          holderId="editorjs"
          placeholder="点击这里开始编辑..."
          readOnly={readOnly.value}
          data={initialData.value}
          onReady={handleReady}
          onChange={handleChange}
          onUploadImage={handleImageUpload}
          onUploadFile={handleFileUpload}
        />
        
        <details style={{ marginTop: '20px' }}>
          <summary>查看编辑器数据（JSON）</summary>
          <pre style={{ background: '#f5f5f5', padding: '10px', borderRadius: '4px', overflow: 'auto' }}>
            {JSON.stringify(dataRef.value, null, 2)}
          </pre>
        </details>
      </div>
    );
  },
});
