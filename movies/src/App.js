import { Route, Routes } from "react-router";
import { Landing } from "./pages/landing/landing";
import { Login } from "./pages/login/login";
import { Movies } from "./pages/movies/movies";

function App() {
  return (
    <div>
    <Routes>
      <Route path={"/"} element={<Landing/>}/>
      <Route path={"/login"} element={<Login/>}/>
      <Route path={"/movies"} element={<Movies/>}/>
    </Routes>
    </div>
  );
}

export default App;
