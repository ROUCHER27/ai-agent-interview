#!/bin/bash

# AI Agent 实习笔试题 - 自动化部署脚本

echo "🚀 开始部署 AI Agent 实习笔试题..."

# 检查是否在正确的目录
if [ ! -f "package.json" ]; then
    echo "❌ 错误：请在项目根目录运行此脚本"
    exit 1
fi

# 检查git是否初始化
if [ ! -d ".git" ]; then
    echo "📁 初始化Git仓库..."
    git init
    git add .
    git commit -m "Initial commit: AI Agent interview project"
    echo "✅ Git仓库初始化完成"
else
    echo "📁 Git仓库已存在"
fi

# 检查是否有远程仓库
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "🌐 请先添加GitHub远程仓库："
    echo "   git remote add origin https://github.com/你的用户名/ai-agent-interview.git"
    echo "   然后重新运行此脚本"
    exit 1
fi

# 构建项目
echo "🔨 构建项目..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ 项目构建成功"
else
    echo "❌ 项目构建失败"
    exit 1
fi

# 提交更改
echo "📝 提交更改..."
git add .
git commit -m "Update: $(date)"

# 推送到GitHub
echo "🚀 推送到GitHub..."
git push origin main

if [ $? -eq 0 ]; then
    echo "✅ 代码推送成功"
    echo ""
    echo "🎉 部署完成！"
    echo ""
    echo "📋 下一步："
    echo "1. 访问 https://vercel.com"
    echo "2. 使用GitHub账号登录"
    echo "3. 点击 'New Project'"
    echo "4. 选择你的 ai-agent-interview 仓库"
    echo "5. 点击 'Deploy'"
    echo ""
    echo "🔗 部署完成后，你会得到一个永久的在线链接"
    echo "📱 每次推送代码到GitHub，Vercel会自动重新部署"
else
    echo "❌ 代码推送失败"
    exit 1
fi 