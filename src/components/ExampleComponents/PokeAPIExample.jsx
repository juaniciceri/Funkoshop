import React, { useState, useEffect } from "react";

const PokeAPIExample = () => {
  const [pokemon, setPokemon] = useState({});
  const url = "https://pokeapi.co/api/v2/pokemon/gengar";
  const urlToPost = "http://testPost/new";
  const dataToSave = { name: "test", age: 30 };
  useEffect(() => {
    fetch(urlToPost, { method: "post", body: dataToSave }).then((res) => {
      if (res.ok) {
        alert("Usuario registrado con exito");
      } else {
        alert("Hubo un problema en el registro");
      }
    });
    // fetch(url)
    //   .then((response) => response.json())
    //   .then((res) => setPokemon(res));
  }, []);
  return (
    <>
      <h2>{pokemon.name}</h2>
      {/* <img src={pokemon.sprites.front_default} /> */}
    </>
  );
};

export default PokeAPIExample;
