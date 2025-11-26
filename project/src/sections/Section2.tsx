export default function Section2() {
  const issues = [
    {
      title: '時間がない',
      description: '営業後にクチコミ確認、深夜まで返信作業…'
    },
    {
      title: '言葉が出ない',
      description: '何を書けばいいか悩んで、結局テンプレートに…'
    },
    {
      title: '心が疲れる',
      description: '医療26.8%、飲食22.2%が「精神的負担」と回答'
    },
    {
      title: '理念が伝わらない',
      description: '忙しくて、想いを込めた返信ができない'
    }
  ];

  return (
    <section className="w-full py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
          こんなお悩み、ありませんか？
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg">
          クチコミ運用の現場は、想像以上に大変です
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {issues.map((issue, index) => (
            <div key={index} className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-lg border-l-4 border-orange-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{issue.title}</h3>
              <p className="text-gray-700 text-lg">{issue.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
