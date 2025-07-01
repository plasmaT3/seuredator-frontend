function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 p-4 mt-10">
      <div className="max-w-7xl mx-auto text-center text-sm">
        © {new Date().getFullYear()} Seu Redator — Todos os direitos reservados.
      </div>
    </footer>
  );
}

export default Footer;
