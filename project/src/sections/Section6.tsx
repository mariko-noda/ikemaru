export default function Section6() {
  return (
    <section className="w-full py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
            <img src="/セクション6.png" alt="料金・導入ステップ" className="w-full h-auto max-w-md rounded-lg shadow-lg" />
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              料金と<br />導入ステップ
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">料金プラン</h3>
                <p className="text-5xl font-bold text-green-600 mb-2">月額9,800円〜</p>
                <p className="text-gray-600 mb-6">初期費用なし・いつでも解約OK</p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-2"><span className="text-green-600">✓</span> 導入企業200社以上</li>
                  <li className="flex items-center gap-2"><span className="text-green-600">✓</span> 専任サポート付き</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">導入の流れ</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                    <p className="text-gray-700 font-semibold pt-1">資料請求・無料デモ申込み</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                    <p className="text-gray-700 font-semibold pt-1">理念ヒアリング（15分程度）</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                    <p className="text-gray-700 font-semibold pt-1">AI学習・設定</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                    <p className="text-gray-700 font-semibold pt-1">運用開始</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-6 font-semibold">最短3営業日でスタート可能</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
