export default function Section4() {
  return (
    <section className="w-full py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
            <img src="/セクション4.png" alt="Before/After・実績" className="w-full h-auto max-w-md rounded-lg shadow-lg" />
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              導入企業の<br />変化
            </h2>
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">実績データ</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-orange-500 pl-6">
                    <p className="text-5xl font-bold text-orange-500 mb-2">+211.1%</p>
                    <p className="text-gray-700">表示回数増加</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-6">
                    <p className="text-2xl font-bold text-blue-600 mb-2">GoogleMapAPI</p>
                    <p className="text-gray-700">正式承認済み</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-6">
                    <p className="text-xl font-bold text-green-600 mb-2">急速拡大</p>
                    <p className="text-gray-700">医療・飲食・美容で採用</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
