import React from 'react';

export default import InfoTicker from "./InfoTicker";

function App() {

  return (
    <InfoTicker />
    <>
      <header>
        Seu Repórter
      </header>

      <div className="container">
        <main>
          <article>
            <h2>Notícia 1: Últimas do Brasil</h2>
            <p>Conteúdo da notícia 1, texto ilustrativo...</p>
          </article>

          <div className="ad in-feed-ad">
            Anúncio Google Ads (in-feed)
          </div>

          <article>
            <h2>Notícia 2: Mundo em foco</h2>
            <p>Conteúdo da notícia 2, texto ilustrativo...</p>
          </article>

          <article>
            <h2>Notícia 3: Tecnologia e inovação</h2>
            <p>Conteúdo da notícia 3, texto ilustrativo...</p>
          </article>
        </main>

        <aside className="sidebar-ad">
          Anúncio Google Ads (sidebar)
        </aside>
      </div>

      <footer>
        Anúncio Google Ads (footer)
      </footer>
    </>
  );
}

