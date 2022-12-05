import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar.js";

function Home() {
  return (
    <>
      <SideBar />

      <Outlet />
    </>
  );
}

export default Home;
