import React from "react";
import { Link } from "react-router-dom";

import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function Nav() {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h2" align="left">
          Kate Renae
        </Typography>
        <Box sx={{ display: "flex", flexGrow: 1, justifyContent: "flex-end" }}>
          <Link to={"/"}>
            <Typography variant="subtitle1" gutterBottom>
              <Button
                className="menu-button"
                size="small"
                color="secondary"
                variant="contained"
              >
                Home
              </Button>
            </Typography>
          </Link>
          <Link to={"/stories"}>
            <Typography variant="subtitle1" gutterBottom>
              <Button
                className="menu-button"
                size="small"
                color="secondary"
                variant="contained"
              >
                Stories
              </Button>
            </Typography>
          </Link>
          <Link to={"/about"}>
            <Typography variant="subtitle1" gutterBottom>
              <Button
                className="menu-button"
                size="small"
                color="secondary"
                variant="contained"
              >
                About
              </Button>
            </Typography>
          </Link>
          <Link to={"/contact"}>
            <Typography variant="subtitle1" gutterBottom>
              <Button
                className="menu-button"
                size="small"
                color="secondary"
                variant="contained"
              >
                Contact
              </Button>
            </Typography>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
