import { useState, useEffect } from "react";
import Spinner from "./Spinner";

const Promises = () => {
  const [loading, setLoading] = useState(false);
  const condition = true;

  const promise = new Promise((resolve, reject) => {
    if (condition) {
      setTimeout(() => resolve({ user: "userName" }), 3000);
    } else {
      setTimeout(() => reject("El usuario no se encontró"), 3000);
    }
  });

  useEffect(() => {

    setLoading(true);
    promise
      .then((res) => console.log("Promesa cumplida", res))
      .catch((error) => console.log("Promesa rechazada", error))
      .finally(() => {
        console.log("Esto se ejecuta se cumpla o no la promesa");
        setLoading(false);
      });
  }, []);

  if (loading) return <Spinner />;
  return (
    <>
      <h1>No hay promesa ejecutandose</h1>
    </>
  );
};

export default Promises;
