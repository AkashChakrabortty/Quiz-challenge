import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

export const Items = createContext();
export const ClickBtn = createContext();
export const QuizId = createContext();
const Router = () => {
  const loaderData = useLoaderData();
  const items = loaderData.data;
  let id;
  const eventHandler = (props) => {
    id = props;
  };

  return (
    <div>
      <QuizId.Provider value={id}>
        <ClickBtn.Provider value={eventHandler}>
          <Items.Provider value={items}>
            <NavBar></NavBar>
            <Outlet></Outlet>
          </Items.Provider>
        </ClickBtn.Provider>
      </QuizId.Provider>
    </div>
  );
};

export default Router;
