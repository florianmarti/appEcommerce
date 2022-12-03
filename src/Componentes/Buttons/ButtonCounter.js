import { useState } from "react";

function ButtonCounter() {
  const [valor, setValor] = useState(0);

  const sumar = () => {
    setValor(valor + 1);
  };
  const res = () => {
    setValor(0);
  };
  const restar = () => {
    setValor(valor - 1);
    if (valor <= 0) {
      setValor(0);
    }
  };

  return (
    <div className="App">
      <h1>Contador</h1>
      <h2>{valor}</h2>
      <button onClick={sumar}>Agregar</button>
      <button onClick={res}>Reestablecer</button>
      <button onClick={restar}>Quitar</button>
    </div>
  );
}
export default ButtonCounter;
