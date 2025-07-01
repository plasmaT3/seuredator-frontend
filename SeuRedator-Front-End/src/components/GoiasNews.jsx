import React from "react";

const GoiasNews = ({ noticias }) => {
  if (!noticias || noticias.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 border-b pb-2">
        Goiás
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {noticias.map((noticia, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow hover:shadow-lg transition transform hover:scale-[1.01] duration-200 flex flex-col overflow-hidden"
          >
            {noticia.image_url ? (
              <img
                src={noticia.image_url}
                alt={noticia.title}
                className="w-full h-48 object-cover"
              />
            ) : null}
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {noticia.title}
              </h3>
              <p
                className="text-sm text-gray-700 line-clamp-3 mb-4"
                dangerouslySetInnerHTML={{ __html: noticia.summary }}
              />
              <a
                href={noticia.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto text-blue-600 text-sm font-medium hover:underline"
              >
                Ler mais →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GoiasNews;
