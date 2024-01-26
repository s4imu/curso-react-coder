import { useState } from "react";

export default function formulario() {
  const [valor, setValor] = useState("");

  const alterarInput = () => setValor(valor + "!");

  return (
    <div>
      <span>{valor}</span>
      <input
        type="text"
        value={valor}
        onChange={(event) => setValor(event.target.value)}
      />
      <button onClick={alterarInput}>alterar</button>
    </div>
  );
}
//Componentes controlados
