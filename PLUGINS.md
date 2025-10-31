# Editor.js 插件列表

本项目已集成以下 Editor.js 插件：

## 📝 块级工具 (Block Tools)

### 1. **Header** - 标题
- 支持 H1-H6 六级标题
- 快捷键：`Ctrl/Cmd + Shift + H`

### 2. **Paragraph** - 段落
- 默认文本块
- 支持内联工具栏

### 3. **List** - 列表
- 有序列表
- 无序列表
- 快捷键：`Ctrl/Cmd + Shift + L`

### 4. **Nested List** - 嵌套列表
- 支持多层级嵌套
- 拖拽排序

### 5. **Image** - 图片
- 支持文件上传
- 支持 URL 导入
- 支持添加标题和边框

### 6. **Simple Image** - 简单图片
- 仅支持 URL 导入
- 无额外配置

### 7. **Code** - 代码块
- 支持语法高亮
- 适合展示代码片段

### 8. **Quote** - 引用
- 支持引用文本
- 可添加引用来源

### 9. **Delimiter** - 分隔符
- 视觉分隔线
- 用于分隔内容

### 10. **Table** - 表格
- 支持行列编辑
- 支持内联工具栏
- 默认 2 行 3 列

### 11. **Checklist** - 清单
- 可勾选的任务列表
- 适合待办事项

### 12. **Embed** - 嵌入内容
支持的平台：
- YouTube
- Vimeo
- Twitter
- Instagram
- CodePen
- GitHub
- Twitch
- 等等...

### 13. **Warning** - 警告框
- 显示警告信息
- 包含标题和消息内容

### 14. **Raw HTML** - 原始 HTML
- 直接插入 HTML 代码
- 用于自定义内容

### 15. **Attaches** - 附件
- 上传文件附件
- 显示文件信息

## ✏️ 内联工具 (Inline Tools)

### 1. **Marker** - 高亮标记
- 高亮文本
- 快捷键：`Ctrl/Cmd + Shift + M`

### 2. **Inline Code** - 内联代码
- 行内代码样式
- 快捷键：`Ctrl/Cmd + Shift + C`

### 3. **Underline** - 下划线
- 文本下划线
- 快捷键：`Ctrl/Cmd + U`

### 4. **Link Tool** - 链接
- 添加超链接
- 快捷键：`Ctrl/Cmd + K`

## 🎯 使用方式

在编辑器中：
1. 点击左侧的 `+` 按钮打开工具菜单
2. 选择需要的工具类型
3. 或者使用 `/` 命令快速搜索工具

## 📌 注意事项

- **图片上传**：当前使用 `URL.createObjectURL` 创建本地预览，实际项目需要实现服务器上传
- **链接工具**：需要后端 API 支持抓取链接元数据
- **附件上传**：同样需要实现服务器上传逻辑

## 🔧 自定义配置

所有工具的配置都在 `src/components/Editor.tsx` 中，可以根据需求调整：
- 修改占位符文本
- 调整默认样式
- 启用/禁用特定功能
