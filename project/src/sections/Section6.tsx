export default function Section6() {
  return (
    <section className="w-full py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
          料金と導入ステップ
        </h2>

        <div className="mb-12">
          <img src="/セクション6.png" alt="料金・導入ステップ" className="w-full h-auto rounded-lg shadow-lg" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">料金プラン</h3>
            <div className="text-5xl font-bold text-green-600 mb-2">月額9,800円〜</div>
            <p className="text-gray-700 mb-6">初期費用なし</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center"><span className="text-green-600 mr-3">✓</span> いつでも解約OK</li>
              <li className="flex items-center"><span className="text-green-600 mr-3">✓</span> 導入企業200社以上</li>
              <li className="flex items-center"><span className="text-green-600 mr-3">✓</span> 専任サポート付き</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">導入の流れ</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold">1</div>
                </div>
                <div className="ml-4">
                  <p className="text-gray-900 font-semibold">資料請求・無料デモ申込み</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold">2</div>
                </div>
                <div className="ml-4">
                  <p className="text-gray-900 font-semibold">理念ヒアリング（15分程度）</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold">3</div>
                </div>
                <div className="ml-4">
                  <p className="text-gray-900 font-semibold">AI学習・設定</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold">4</div>
                </div>
                <div className="ml-4">
                  <p className="text-gray-900 font-semibold">運用開始</p>
                </div>
              </div>
            </div>
            <p className="mt-8 text-gray-700 font-semibold text-center">最短3営業日でスタート可能</p>
          </div>
        </div>
      </div>
    </section>
  );
}
