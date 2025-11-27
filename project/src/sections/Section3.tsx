export default function Section3() {
  return (
    <section className="w-full py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
            <img src="/セクション3.png" alt="3ステップ説明" className="w-full h-auto max-w-md rounded-lg shadow-lg" />
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              クチコミボックス®なら、<br />3ステップで完了
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
                <div>
                  <p className="font-bold text-gray-900">クチコミを読み込む</p>
                  <p className="text-gray-600">AIがGoogleマップから自動取得</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
                <div>
                  <p className="font-bold text-gray-900">AIが返信文を生成</p>
                  <p className="text-gray-600">理念を学習した分身AIが作成</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
                <div>
                  <p className="font-bold text-gray-900">確認して送信</p>
                  <p className="text-gray-600">1分でチェック完了、そのまま投稿OK</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
