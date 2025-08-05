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
              <p className="text-gray-700 leading-relaxed mb-4">
                首先用Inspiration Agent为我提供设计风格的灵感：提供九种风格的图片供我选择，并且可以多选（选择困难症友好）！接着它会自动把我的选择结果覆盖一层Query，递交给下一个Agent负责进一步设计。Designer agent （Vireo）会先产出三个具体到字体字号，边框选择，图片动效等等包括设计领域专有名词的设计方案，但最终呈现给用户选择的三个方案又是嵌套了一层Query后的回答，没有复杂的专有名词，只有对于设计风格，图片文字格式的形象描述。这样的提示词覆盖，极大降低了用户的使用门槛，学习成本。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                这里不得不提，Lovart创始人陈冕老师在一档播客节目里所说的“更感性”一点。面向设计垂直领域的Agent，用户大多是单性大于理性的，并不希望在和LLM对话的过程中使用“最大宽度 1200px，断点 768/480”，“无衬线粗体标题＋细线体说明，黑灰为主，最多一处高纯度强调色”这样及其理性的语句来量化自己的灵感和设计。而Lovart真的做到了，用一层层Query把理性的数字代码包装在丰富多彩的图片和文字中，用户仅需凭借“感性”的表达，就能体验到纯心流的设计过程，并情不自禁对ai的理解力和准确性感到惊叹。
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
          {/* ... 其余内容不变 ... */}
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