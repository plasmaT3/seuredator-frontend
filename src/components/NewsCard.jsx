import React from "react";

const NewsCard = ({ title, summary, link, image_url }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform hover:scale-105">
      {image_url ? (
        <img src={image_url} alt={title} className="w-full h-48 object-cover" />
      ) : (
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
          Sem imagem
        </div>
      )}
      <div className="p-4 flex flex-col justify-between h-56">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 flex-1 overflow-hidden text-ellipsis">{summary}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 text-blue-600 font-medium hover:underline"
        >
          Ler mais →
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
