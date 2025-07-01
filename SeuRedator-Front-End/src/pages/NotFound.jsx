// src/pages/NotFound.jsx
const NotFound = () => (
  <div className="max-w-4xl mx-auto px-4 py-12 text-center">
    <h1 className="text-3xl font-bold text-red-600 mb-4">404 - Página não encontrada</h1>
    <p className="text-gray-700">Ops! A página que você está tentando acessar não existe.</p>
    <a href="/" className="text-blue-600 hover:underline block mt-4">← Voltar para a página inicial</a>
  </div>
);

export default NotFound;
