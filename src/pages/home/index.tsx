import { useMediaQuery, useTheme } from "@material-ui/core";
import React from "react";
import { PokemonCard } from "../../components/pokemonCard";
import { getPokemon, PokemonListItem } from "../../pokeServices";
import { useStyles } from "./styles";

export function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [pokemonList, setPokemonList] = React.useState<PokemonListItem[]>([]);
  const [pageSize, setPageSize] = React.useState<number>(18);
  const [page, setpage] = React.useState<number>(1);
  React.useEffect(() => {
    getPokemonList();
  }, []);
  const getPokemonList = async () => {
    const pokemon = await getPokemon(page, pageSize);
    if (pokemon?.data?.results?.length) {
      setPokemonList(pokemon.data.results);
    }
  };
  return (
    <div>
      <div className={classes.pageHeader}>Pok&#233;dex</div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          justifyContent: "space-around",
        }}
      >
        {pokemonList.map((pokemon: PokemonListItem, index: number) => {
          const pokemonUrlSplit = pokemon.url.split("/");
          return (
            <div
              key={index}
              style={{
                display: "flex",
                width: isMobile ? "33%" : "15%",
                justifyContent: "center",
              }}
            >
              <PokemonCard name={pokemon.name} pokemonId={pokemonUrlSplit[6]} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
