import { Component } from "react";
import Contador from "../../components/Contador";

export default class ContadorPage extends Component {
  //responsavel por renderizar algo na tela
  render() {
    return (
      <>
        <Contador valorInicial={100} />
      </>
    );
  }
}
