import axios, { AxiosResponse } from "axios";

export type PokemonListResponse = {
  count: number;
  results: PokemonListItem[];
};
export type PokemonListItem = {
  name: string;
  url: string;
};
export async function getPokemon(offset: number, limit: number) {
  return (await axios.get(
    `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
  )) as AxiosResponse<PokemonListResponse>;
}
