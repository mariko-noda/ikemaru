export default function Section5() {
  return (
    <section className="w-full py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
            <img src="/せくしょん5.png" alt="選ばれる理由" className="w-full h-auto max-w-md rounded-lg shadow-lg" />
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              クチコミボックス®が<br />選ばれる3つの理由
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">理由1：理念反映の分身AI</h3>
                <p className="text-gray-600 leading-relaxed">あなたの理念や言葉づかいを学習。テンプレートではなく、本当のあなたらしい返信を自動生成します。</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">理由2：GoogleマップAPI承認</h3>
                <p className="text-gray-600 leading-relaxed">正式に承認された安全なシステム。情報漏洩の心配なく、安心して運用できます。</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">理由3：現場に寄り添う設計</h3>
                <p className="text-gray-600 leading-relaxed">医療・飲食の忙しい現場でも迷わず使える。1日1回クリックするだけ。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
