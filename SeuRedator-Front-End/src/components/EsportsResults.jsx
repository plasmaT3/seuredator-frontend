import React from 'react';

const EsportsResults = ({ resultados }) => {
  if (!resultados || resultados.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 border-b pb-2">
        Resultados Recentes - CS:GO
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {resultados.map((partida, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow hover:shadow-lg transition transform hover:scale-[1.01] duration-200 flex flex-col overflow-hidden p-4"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{partida.name}</h3>
            <p className="text-sm text-gray-700 mb-2">Status: {partida.status}</p>
            <p className="text-sm text-gray-700">
              Início: {new Date(partida.begin_at).toLocaleString('pt-BR')}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EsportsResults;
