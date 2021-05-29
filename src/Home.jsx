import React from "react";
import Web from "./images/myImg.png";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="Get your start With"
        img={Web}
        btnName="Get Started"
        visited="./service"
      />
    </>
  );
};

export default Home;
