import React, { useEffect, useState } from "react";

const GoiasNews = () => {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/goias-news")
      .then((res) => res.json())
      .then((data) => {
        setNoticias(data.noticias);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao buscar notícias:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Carregando notícias...</p>;

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>Notícias de Goiás</h2>
      {noticias.map((noticia, index) => (
        <div key={index} style={{ marginBottom: "1.5rem", borderBottom: "1px solid #ccc", paddingBottom: "1rem" }}>
          <h3>{noticia.title}</h3>
          <p>{noticia.summary}</p>
          {noticia.image_url && (
            <img src={noticia.image_url} alt="imagem" style={{ maxWidth: "100%", maxHeight: "200px" }} />
          )}
          <p><a href={noticia.link} target="_blank" rel="noopener noreferrer">Ler mais</a></p>
        </div>
      ))}
    </div>
  );
};

export default GoiasNews;
