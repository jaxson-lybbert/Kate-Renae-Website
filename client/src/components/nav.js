import { Link } from "react-router-dom";

import {
  Typography,
  AppBar,
  Toolbar,
  Menu,
  MenuItem,
  Container,
} from "@mui/material";

<AppBar position="relative">
  <Toolbar></Toolbar>
</AppBar>;

function Nav() {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h2" align="left">
          Kate Renae
        </Typography>
        <ul>
          <Link to={"/"} style={{ marginRight: "2rem" }}>
            Home
          </Link>
          <Link to={"/stories"} style={{ marginRight: "2rem" }}>
            Stories
          </Link>
          <Link to={"/about"} style={{ marginRight: "2rem" }}>
            About
          </Link>
          <Link to={"/contact"} style={{ marginRight: "2rem" }}>
            Contact
          </Link>
        </ul>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
