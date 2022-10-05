import axios from "axios";
const getPokemons = () => {
  return axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((response) => response.data.results)
    .catch((error) => console.error(error));
};

export { getPokemons };
