import { Component } from "react";

export default class Contador extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numero: props.valorInicial ?? 0,
      passo: props.passo ?? 1,
    };
  }

  incrementar = () => {
    this.setState({
      numero: this.state.numero + this.state.passo,
    });
  };

  decrementar = () => {
    this.setState({
      numero: this.state.numero - this.state.passo,
    });
  };

  alterarPasso = (event) => {
    this.setState({ passo: parseInt(event.target.value) });
  };

  renderForm() {
    return (
      <>
        <input
          type="number"
          min={1}
          max={1000}
          value={this.state.passo}
          onChange={this.alterarPasso}
        />
        <div>
          <button onClick={this.incrementar}>+</button>
          <button onClick={this.decrementar}>-</button>
        </div>
      </>
    );
  }

  render() {
    return (
      <div>
        <h1>Contador Usando Classe</h1>
        <h2>{this.state.numero}</h2>
        {this.renderForm()}
      </div>
    );
  }
}
// quando usar classe use this.
// ler o estado this.state
// alterar o estado this.setState
