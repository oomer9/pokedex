import { useStyles } from "./styles";
import { Pagination } from "@mui/material";
import { globalVariables } from "../../styles/globalVariables";
import React, { Dispatch, SetStateAction } from "react";

type Props = {
  page: number;
  totalPages: number;
  setPageNumber: Dispatch<SetStateAction<number>>;
};

export function ListNavBar(props: Props) {
  const { page, totalPages, setPageNumber } = props;
  const classes = useStyles();

  return (
    <div
      className={classes.navBar}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Pagination
        count={totalPages}
        page={page}
        onChange={(event, value) => setPageNumber(value)}
        shape="rounded"
        color="primary"
        size="large"
      />
    </div>
  );
}
