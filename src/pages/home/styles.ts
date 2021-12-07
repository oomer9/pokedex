import { makeStyles } from "@material-ui/core";
import { globalVariables } from "../../styles/globalVariables";

export const useStyles = makeStyles({
  pageHeader: {
    color: globalVariables.red,
    WebkitTextStroke: "1px black",
    fontSize: "42px",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
});
