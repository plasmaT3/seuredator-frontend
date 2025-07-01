import { Routes, Route } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import InfoTicker from "./components/InfoTicker";
import NewsSection from "./components/NewsSection";
import CategoryPage from "./components/CategoryPage";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header>
        <NavMenu />
        <InfoTicker />
      </header>
      <main className="p-4 space-y-8">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h2 className="section-title">Seções</h2>
                <NewsSection category="general" title="Notícias Gerais" />
                <NewsSection category="tech" title="Tecnologia" />
                <NewsSection category="goias" title="Goiás" />
                <NewsSection category="esportes" title="Esportes" />
                <NewsSection category="esports" title="E-sports" />
                <NewsSection category="musica" title="Música" />
                <NewsSection category="cinema" title="Cinema" />
              </>
            }
          />
          <Route path="/categoria/:categoria" element={<CategoryPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
