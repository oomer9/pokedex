import {
  Card,
  CardContent,
  CardMedia,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React, { useState } from "react";
import { useStyles } from "./styles";

type Props = {
  name: string;
  pokemonId: string;
};

export function PokemonCard(props: Props) {
  const { name, pokemonId } = props;
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const normalPokemon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
  const shinyPokemon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemonId}.png`;

  const [hover, setHover] = useState(false);

  return (
    <div style={{ width: "100%", padding: "10px" }}>
      <Card className={classes.pokeCard} variant="elevation">
        <CardMedia
          style={{
            height: isMobile ? "100px" : "250px",
            objectFit: "contain",
            cursor: "pointer",
          }}
          component="img"
          src={hover ? shinyPokemon : normalPokemon}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        />
        <CardContent
          style={{ textAlign: "center", textTransform: "capitalize" }}
        >
          {name}
        </CardContent>
      </Card>
    </div>
  );
}
