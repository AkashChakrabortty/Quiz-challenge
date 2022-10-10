import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from "../Blog/Blog";
import Home from "../Home/Home";
import Quiz from "../Quiz/Quiz";
import Router from "../Router/Router";
import Statistics from "../Statistics/Statistics";
const Nav = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Router></Router>,
      children: [
        {
          path: "/home",
          element: <Home></Home>,
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
        },
        {
          path: "/quiz",
          element: <Quiz></Quiz>,
        },
        {
          path: "/statistics",
          element: <Statistics></Statistics>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Nav;
