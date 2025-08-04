'use client';

import Link from 'next/link';

export default function ResumePage() {
  return (
    <div className="min-h-screen p-8">
      {/* 导航栏 */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="handwritten-bold text-xl text-white hover:text-yellow-300 transition-colors">
              ← 返回首页
            </Link>
            <div className="handwritten-bold text-xl text-white">
              于毅荣 / Roucher
            </div>
          </div>
        </div>
      </nav>

      {/* 主要内容 */}
      <div className="pt-20 max-w-6xl mx-auto">
        {/* 标题 */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="handwritten-bold text-5xl md:text-6xl text-white mb-4 drop-shadow-lg">
            个人简历
          </h1>
          <p className="text-xl text-white/80">Personal Resume</p>
        </div>

        {/* PDF嵌入 */}
        <div className="card animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="aspect-[3/4] w-full max-w-4xl mx-auto">
            <iframe
              src="/于毅荣CV.pdf"
              className="w-full h-full rounded-lg border-2 border-gray-200"
              title="于毅荣简历"
            />
          </div>
        </div>

        {/* 备用下载链接 */}
        <div className="text-center mt-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <a
            href="/于毅荣CV.pdf"
            download
            className="btn-primary inline-block"
          >
            📥 下载简历 PDF
          </a>
        </div>

        {/* 返回按钮 */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <Link href="/">
            <button className="px-8 py-3 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-all">
              🏠 返回首页
            </button>
          </Link>
        </div>
      </div>

      {/* 背景装饰 */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 right-20 w-60 h-60 bg-gradient-to-br from-pink-400 to-blue-400 rounded-full opacity-10 blur-2xl"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-gradient-to-tr from-blue-400 to-pink-400 rounded-full opacity-10 blur-2xl"></div>
      </div>
    </div>
  );
} 