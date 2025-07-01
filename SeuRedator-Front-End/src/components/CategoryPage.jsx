import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const CategoryPage = () => {
  const { categoria } = useParams();
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/noticias/${categoria}`)
      .then((res) => res.json())
      .then((data) => setNoticias(data))
      .catch((err) => console.error(err));
  }, [categoria]);

  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="section-title capitalize">{categoria}</h2>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {noticias.map((item, index) => (
          <div key={index} className="news-card min-h-[400px]">
            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="content">
              <h3 className="title">{item.title}</h3>
              <p className="summary">
                {item.summary?.slice(0, 200).replace(/<[^>]+>/g, "").trim()}...
              </p>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                Ler mais &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
