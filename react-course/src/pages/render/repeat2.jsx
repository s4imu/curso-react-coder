import listaProdutos from "../../data/listaProdutos";

function renderizarLinhas() {
  return listaProdutos.map((elemento, i) => (
    <tr key={elemento.id}>
      <th>{elemento.id}</th>
      <th>{elemento.nome}</th>
      <th>{elemento.preco}</th>
    </tr>
  ));
}

const comBorda = { border: "1px solid white" };
export default function repeticao2() {
  return (
    <div>
      <table style={comBorda}>
        <thead>
          <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>{renderizarLinhas()}</tbody>
      </table>
    </div>
  );
}
