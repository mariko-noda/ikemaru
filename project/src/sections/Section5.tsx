export default function Section5() {
  return (
    <section className="w-full py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
          クチコミボックス®が選ばれる3つの理由
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg">
          単なるツールではなく、あなたのビジネスパートナー
        </p>

        <div className="mb-12">
          <img src="/せくしょん5.png" alt="選ばれる理由" className="w-full h-auto rounded-lg shadow-lg" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white rounded-lg p-8 shadow-md border-t-4 border-blue-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">理由1：あなたの"分身AI"</h3>
            <p className="text-gray-700 leading-relaxed">
              理念や言葉づかいを学習。テンプレートではなく、あなたらしい返信を自動生成します。
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-md border-t-4 border-orange-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">理由2：GoogleマップAPI承認</h3>
            <p className="text-gray-700 leading-relaxed">
              正式に承認された安全なシステム。情報漏洩の心配なく、安心して運用できます。
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-md border-t-4 border-pink-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">理由3：現場に寄り添う設計</h3>
            <p className="text-gray-700 leading-relaxed">
              医療・飲食の忙しい現場でも、迷わず使える操作性を追求しました。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
