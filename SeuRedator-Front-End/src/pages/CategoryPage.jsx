import React from "react";
import NewsList from "../components/NewsList";

const CategoryPage = ({ endpoint, titulo }) => {
  return (
    <section className="py-6">
      <h2 className="section-title">{titulo}</h2>
      <NewsList endpoint={endpoint} titulo={titulo} />
    </section>
  );
};

export default CategoryPage;
