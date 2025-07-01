import { useEffect, useState } from "react";

const InfoTicker = () => {
  const [infoList, setInfoList] = useState([
    "💵 Dólar: R$ 5.4266",
    "🌡️ Goiânia: 29.2°C",
    "📰 Últimas: FestMalhas aquece economia de Jacutinga",
    "⚽ Brasil vence nas eliminatórias da Copa",
    "🎮 LoL: Pain vence a FURIA por 3x1",
    "🎬 Estreia hoje: Filme 'O Código Final'"
  ]);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % infoList.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [infoList]);

  return (
    <div className="bg-blue-100 text-sm py-2 px-4 border-b border-blue-200 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap">
        {infoList[index]}
      </div>
    </div>
  );
};

export default InfoTicker;