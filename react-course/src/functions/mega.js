export function mega(qtde = 6, numeros = []) {
  if (qtde < 6 || qtde > 60) {
    throw "Quantidade inválida";
  }
  const numerosGerados = [];

  while (numerosGerados.length < qtde) {
    const numeroAleatorio = Math.floor(Math.random() * 60) + 1;

    if (!numerosGerados.includes(numeroAleatorio)) {
      numerosGerados.push(numeroAleatorio);
    }
  }

  return numerosGerados.sort((a, b) => a - b);
}
