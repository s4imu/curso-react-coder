export default function Lista(props) {
  return (
    <div>
      <h1>Lista de Algo</h1>
      <ul
        style={{
          color: "red",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        {props.children}
      </ul>
    </div>
  );
}
