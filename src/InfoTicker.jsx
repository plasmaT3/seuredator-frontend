
import React, { useEffect, useState } from 'react';

const InfoTicker = () => {
  const [cotacao, setCotacao] = useState(null);
  const [clima, setClima] = useState(null);

  useEffect(() => {
    fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL")
      .then(res => res.json())
      .then(data => setCotacao(data?.USDBRL?.bid));

    fetch("https://api.open-meteo.com/v1/forecast?latitude=-16.68&longitude=-49.25&current_weather=true")
      .then(res => res.json())
      .then(data => setClima(data?.current_weather?.temperature));
  }, []);

  return (
    <div style={{ background: '#111', color: '#fff', padding: '6px 12px', fontSize: '14px', whiteSpace: 'nowrap', overflow: 'hidden' }}>
      <marquee>
        💵 Dólar: R$ {cotacao || "carregando..."} | 🌤️ Clima em Goiânia: {clima ? `${clima}°C` : "carregando..."}
      </marquee>
    </div>
  );
};

export default InfoTicker;
