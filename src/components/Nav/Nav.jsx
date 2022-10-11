import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from "../Blog/Blog";
import Home from "../Home/Home";
import NotFound from "../NotFound/NotFound";
import Quiz from "../Quiz/Quiz";
import Router from "../Router/Router";
import Statistics from "../Statistics/Statistics";
const Nav = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      loader: async () => {
        return fetch("https://openapi.programming-hero.com/api/quiz");
      },
      element: <Router></Router>,
      errorElement: <NotFound></NotFound>,
      children: [
        {
          path: "/home",
          index: true,
          element: <Home></Home>,
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
        {
          path: "/",
          element: <Home></Home>,
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
