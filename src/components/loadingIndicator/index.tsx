import { CatchingPokemon } from "@mui/icons-material";
import React from "react";
import { globalVariables } from "../../styles/globalVariables";
import { useStyles } from "./styles";

type Props = {
  loadingMessage: string;
};

export function LoadingIndicator(props: Props) {
  const classes = useStyles();
  const { loadingMessage } = props;
  return (
    <div style={{ display: "flex", flexDirection: "column", padding: "100px" }}>
      <CatchingPokemon
        style={{ height: "100px", width: "100px", color: globalVariables.red }}
        className={classes.bounceAndSpin}
      />
      <div style={{ fontWeight: "bold" }}>{loadingMessage}</div>
    </div>
  );
}
