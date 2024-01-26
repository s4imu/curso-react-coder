import { useState, useEffect } from "react";
import { mega } from "@/functions/mega";
import NumeroDisplay from "@/components/NumeroDisplay";

export default function megaSena() {
  const [qtd, setQtd] = useState(6);
  const [numeros, setNumeros] = useState(mega(qtd));
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  function renderNumeros() {
    return numeros.map((num) => <NumeroDisplay key={num} numero={num} />);
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Mega Sena</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {isClient ? renderNumeros() : ""}
      </div>
      <div>
        <input
          type="number"
          min={6}
          max={60}
          value={qtd}
          onChange={(event) => setQtd(event.target.value)}
        />
        <button onClick={() => setNumeros(mega(qtd))}>Gerar Aposta</button>
      </div>
    </div>
  );
}
