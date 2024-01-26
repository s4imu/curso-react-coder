import NumeroDisplay from "@/components/NumeroDisplay";
import { useState } from "react";

export default function Numero() {
  const [numero, setNumero] = useState(0);

  const incrementar = () => setNumero(numero + 1);

  const decrementar = () => setNumero(numero - 1);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Contador</h1>
      <NumeroDisplay numero={numero} />
      <div>
        <button onClick={incrementar}>+</button>
        <button onClick={decrementar}>-</button>
      </div>
    </div>
  );
}
