// src/components/Navbar.jsx
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const menu = [
    { name: "Início", path: "/" },
    { name: "Sobre", path: "/sobre" },
  ];

  return (
    <header className="navbar">
      <h1 className="text-xl font-bold">Seu Redator</h1>
      <p className="text-sm text-gray-500">A notícia com você, todo dia.</p>
      <nav className="flex gap-4 mt-4">
        {menu.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `text-sm ${isActive ? "font-bold underline" : "text-gray-700"}`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
