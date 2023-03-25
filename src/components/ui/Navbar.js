import { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../../context/ThemeContext";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";

export default function Navbar() {
  const data = useContext(ThemeContext);

  return (
    <Box sx={{ flexGrow: 1 }} style={{ marginBottom: "64px" }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Pokedex
          </Typography>

          <Link
            to="/pokedex"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Button color="inherit">Pokedex</Button>
          </Link>

          <Link
            to="/favorites"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Button color="inherit">Favorites</Button>
          </Link>

          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <Button color="inherit">Log out</Button>
          </Link>

          <Switch color="default" onChange={data.handleTheme} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
