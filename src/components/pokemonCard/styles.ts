import { makeStyles } from "@material-ui/core";
import { globalVariables } from "../../styles/globalVariables";

export const useStyles = makeStyles({
  pokeCard: {
    cursor: "pointer",
    "&:hover": {
      boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.2)",
    },
  },
});
