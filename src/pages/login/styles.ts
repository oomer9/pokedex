import { makeStyles } from "@material-ui/core";
import { globalVariables } from "../../styles/globalVariables";

export const useStyles = makeStyles({
  leftBg: {
    background: globalVariables.yellow,
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center ",
  },
  loginHeader: {
    fontSize: "48px",
    fontWeight: "bold",
  },
});
