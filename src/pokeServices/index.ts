import axios, { AxiosResponse } from "axios";

export type PokemonListResponse = {
  count: number;
  results: PokemonListItem[];
};
export type PokemonListItem = {
  name: string;
  url: string;
};
export async function getPokemon(page: number, pageSize: number) {
  //use page size and page number to get offset
  const offset = pageSize * (page - 1);
  return (await axios.get(
    `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${pageSize}`
  )) as AxiosResponse<PokemonListResponse>;
}
