import { TextField, useMediaQuery, useTheme } from "@material-ui/core";
import { CatchingPokemon } from "@mui/icons-material";
import { Button, Card } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { globalVariables } from "../../styles/globalVariables";
import { useStyles } from "./styles";

export default function Login() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {isMobile ? (
          <div className={classes.leftBg}>
            <CatchingPokemon
              style={{
                color: globalVariables.blue,
                height: "62px",
                width: "62px",
              }}
            />
            <div className={classes.loginHeader}>Pok&#233;dex</div>
          </div>
        ) : null}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center ",
          }}
        >
          <Card variant="elevation">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center ",
                padding: "20px",
              }}
            >
              <div
                style={{
                  marginBottom: "15px",
                  alignSelf: "start",
                  fontWeight: "bold",
                  fontSize: "24px",
                }}
              >
                Log in
              </div>
              <TextField
                style={{ marginBottom: "10px" }}
                name="email"
                variant="outlined"
                label="Email"
              />
              <TextField
                style={{ marginBottom: "20px" }}
                name="password"
                variant="outlined"
                label="Password"
              />
              <Link style={{ textDecoration: "none" }} to="/">
                <Button
                  style={{
                    backgroundColor: globalVariables.blue,
                    width: "100%",
                  }}
                  variant="contained"
                >
                  Login
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
