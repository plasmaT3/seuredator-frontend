import React, { useEffect, useState } from "react";

const NewsCategoryPage = ({ category, title }) => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/${category}`)
      .then((res) => res.json())
      .then((data) => {
        const comImagem = data.noticias.filter((n) => n.image_url);
        const semImagem = data.noticias.filter((n) => !n.image_url);
        setNoticias([...comImagem, ...semImagem]);
      });
  }, [category]);

  return (
    <main className="px-4 py-6">
      <h1 className="section-title">{title}</h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {noticias.map((noticia, index) => (
          <div key={index} className="news-card">
            {noticia.image_url && (
              <img src={noticia.image_url} alt={noticia.title} />
            )}
            <div className="content">
              <h3 className="title">{noticia.title}</h3>
              <p className="summary">{noticia.summary}</p>
              <a href={noticia.link} target="_blank" rel="noopener noreferrer">
                Ler mais →
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default NewsCategoryPage;
