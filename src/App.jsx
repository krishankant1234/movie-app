// import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import SingleMovie from "./SingleMovie";
import Error from "./Error";
// import Search from "./Search";
// import Movies from "./Movies";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="movie/:id" element={<SingleMovie />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </>
  );
}

export default App;
