export default function ContadorDisplay(props) {
  const estilo = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "120px",
    width: "120px",
    borderRadius: "60px",
    backgroundColor: "#222",
    color: "#fff",
    fontSize: "3rem",
    margi: "20px",
  };

  return <div style={estilo}>{props.numero}</div>;
}
