import ContadorDisplay from "@/components/ContadorDisplay";
import { useState } from "react";

export default function contador() {
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
      <ContadorDisplay numero={numero} />
      <div>
        <button onClick={incrementar}>+</button>
        <button onClick={decrementar}>-</button>
      </div>
    </div>
  );
}
