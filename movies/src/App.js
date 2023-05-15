import { Route, Routes } from "react-router";
import { Landing } from "./pages/landing/landing";
import { Login } from "./pages/login/login";
import { Movies } from "./pages/movies/movies";
import { useDispatch, useSelector } from "react-redux";
import { deleteMovies, updateMovies } from "./moviesAction";




function App() {
  const dispatch = useDispatch()

  const movieList = useSelector((state)=> state.moviesReducer.movieList)

  const handleDel =() => {
    dispatch(
      deleteMovies()
    )
  }

  const handleAdd = () => {
    const newList = [
      ...movieList,
      {name:'movie4', year:2020 },
      {name:'movie5', year:2018},
      {name:'movie6', year:2019},
    ]
    dispatch(updateMovies(newList))
  }

  console.log(movieList)
  
  return (
    <div>
      <button onClick={handleDel}>del</button>
      <button onClick={handleAdd}>add</button>
    <Routes>
      <Route path={"/"} element={<Landing/>}/>
      <Route path={"/login"} element={<Login/>}/>
      <Route path={"/movies"} element={<Movies/>}/>
     
    </Routes>
    </div>
  );
}

export default App;
