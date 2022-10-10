import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const Router = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Router;
