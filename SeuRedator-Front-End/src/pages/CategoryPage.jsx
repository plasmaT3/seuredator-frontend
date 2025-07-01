import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { category } = useParams();
  const [noticias, setNoticias] = useState([]);
  const [erro, setErro] = useState(false);

  // Mapeia os nomes exibidos no menu para os endpoints reais do backend
  const categoriaMapeada = {
    geral: "general",
    tecnologia: "tech",
    goias: "goias",
    esportes: "esportes",
    musica: "musica",
    cinema: "cinema",
    "e-sports": "esports",
    esports: "esports"
  };

  // Nome amigável para exibir no título
  const categoriaTitulo = {
    general: "Geral",
    tech: "Tecnologia",
    goias: "Goiás",
    esportes: "Esportes",
    musica: "Música",
    cinema: "Cinema",
    esports: "E-sports"
  };

  const categoriaValida = categoriaMapeada[category] || category;
  const tituloCategoria = categoriaTitulo[categoriaValida] || category;

  useEffect(() => {
    fetch(`http://localhost:5000/noticias/${categoriaValida}`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.noticias)) {
          setNoticias(data.noticias);
          setErro(false);
        } else {
          setErro(true);
          console.error("Formato de resposta inesperado:", data);
        }
      })
      .catch((err) => {
        console.error("Erro ao buscar notícias:", err);
        setErro(true);
      });
  }, [categoriaValida]);

  if (erro) {
    return (
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">{tituloCategoria}</h2>
        <p className="text-red-600">
          Erro ao carregar notícias. Verifique se a categoria está correta ou se o backend está ativo.
        </p>
      </section>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">{tituloCategoria}</h2>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {noticias.map((item, index) => (
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

export default CategoryPage;
