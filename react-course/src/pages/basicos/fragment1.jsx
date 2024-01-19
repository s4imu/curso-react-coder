import React from "react";

export default function () {
  // não posso retornar elemntos html adjacentes h1..h2

  return (
    <React.Fragment>
      <h1>Hi</h1>
      <h2>Hello</h2>
    </React.Fragment>
  );
}
