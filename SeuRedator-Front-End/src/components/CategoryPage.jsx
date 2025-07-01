import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const CategoryPage = () => {
  const { categoria } = useParams();
  const [noticias, setNoticias] = useState([]);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/noticias/${categoria}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Erro HTTP: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data.noticias)) {
          setNoticias(data.noticias);
          setErro(false);
        } else {
          console.error("Resposta inesperada:", data);
          setErro(true);
        }
      })
      .catch((err) => {
        console.error("Erro ao buscar notícias:", err);
        setErro(true);
      });
  }, [categoria]);

  if (erro) {
    return (
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 capitalize">Categoria: {categoria}</h2>
        <p className="text-red-600">Erro ao carregar notícias. Verifique o back-end ou o nome da categoria.</p>
      </section>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4 capitalize">Categoria: {categoria}</h2>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {noticias.length > 0 ? (
          noticias.map((item, index) => (
            <div key={index} className="news-card min-h-[400px] bg-white shadow-md rounded overflow-hidden">
              {item.image_url && (
                <img
                  src={item.image_url}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="content p-4 space-y-2">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-sm text-gray-700">
                  {item.summary?.slice(0, 200).replace(/<[^>]+>/g, "").trim()}...
                </p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm"
                >
                  Ler mais &rarr;
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-full">Nenhuma notícia disponível.</p>
        )}
      </div>
    </section>
  );
};

export default CategoryPage;
