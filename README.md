# AI Agent 实习笔试题可视化网页

这是一个基于Next.js和React构建的AI Agent实习笔试题可视化网页，具有Anthropic官网风格的现代化设计。

## 功能特点

- 🎨 **现代化设计**: 采用Anthropic官网风格的渐变背景和玻璃拟态效果
- 📱 **响应式布局**: 完美适配桌面端和移动端
- ✨ **流畅动画**: 使用CSS动画实现优雅的页面过渡效果
- 📄 **双页面结构**: 简历介绍页面 + AI Agent笔试题回答页面
- 🎯 **交互体验**: 悬停效果和页面切换动画

## 项目结构

```
ai-agent-interview/
├── src/
│   └── app/
│       ├── page.tsx          # 主页面组件
│       ├── layout.tsx        # 布局组件
│       └── globals.css       # 全局样式
├── public/                   # 静态资源
└── package.json             # 项目配置
```

## 使用方法

### 1. 填写简历信息
在 `src/app/page.tsx` 文件的 `ResumeSection` 组件中，找到以下标记并填写您的个人信息：

```tsx
<span className="text-yellow-400">[请在此填写您的姓名]</span>
<span className="text-yellow-400">[请在此填写您的学历]</span>
<span className="text-yellow-400">[请在此填写您的专业]</span>
<span className="text-yellow-400">[请在此填写您的联系方式]</span>
<span className="text-yellow-400">[请在此填写您的技能特长]</span>
<span className="text-yellow-400">[请在此填写您的项目经验]</span>
<span className="text-yellow-400">[请在此填写您的实习目标]</span>
```

### 2. 自定义笔试题回答
在 `InterviewSection` 组件中，您可以修改以下内容：

- **AI产品选择**: 修改 `aiProducts` 数组中的产品信息
- **Aha Moment**: 更新 `ahaMoment` 变量的内容
- **优化建议**: 修改 `improvements` 数组中的问题和解决方案

### 3. 启动项目

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

访问 http://localhost:3000 查看网页效果。

## 设计特色

### 视觉风格
- 深色渐变背景 (slate-900 → purple-900 → slate-900)
- 玻璃拟态效果 (glass-effect)
- 渐变文字效果 (text-gradient)
- 悬停缩放动画 (hover-scale)

### 动画效果
- 淡入动画 (animate-fade-in)
- 左右滑入动画 (animate-slide-in-left/right)
- 页面切换过渡效果

### 响应式设计
- 移动端友好的导航栏
- 自适应网格布局
- 触摸友好的交互元素

## 技术栈

- **框架**: Next.js 15
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **动画**: CSS Animations
- **部署**: Vercel (推荐)

## 部署说明

1. 将代码推送到GitHub仓库
2. 在Vercel中导入项目
3. 自动部署完成

## 自定义指南

### 修改颜色主题
在 `globals.css` 中修改CSS变量：

```css
.gradient-bg {
  background: linear-gradient(135deg, #your-color-1 0%, #your-color-2 100%);
}
```

### 添加新的动画
在 `globals.css` 中添加新的关键帧动画：

```css
@keyframes yourAnimation {
  from { /* 初始状态 */ }
  to { /* 结束状态 */ }
}
```

### 修改布局
在 `page.tsx` 中调整组件结构和样式类名。

## 注意事项

- 确保所有依赖包已正确安装
- 如果遇到TypeScript错误，可能需要安装类型定义文件
- 建议使用现代浏览器以获得最佳体验

## 联系方式

如有问题或建议，请通过以下方式联系：
- 邮箱: [您的邮箱]
- GitHub: [您的GitHub]

---

**祝您面试顺利！** 🚀
