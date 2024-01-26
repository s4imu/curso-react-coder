export function Comp1() {
  return <h2>Comp1</h2>;
}

export const Comp2 = function () {
  return <h2>Comp2</h2>;
};

export default function () {
  return (
    <div>
      <h2>Comp 3</h2>
    </div>
  );
}

export const Comp4 = (props) => <h2>Comp 4 - {props.mensagem}</h2>;

const Comp5 = () => {
  return <h2>Comp 5</h2>;
};

const Comp6 = () => {
  return (
    <div>
      <h2>Comp 6</h2>
    </div>
  );
};

export { Comp5, Comp6 };
