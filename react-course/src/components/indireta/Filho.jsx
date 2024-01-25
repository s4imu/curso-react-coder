export default function Filho(props) {
  return (
    <div>
      <h1>Filho</h1>
      <button onClick={props.funcao}>
        Falar com o pai (comunicacao direta)
      </button>
      <button onClick={(event) => props.funcao("Passei no Enem", "Uhuuu", 10)}>
        Falar com o pai (comunicacao indireta)
      </button>
    </div>
  );
}
//comunicacao indireta do filho atraves de parametro para uma funcao no pai
