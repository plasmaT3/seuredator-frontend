import { useEffect, useState } from "react";
import NewsSection from "./components/NewsSection";
import Header from "./components/Header";
import Footer from "./components/Footer";
import InfoTicker from "./InfoTicker";

function App() {
  const [goiasNews, setGoiasNews] = useState([]);
  const [generalNews, setGeneralNews] = useState([]);
  const [techNews, setTechNews] = useState([]);
  const [esportsNews, setEsportsNews] = useState([]);
  const [sportsNews, setSportsNews] = useState([]);
  const [musicNews, setMusicNews] = useState([]);
  const [cinemaNews, setCinemaNews] = useState([]);

  useEffect(() => {
    const fetchNews = async (url, setState) => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        if (Array.isArray(data)) {
          setState(data);
        } else if (Array.isArray(data.noticias)) {
          setState(data.noticias);
        } else {
          setState([]);
        }
      } catch (error) {
        console.error("Erro ao buscar notícias:", url, error);
        setState([]);
      }
    };

    fetchNews("http://127.0.0.1:5000/goias-news", setGoiasNews);
    fetchNews("http://127.0.0.1:5000/general-news", setGeneralNews);
    fetchNews("http://127.0.0.1:5000/tech-news", setTechNews);
    fetchNews("http://127.0.0.1:5000/noticias/esports", setEsportsNews);
    fetchNews("http://127.0.0.1:5000/noticias/esportes", setSportsNews);
    fetchNews("http://127.0.0.1:5000/noticias/musica", setMusicNews);
    fetchNews("http://127.0.0.1:5000/noticias/cinema", setCinemaNews);
  }, []);

  return (
    <div>
      <Header />
      <InfoTicker />
      <main className="max-w-7xl mx-auto px-4">
        <NewsSection title="Goiás" news={goiasNews} />
        <NewsSection title="Notícias Gerais" news={generalNews} />
        <NewsSection title="Tecnologia" news={techNews} />
        <NewsSection title="E-sports" news={esportsNews} />
        <NewsSection title="Esportes" news={sportsNews} />
        <NewsSection title="Música" news={musicNews} />
        <NewsSection title="Cinema" news={cinemaNews} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
