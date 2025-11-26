export default function Section7() {
  return (
    <section className="w-full py-20 px-4 bg-gradient-to-r from-orange-500 to-pink-500">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          今すぐ、クチコミ返信のストレスから解放されませんか?
        </h2>
        <p className="text-lg md:text-xl text-white mb-8 leading-relaxed">
          深夜作業も、言葉選びの悩みも、もう必要ありません。<br />
          AIが、あなたの想いを届け続けます。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="bg-white hover:bg-gray-100 text-orange-500 font-bold py-4 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105">
            資料請求
          </button>
          <button className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105">
            無料デモを予約
          </button>
        </div>

        <div className="bg-white bg-opacity-10 rounded-lg p-8 backdrop-blur">
          <p className="text-white text-sm md:text-base mb-4">
            営業時間：平日10:00〜18:00
          </p>
          <p className="text-white text-sm md:text-base">
            お電話でのお問い合わせも受付中
          </p>
        </div>

        <div className="mt-12 text-white text-sm opacity-80">
          <p>クチコミボックス®は、Google等の規約に準拠した正式なサービスです</p>
        </div>
      </div>
    </section>
  );
}
