import Estilo from "@/components/Estilo";

export default function usandoEstilo() {
  return (
    <>
      <Estilo numero={2} color="yellow" />
      <Estilo numero={-1} direita />
    </>
  );
}
