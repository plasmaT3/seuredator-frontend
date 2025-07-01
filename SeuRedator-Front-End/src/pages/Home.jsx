import React from "react";
import NewsList from "../components/NewsList";

const Home = () => (
  <>
    <NewsList endpoint="/general-news" titulo="Notícias Gerais" />
    <NewsList endpoint="/goias-news" titulo="Goiás" />
    <NewsList endpoint="/tech-news" titulo="Tecnologia" />
    <NewsList endpoint="/noticias/esports" titulo="E-sports" />
    <NewsList endpoint="/noticias/esportes" titulo="Esportes" />
    <NewsList endpoint="/noticias/musica" titulo="Música" />
    <NewsList endpoint="/noticias/cinema" titulo="Cinema" />
  </>
);

export default Home;
