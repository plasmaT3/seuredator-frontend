import { useEffect, useState } from "react";

const NewsSection = ({ category, title }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/noticias/${category}`)
      .then((res) => res.json())
      .then((data) => setNews(data.noticias)) // ✅ pega só o array
      .catch((err) => console.error(err));
  }, [category]);

  return (
    <section className="max-w-6xl mx-auto px-4">
      <h2 className="section-title">{title}</h2>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {news.map((item, index) => (
          <div key={index} className="news-card min-h-[400px]">
            <img
              src={item.image_url || "/img/placeholder.jpg"}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="content">
              <h3 className="title">{item.title}</h3>
              <p className="summary">
                {item.summary?.slice(0, 200).replace(/<[^>]+>/g, "").trim()}...
              </p>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                Ler mais &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
