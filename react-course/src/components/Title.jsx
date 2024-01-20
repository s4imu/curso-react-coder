export default function Title(props) {
  //propriedades passadas para os componentes
  //props é somente leitura
  console.log(props);
  return props.small ? ( // operador tenario
    <>
      <p>{props.main}</p>
      <p>{props.secondary}</p>
    </>
  ) : (
    <>
      <h1>{props.main}</h1>
      <h2>{props.secondary}</h2>
    </>
  );
}
