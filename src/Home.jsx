import React, { useContext } from "react";
import Movies from "./Movies";
import Search from "./Search";

const Home = () => {
  return (
    <>
      <Search></Search>
      <Movies></Movies>
    </>
  );
};
export default Home;
