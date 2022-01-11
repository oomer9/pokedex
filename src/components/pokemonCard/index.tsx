import {
  Card,
  CardContent,
  CardMedia,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React from "react";
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
  return (
    <div style={{ width: "100%", padding: "10px" }}>
      <Card className={classes.pokeCard} variant="elevation">
        <CardMedia
          style={{ height: isMobile ? "100px" : "150px" }}
          component="img"
          image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
          alt={name}
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
