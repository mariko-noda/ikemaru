export default function Section4() {
  return (
    <section className="w-full py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
          導入企業の変化
        </h2>

        <div className="mb-12">
          <img src="/セクション4.png" alt="Before/After・実績" className="w-full h-auto rounded-lg shadow-lg" />
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">実績データ</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">+211.1%</div>
              <p className="text-gray-700 text-lg">表示回数増加</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">GoogleMap API</div>
              <p className="text-gray-700 text-lg">承認済み</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-500 mb-2">急速導入</div>
              <p className="text-gray-700 text-lg">医療・飲食・美容</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
