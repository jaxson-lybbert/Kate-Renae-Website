import { Link } from "react-router-dom";

function Nav() {
  return (
    <ul id="NavBar" className="nav nav-tabs">
      <Link to={"/"} className="nav-item" style={{ marginRight: "2rem" }}>
        Home
      </Link>
      <Link
        to={"/stories"}
        className="nav-item"
        style={{ marginRight: "2rem" }}
      >
        Stories
      </Link>
      <Link to={"/about"} className="nav-item" style={{ marginRight: "2rem" }}>
        About
      </Link>
      <Link
        to={"/contact"}
        className="nav-item"
        style={{ marginRight: "2rem" }}
      >
        Contact
      </Link>
    </ul>
  );
}

export default Nav;
