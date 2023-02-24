import { Route, Routes } from "react-router";
import "./App.css";
import HomeComponent from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import SignInComponent from "./pages/SignIn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignInComponent />}></Route>
      <Route path="/home" element={<HomeComponent />}></Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  );
}

export default App;
