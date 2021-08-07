const getPokemonByName = (data, name) => {
  if (data === undefined || name === "") {
    return [];
  }
  const nameFilter = name.toLocaleLowerCase();
  return data.filter((row) =>
    row.name.toLocaleLowerCase().includes(nameFilter)
  );
};

export default getPokemonByName;
