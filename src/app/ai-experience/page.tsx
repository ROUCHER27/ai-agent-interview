'use client';

import Link from 'next/link';

export default function AIExperiencePage() {
  return (
    <div className="min-h-screen p-8">
      {/* 导航栏 */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="handwritten-bold text-xl text-white hover:text-yellow-300 transition-colors">
              &larr; 返回首页
            </Link>
            <div className="handwritten-bold text-xl text-white">
              AI产品体验
            </div>
          </div>
        </div>
      </nav>

      {/* 主要内容 */}
      <div className="pt-20 max-w-6xl mx-auto">
        {/* 标题 */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="handwritten-bold text-5xl md:text-6xl text-white mb-4 drop-shadow-lg">
            AI产品体验
          </h1>
          <p className="text-xl text-white/80">AI Product Experience Analysis</p>
        </div>

        {/* Lovart App */}
        <div className="card animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center mb-6">
            <span className="text-4xl mr-4">🎨</span>
            <h2 className="handwritten-bold text-3xl text-gray-800">Lovart App</h2>
          </div>

          {/* Aha Moment */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="text-yellow-500 mr-2">💡</span>
              What&apos;s the &apos;Aha&apos; Moment?
            </h3>
            <div className="bg-gradient-to-r from-yellow-50 to-pink-50 p-6 rounded-lg border-l-4 border-yellow-400">
              <h4 className="font-bold text-gray-800 mb-3">用感性包裹冰冷的技术派提示词：</h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                作为一个设计垂类Agent app，在对话框中我给出一个设计的模糊idea后，Agent能够自动捕捉到我想做的事情并且采用一个完备的Workflow来处理我的问题。这个Workflow并没有明显的可视化显示，而是潜移默化的在一次次与我对话当中展开，但是从与其对话的整个流程中，还是能清晰感受到Workflow编排的亮点和重要性。
              </p>
              <p className="text-gray-700 leading-relaxed">
                首先用Inspiration Agent为我提供设计风格的灵感：提供九种风格的图片供我选择，并且可以多选（选择困难症友好）！接着它会自动把我的选择结果覆盖一层Query，递交给下一个Agent负责进一步设计。Designer agent （Vireo）会先产出三个具体到字体字号，边框选择，图片动效等等包括设计领域专有名词的设计方案，但最终呈现给用户选择的三个方案又是嵌套了一层Query后的回答，没有复杂的专有名词，只有对于设计风格，图片文字格式的形象描述。这样的提示词覆盖，极大降低了用户的使用门槛，学习成本。
              </p>
            </div>
          </div>

          {/* Unsatisfied Point */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="text-red-500 mr-2">⚠️</span>
              Unsatisfied Point
            </h3>
            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border-l-4 border-red-400">
              <p className="text-gray-700 leading-relaxed">
                Canvas（画布）中的功能表达不清晰：Canvas的功能没有清晰明显的介绍，教学示范的动效，或者即时提问的功能。这会导致新用户无法快速上手，创作流程会遭遇卡顿（劝退）。
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                例如Comment这个功能，实际上非常新颖，但是一整套操作逻辑需要用户自己去挖掘，半蒙半猜才最终领悟到其真正作用。
              </p>
            </div>
          </div>

          {/* Improvements */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="text-green-500 mr-2">🚀</span>
              Improvements
            </h3>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border-l-4 border-green-400">
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>
                  在具体功能旁添加教学图标（尤其是新推出，或者主推的独家功能）：以便用户点击查阅指引或直接跳转到User guide里的这一部分，降低用户前期学习时间成本降低，提高学习意愿度。
                </li>
                <li>
                  创建官方Blog平台：营造社区氛围，为用户提供一个更便捷的分享，交流平台。可以邀请一些设计领域的专家或者具有网络影响力的人发布Blog，增加用户点击阅读概率和学习兴趣。与此同时，官方运营也会有一定公信力和权威性。
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* Dify App */}
        <div className="card animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center mb-6">
            <span className="text-4xl mr-4">⚙️</span>
            <h2 className="handwritten-bold text-3xl text-gray-800">Dify App</h2>
          </div>

          {/* Aha Moment */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="text-yellow-500 mr-2">💡</span>
              What&apos;s the &apos;Aha&apos; Moment?
            </h3>
            <div className="bg-gradient-to-r from-yellow-50 to-pink-50 p-6 rounded-lg border-l-4 border-yellow-400">
              <h4 className="font-bold text-gray-800 mb-3">零代码用户尝试成本低，体验好：</h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                它为非技术背景的用户清晰地勾勒出一条将复杂业务需求转化为自动化 AI 工作流的实现路径 。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                面对处理音频、文档、图片等多源信息的初始构想，我几乎无需编写代码，仅通过平台直观的拖拽与节点配置，便成功将这个想法构建为一个能够自动分类并处理信息的应用原型 。
              </p>
              <p className="text-gray-700 leading-relaxed">
                其中最关键的突破点是平台的&quot;知识库&quot;功能 。直接上传本地的私有数据，让 Agent 掌握特定领域的背景知识，从而能基于这些内容，给出高度精准和专业的回答 。透过这种方式，将原本门槛较高的 AI 技术RAG（检索增强生成）变得&quot;开箱即用&quot;，embeding，rerank等模型概念也会慢慢深入用户心中。使用Dify， 用户会获得意想不到的收获。配合其完善的官方文档和社区生态 ，极大地降低了新用户的学习与实践成本，让非技术人员也能聚焦于业务逻辑，快速构建出满足个性化需求的Agent与工作流 。
              </p>
            </div>
          </div>

          {/* Unsatisfied Point */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="text-red-500 mr-2">⚠️</span>
              Unsatisfied Point
            </h3>
            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border-l-4 border-red-400">
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>
                  <strong>START 节点的输入项无法调整顺序：</strong> 在配置 START 节点时，一旦创建了多个文件输入项，就无法通过拖拽来重新排序 。如果想调整它们的前后顺序，唯一的办法是删除后按期望顺序重新创建 。这在需要频繁调试和优化输入布局时，操作略显繁琐。
                </li>
                <li>
                  <strong>应用与文档的浏览器标签页图标（Favicon）相同：</strong> 在搭建工作流时，我习惯同时打开 Dify 应用和官方文档页面用于随时查阅 。但由于两者的标签页图标完全一样 ，当打开多个标签页后，我很难快速区分哪个是应用、哪个是文档，严重影响了切换效率 。
                </li>
              </ol>
            </div>
          </div>

          {/* Improvements */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="text-green-500 mr-2">🚀</span>
              Improvements
            </h3>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border-l-4 border-green-400">
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>
                  <strong>为 START 节点引入拖拽排序功能：</strong> 我会为 START 节点的多个输入项增加拖拽排序（Drag-and-Drop）功能 。这样不仅符合用户在多数现代应用中的操作直觉，能减少不必要的操作步骤（删除再重建），还让用户更专注于工作流的逻辑构建而非界面配置，从而优化整体的构建体验。
                </li>
                <li>
                  <strong>为官方文档设计独立的标签页图标：</strong> 为文档站点设计一个与主图标风格相符且具有辨识度的 Favicon，使其与主应用图标区分开来 。这样做的目的在于降低用户的认知负荷和视觉检索成本。一个清晰的视觉标识能帮助用户在多任务场景下快速定位，提升导航效率和准确性 。这对于新手用户尤为重要，因为他们更依赖文档，频繁切换是刚需。优化这个细节能直接提升这部分核心用户的学习和使用体验。
                </li>
              </ol>
            </div>
          </div>
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