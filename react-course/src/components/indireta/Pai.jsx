import Filho from "./Filho";

// antes que o filho se comunique com o pai o pai deve iniciar uma comunicacao com o filho
export default function Pai(props) {
  function falarComigo(param1, param2, param3) {
    console.log(param1, param2, param3);
    console.log("Alguém falou comigo");
  }
  return (
    <div>
      <Filho funcao={falarComigo} />
    </div>
  );
}
