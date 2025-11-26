export default function Section3() {
  return (
    <section className="w-full py-20 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
          クチコミボックス®なら、3ステップで完了
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg">
          シンプルだから、毎日続けられる
        </p>

        <div className="mb-12">
          <img src="/セクション3.png" alt="3ステップ説明" className="w-full h-auto rounded-lg shadow-lg" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full text-2xl font-bold mb-4">1</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">クチコミを読み込む</h3>
            <p className="text-gray-700">AIがGoogleマップから自動取得</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 text-white rounded-full text-2xl font-bold mb-4">2</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">AIが返信文を生成</h3>
            <p className="text-gray-700">理念を学習した"分身AI"が作成</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-500 text-white rounded-full text-2xl font-bold mb-4">3</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">確認して送信</h3>
            <p className="text-gray-700">1分でチェック完了、そのまま投稿OK</p>
          </div>
        </div>
      </div>
    </section>
  );
}
