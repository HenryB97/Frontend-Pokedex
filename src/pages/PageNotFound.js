import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export default function PageNotFound() {
  const data = useContext(ThemeContext);
  return (
    <div className={data.theme}>
      <h1>Page Not Found</h1>
    </div>
  );
}
