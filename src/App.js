import { Route, Routes } from "react-router";
import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import PokedexPage from "./pages/PokedexPage";
import PageNotFound from "./pages/PageNotFound";
import SignInPage from "./pages/SignInPage";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<SignInPage />}></Route>
        <Route path="/pokedex" element={<PokedexPage />}></Route>
        <Route path="/favorites" element={<FavoritesPage />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
