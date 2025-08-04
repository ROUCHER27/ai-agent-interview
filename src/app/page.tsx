'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-pink-400 to-blue-400 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-400 to-pink-400 rounded-full opacity-20 blur-3xl"></div>
      </div>

      {/* 主要内容 */}
      <div className="relative z-10 text-center animate-bounce-in">
        {/* 姓名标题 */}
        <div className="mb-16">
          <h1 className="handwritten-bold text-6xl md:text-8xl text-white mb-4 drop-shadow-lg">
            于毅荣
          </h1>
          <h2 className="handwritten-bold text-3xl md:text-4xl text-yellow-300 drop-shadow-lg">
            Roucher
          </h2>
        </div>

        {/* 按钮区域 */}
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          {/* 简历按钮 */}
          <Link href="/resume">
            <button className="btn-primary animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
              📄 个人简历
            </button>
          </Link>

          {/* AI产品体验按钮 */}
          <Link href="/ai-experience">
            <button className="btn-primary animate-slide-in-right" style={{ animationDelay: '0.6s' }}>
              🤖 AI产品体验
            </button>
          </Link>
        </div>

        {/* 装饰性文字 */}
        <div className="mt-16 text-white/60 text-lg animate-fade-in" style={{ animationDelay: '1s' }}>
          <p>AI Agent 实习笔试题可视化展示</p>
        </div>
      </div>

      {/* 浮动装饰元素 */}
      <div className="absolute top-20 left-20 text-6xl opacity-10 animate-bounce" style={{ animationDuration: '3s' }}>
        ✨
      </div>
      <div className="absolute top-40 right-20 text-4xl opacity-10 animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '1s' }}>
        🚀
      </div>
      <div className="absolute bottom-20 left-1/4 text-5xl opacity-10 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
        💡
      </div>
    </div>
  );
}
