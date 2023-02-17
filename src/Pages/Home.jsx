import React from "react";
import NavBar from "../Components/Nabvar";
import { Outlet } from "react-router-dom";
import { Heading, useMediaQuery } from "@chakra-ui/react";

const Home = () => {
  const [isMobile] = useMediaQuery("(max-width: 481px)");
  const token = JSON.stringify(localStorage.getItem('token'))
  return Boolean(token) ? (
    <div>
      <NavBar />
      <Outlet />
    </div>
  ) : (
    <Heading>Mobile Only</Heading>
  );
};

export default Home;
