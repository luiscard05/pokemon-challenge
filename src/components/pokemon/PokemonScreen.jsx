import React from "react";
import { PropTypes } from "prop-types";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import PokemonCard from "./PokemonCard";
import useFetchPokemon from "../../hooks/useFetchPokemon";
import PokemonSearch from "./PokemonSearch";

const PokemonScreen = (props) => {
  const { history } = props;
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const { data, loading } = useFetchPokemon(q);
  const handleSearch = (searchText) => {
    history.push(`?q=${searchText}`);
  };

  return (
    <>
      <PokemonSearch handleSearch={handleSearch} filter={q} />

      {loading && (
        <p className="animate__animated animate__flash">Cargando..</p>
      )}

      {data && data.map((item) => <PokemonCard key={item.id} item={item} />)}
    </>
  );
};

PokemonScreen.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default PokemonScreen;
