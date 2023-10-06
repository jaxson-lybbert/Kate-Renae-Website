import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Stories from "./pages/Stories";

import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  const theme = React.useMemo(() =>
    createTheme({
      palette: {
        mode: "light",
        primary: {
          main: "#b15759",
          light: "#EDEEC9",
          dark: "#77BFA3",
        },
        secondary: {
          main: "#BFD8BD",
          dark: "#98C9A3",
        },
        background: {
          default: "#f5f5f5",
          paper: "#fafafa",
        },
      },
      typography: {
        fontFamily: "Droid Serif",
      },
    })
  );
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="flex-column justify-flex-start min-100-vh">
          <div className="container">
            {/* <Header /> */}
            <Nav />
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/stories" element={<Stories />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
