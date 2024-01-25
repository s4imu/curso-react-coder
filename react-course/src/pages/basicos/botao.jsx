function acao1() {
  alert("Açao 01");
}

function acao4(event) {
  console.log(event);
}

export default function botao() {
  function acao2() {
    alert("Açao 02");
  }

  return (
    <div>
      <button onClick={acao1}>Click #01</button>
      <button onClick={acao2}>Click #02</button>
      <button
        onClick={() => {
          alert("Açao 03");
        }}
      >
        Click #03
      </button>
      <button onClick={acao4}>Click #04</button>
      <div>
        <input
          type="text"
          onChange={(event) => console.log(event.target.value)}
        />
      </div>
    </div>
  );
}
