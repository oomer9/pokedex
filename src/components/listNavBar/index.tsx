import React from "react";
import { useStyles } from "./styles";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { Button } from "@material-ui/core";
import { globalVariables } from "../../styles/globalVariables";
type Props = {
  page: number;
  totalPages: number;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  setPageSize: React.Dispatch<React.SetStateAction<number>>;
  pageSize: number;
};

export function ListNavBar(props: Props) {
  const { page, totalPages, setPageNumber, setPageSize, pageSize } = props;
  const classes = useStyles();

  return (
    <div className={classes.navBar}>
      <Button>
        <ArrowCircleLeftIcon style={{ color: globalVariables.blue }} />
      </Button>
      <div style={{ fontWeight: "bold", fontSize: "24px" }}>{page}/{totalPages}</div>
      <Button
        onClick={() => {
          setPageNumber(page + 1);
        }}
      >
        <ArrowCircleRightIcon style={{ color: globalVariables.blue }} />
      </Button>
    </div>
  );
}
