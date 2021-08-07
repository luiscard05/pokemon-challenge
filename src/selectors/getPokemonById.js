const getPokemonById = (data, id) => {
  return data.find((row) => row.id === id);
};

export default getPokemonById;
