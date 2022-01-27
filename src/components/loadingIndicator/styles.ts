import { makeStyles } from "@material-ui/core";
import { globalVariables } from "../../styles/globalVariables";

export const useStyles = makeStyles((theme) => ({
  bounceAndSpin: {
    animation: `$bounceAndSpin 500ms infinite`,
  },
  "@keyframes bounceAndSpin": {
    "0%": { transform: "scale(1,1) translateY(0) rotate(0deg)" },
    "10%": { transform: "scale(1.1,.9) translateY(0) rotate(60deg)" },
    "30%": { transform: " scale(.9,1.1) translateY(-100px) rotate(120deg)" },
    "50%": { transform: "scale(1,1)    translateY(0) rotate(180deg)" },
    "57%": { transform: "scale(1,1)  translateY(-7px) rotate(240deg)" },
    "64%": { transform: "scale(1,1)  translateY(0) rotate(300deg)" },
    "100%": { transform: "scale(1,1)    translateY(0)" },
  },
}));
