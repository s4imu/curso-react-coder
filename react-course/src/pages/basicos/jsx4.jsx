export default function jsx4() {
  const subtitle = "I'm on Javascript";
  const h3Text = <h3>{3 * 3}</h3>;

  // Chaves consigo acessar coisas dentro do JS
  return (
    <div>
      <h1>Integration JS and JSX</h1>
      <h2> {subtitle}</h2>
      {h3Text}
      <h4>{Math.max(13, 39)}</h4>
      <h5>{among(12, 19, 22)}</h5>
    </div>
  );
}

function among(value, min, max) {
  if (value >= min && value <= max) {
    return "It's among";
  } else {
    return "It's not";
  }
}
