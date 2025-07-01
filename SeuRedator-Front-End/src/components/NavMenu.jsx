import { NavLink } from "react-router-dom";

const NavMenu = () => {
  const categories = [
    { name: "Goiás", slug: "goias" },
    { name: "Notícias Gerais", slug: "general" },
    { name: "Tecnologia", slug: "tech" },
    { name: "E-sports", slug: "esports" },
    { name: "Esportes", slug: "esportes" },
    { name: "Música", slug: "musica" },
    { name: "Cinema", slug: "cinema" },
  ];

  return (
    <nav className="navbar">
      <h1 className="text-xl font-bold">Seu Redator</h1>
      <p className="text-sm text-gray-500">A notícia com você, todo dia.</p>
      <div className="flex flex-wrap gap-4 mt-4">
        <NavLink to="/" className={({ isActive }) => `text-sm ${isActive ? "font-bold underline" : "text-gray-700"}`}>
          Início
        </NavLink>
        {categories.map((cat) => (
          <NavLink
            key={cat.slug}
            to={`/categoria/${cat.slug}`}
            className={({ isActive }) =>
              `text-sm ${isActive ? "font-bold underline" : "text-gray-700"}`
            }
          >
            {cat.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default NavMenu;