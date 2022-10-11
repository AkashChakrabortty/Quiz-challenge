import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

export const Items = createContext();
const Router = () => {
  const loaderData = useLoaderData();
  const items = loaderData.data;
  return (
    <div>
      <Items.Provider value={items}>
        <NavBar></NavBar>
        <Outlet></Outlet>
      </Items.Provider>
    </div>
  );
};

export default Router;
