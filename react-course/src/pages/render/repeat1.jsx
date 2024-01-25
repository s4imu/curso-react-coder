export default function repeticao1() {
  const listaAprovados = [
    "João",
    "Maria",
    "Pedro",
    "Marcos",
    "Luiza",
    "Denis",
    "Lucia",
  ];

  function renderizarLista() {
    // map serve para transformar um elemento em outro
    return listaAprovados.map((elemento, i) => <li key={i}>{elemento}</li>);
  }

  return <ul>{renderizarLista()}</ul>;
}

function renderizarListaFor() {
  const itens = [];
  for (let i = 0; i < listaAprovados.length; i++) {
    itens.push(<li key={i}>{listaAprovados[i]}</li>);
  }
  return itens;
}
