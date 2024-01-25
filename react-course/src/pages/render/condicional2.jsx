import If from "@/components/If";

export default function condicional2() {
  const numero = 3;
  const ehPar = numero % 2 === 0;
  const ehImpar = numero % 2 != 0;
  return (
    <div>
      <If teste={ehPar}>
        <span>O número é par</span>
      </If>
      <If teste={ehImpar}>
        <span>O número é ímpar</span>
      </If>
    </div>
  );
}
