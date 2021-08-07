import { useEffect, useRef, useState } from "react";
import getPokemonByName from "../selectors/getPokemonByName";
import getPokemonList from "../helpers/getPokemon";

const getPokemonStorage = () => {
  return JSON.parse(localStorage.getItem("pokemonData")) || [];
};

const useFetchPokemon = (filter) => {
  const isMounted = useRef(true);
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  const pokemonStorage = getPokemonStorage();

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setState({ ...state, loading: true });
    if (pokemonStorage.length > 0) {
      const pokemonFilters = getPokemonByName(pokemonStorage, filter);
      setState({
        data: pokemonFilters.length > 0 ? pokemonFilters : pokemonStorage,
        loading: false,
      });
    } else {
      getPokemonList().then((response) => {
        if (isMounted.current) {
          localStorage.setItem("pokemonData", JSON.stringify(response));
          setState({
            data: response,
            loading: false,
          });
        }
      });
    }
  }, [filter]);

  return state;
};

export default useFetchPokemon;
