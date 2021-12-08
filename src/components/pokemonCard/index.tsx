import { Card, CardContent, CardMedia } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";

type Props = {
  name: string;
  pokemonId: string;
};

export function PokemonCard(props: Props) {
  const { name, pokemonId } = props;
  const classes = useStyles();

  return (
    <div style={{ width: "100%", padding: "10px" }}>
      <Card variant="elevation">
        <CardMedia
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
