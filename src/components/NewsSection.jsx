function NewsSection({ title, news }) {
  const extractImageFromSummary = (summary) => {
    const match = summary?.match(/<img[^>]+src="([^">]+)"/);
    return match ? match[1] : "https://placekitten.com/300/200"; // fallback
  };

  const cleanSummaryText = (summary) => {
    return summary?.replace(/<img[^>]*>/, "").trim();
  };

  return (
    <section className="my-10 px-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b border-gray-300 pb-2">
        {title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {news && news.length > 0 ? (
          news.map((item, index) => {
            const imageUrl = extractImageFromSummary(item.summary);
            const summaryText = cleanSummaryText(item.summary);

            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow hover:shadow-md transition duration-200 p-4 flex flex-col"
              >
                <img
                  src={imageUrl}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded mb-3"
                  onError={(e) =>
                    (e.target.src = "https://placekitten.com/300/200")
                  }
                />

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-700 line-clamp-3 mb-3">
                  {summaryText || "Resumo não disponível."}
                </p>

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto text-sm font-medium text-blue-600 hover:underline"
                  >
                    Ler mais →
                  </a>
                )}
              </div>
            );
          })
        ) : (
          <p className="text-gray-500">Nenhuma notícia disponível.</p>
        )}
      </div>
    </section>
  );
}

export default NewsSection;
