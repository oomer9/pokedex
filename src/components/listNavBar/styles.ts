import { makeStyles } from "@material-ui/core";
import { globalVariables } from "../../styles/globalVariables";

export const useStyles = makeStyles({
  navBar: {
    overflow: "hidden",
    backgroundColor: globalVariables.yellow,
    justifyContent: "space-between",
    display: "flex",
    width: "100%",
  },
});
