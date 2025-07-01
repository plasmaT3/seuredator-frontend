import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => setMenuAberto(!menuAberto);

  const noticiasTicker = [
    "💸 Dólar hoje: R$5,37",
    "🌡️ Clima em Anápolis: 22ºC",
    "📰 Governo anuncia novo plano de investimentos...",
    "🎵 Festival de música atrai multidão em Goiânia",
    "⚽ Goiás vence clássico com gol nos acréscimos",
    "🎬 Estreia de filme brasileiro surpreende bilheteria"
  ];

  return (
    <header className="bg-white shadow border-b-4 border-red-600">
      {/* Topo com título e menu */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-4xl font-extrabold tracking-tight text-gray-900 font-serif"
        >
          Seu <span className="text-red-600">Redator</span>
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-6 text-lg font-medium">
          {[
            ["Geral", "general"],
            ["Tecnologia", "tech"],
            ["Goiás", "goias"],
            ["Esportes", "esportes"],
            ["Música", "musica"],
            ["Cinema", "cinema"],
          ].map(([nome, rota]) => (
            <Link
              key={rota}
              to={`/categoria/${rota}`}
              className="text-gray-800 hover:text-red-600 transition-colors"
            >
              {nome}
            </Link>
          ))}
        </nav>

        {/* Botão Mobile */}
        <button
          className="md:hidden text-gray-800"
          onClick={toggleMenu}
          aria-label="Abrir menu"
        >
          {menuAberto ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {menuAberto && (
        <nav className="md:hidden bg-white px-4 pb-4 flex flex-col gap-2 border-t border-gray-200">
          {[
            ["Geral", "general"],
            ["Tecnologia", "tech"],
            ["Goiás", "goias"],
            ["Esportes", "esportes"],
            ["Música", "musica"],
            ["Cinema", "cinema"],
          ].map(([nome, rota]) => (
            <Link
              key={rota}
              to={`/categoria/${rota}`}
              onClick={() => setMenuAberto(false)}
              className="text-gray-800 hover:text-red-600 transition-colors py-1"
            >
              {nome}
            </Link>
          ))}
        </nav>
      )}

      {/* Ticker em carrossel */}
      <div className="bg-gray-100 border-t border-gray-300 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap py-2 text-sm text-gray-700 font-medium font-mono">
          {noticiasTicker.map((item, i) => (
            <span key={i} className="inline-block px-8">
              {item}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
