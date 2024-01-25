import Filho from "./Filho";

//componente pai faz o import do filho e o instancia
export default function Pai(props) {
  return (
    <div>
      <Filho nome="Pedro" familia={props.familia} />
      <Filho nome="Joana" familia={props.familia} />
      <Filho {...props} nome="César" />
    </div>
  );
}
// {...} spread passa todas as props do pai pro filho, sobescreve os valores
