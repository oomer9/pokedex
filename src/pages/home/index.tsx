import { useMediaQuery, useTheme } from "@material-ui/core";
import { CatchingPokemon } from "@mui/icons-material";
import { color } from "@mui/system";
import React from "react";
import { ListNavBar } from "../../components/listNavBar";
import { LoadingIndicator } from "../../components/loadingIndicator";
import { PokemonCard } from "../../components/pokemonCard";
import { getPokemon, PokemonListItem } from "../../pokeServices";
import { globalVariables } from "../../styles/globalVariables";
import { useStyles } from "./styles";

export function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [pokemonList, setPokemonList] = React.useState<PokemonListItem[]>([]);
  const [pageSize, setPageSize] = React.useState<number>(18);
  const [page, setpage] = React.useState<number>(1);
  const [totalCount, setTotalCount] = React.useState<number>(1);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    getPokemonList();
  }, [page]);
  const getPokemonList = async () => {
    setIsLoading(true);
    try {
      const pokemon = await getPokemon(page, pageSize);
      if (pokemon?.data?.results?.length) {
        setPokemonList(pokemon.data.results);
        setTotalCount(pokemon.data.count);
      }
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <div className={classes.pageHeader}>
        Pok&#233;dex{" "}
        <CatchingPokemon
          style={{
            color: globalVariables.red,
            height: "62px",
            width: "62px",
          }}
        />
      </div>
      <div>
        <ListNavBar
          pageSize={pageSize}
          setPageNumber={setpage}
          page={page}
          setPageSize={setPageSize}
          totalPages={Math.round(totalCount / pageSize)}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          justifyContent: "space-around",
        }}
      >
        {isLoading ? (
          <LoadingIndicator />
        ) : (
          <>
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
                  <PokemonCard
                    name={pokemon.name}
                    pokemonId={pokemonUrlSplit[6]}
                  />
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}
