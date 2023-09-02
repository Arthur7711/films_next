export const getPokemons = async () => {
  return fetch("https://pokeapi.co/api/v2/pokemon").then((data) =>
    console.log(data)
  );
};
