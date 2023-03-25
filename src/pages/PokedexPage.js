import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { Card } from "../components/Card";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";


export default function PokedexPage() {
  const data = useContext(ThemeContext);
  return (
    <div className={data.theme}>
        <Navbar />
        <Card />
        <Footer/>
    </div>
  );
}
