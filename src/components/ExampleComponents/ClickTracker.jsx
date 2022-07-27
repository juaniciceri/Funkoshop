import { useState, useEffect } from "react";

const ClickTracker = () => {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    console.log("Se ejecuta cuando el componente se monta");
    console.log("Se está actualizando el componente");
  }, [date]);

  useEffect(() => {
    console.log("Este useEffect es del title");
  }, [title]);

  const registrarClick = (operacion) => {
    if (operacion === "-" && count > 0) {
      setCount(count - 1);
    } else if (operacion === "+") {
      setCount(count + 1);
    }
    const actualDate = new Date();
    setDate(
      `${actualDate.getDate()}/${actualDate.getMonth()}/${actualDate.getFullYear()} ${actualDate.getHours()}:${actualDate.getMinutes()}:${actualDate.getSeconds()}`
    );
  };

  return (
    <>
      <button onClick={() => registrarClick("-")}>-</button>
      {count}
      <button onClick={() => registrarClick("+")}>+</button>
      <p>{date}</p>
      <button onClick={() => setTitle("Nuevo titulo")}>Cambiar titulo</button>
    </>
  );
};

export default ClickTracker;
