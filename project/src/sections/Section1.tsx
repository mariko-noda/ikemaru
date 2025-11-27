export default function Section1() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-cover bg-center relative" style={{backgroundImage: 'url(/ヘッダー3.png)'}}>
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          クチコミ返信の深夜作業、<br />今日で終わり。
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white mb-8 leading-relaxed">
          AIが"あなたらしい言葉"を、<br />たった1分でつくります。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300">
            資料請求
          </button>
          <button className="bg-white hover:bg-gray-100 text-orange-500 font-bold py-4 px-8 rounded-lg text-lg transition duration-300">
            無料デモ申込み
          </button>
        </div>
      </div>
    </section>
  );
}
