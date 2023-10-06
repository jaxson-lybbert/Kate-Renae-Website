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
      <Toolbar disableGutters>
        <Typography style={{ marginLeft: "20px" }} variant="h2" align="left">
          Kate Renae
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexGrow: 1,
            justifyContent: "flex-end",
            alignItems: "center",
            marginRight: "20px",
          }}
        >
          <Link className="menu-button" to={"/"}>
            <Typography variant="subtitle1" gutterBottom>
              <Button size="small" color="secondary" variant="contained">
                Home
              </Button>
            </Typography>
          </Link>
          <Link className="menu-button" to={"/stories"}>
            <Typography variant="subtitle1" gutterBottom>
              <Button size="small" color="secondary" variant="contained">
                Stories
              </Button>
            </Typography>
          </Link>
          <Link className="menu-button" to={"/about"}>
            <Typography variant="subtitle1" gutterBottom>
              <Button size="small" color="secondary" variant="contained">
                About
              </Button>
            </Typography>
          </Link>
          <Link className="menu-button" to={"/contact"}>
            <Typography variant="subtitle1" gutterBottom>
              <Button size="small" color="secondary" variant="contained">
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
