const BASE_URL = `https://api.pokemontcg.io/v1/cards?subtype=Basic`;

const getPokemonList = async () => {
  const resp = await fetch(BASE_URL);
  const { cards } = await resp.json();
  const pokemons = cards.map((row) => {
    return {
      id: row.id,
      name: row.name,
      imageUrl: row.imageUrl,
      supertype: row.supertype,
      nationalPokedexNumber: row.nationalPokedexNumber,
      series: row.series,
      attacks: row.attacks,
      resistances: row.resistances,
      weaknesses: row.weaknesses,
    };
  });
  return pokemons;
};

export default getPokemonList;
