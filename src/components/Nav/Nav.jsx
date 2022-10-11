import React, { useContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from "../Blog/Blog";
import Home from "../Home/Home";
import NotFound from "../NotFound/NotFound";
import Quiz from "../Quiz/Quiz";
import Router, { QuizId } from "../Router/Router";
import StartQuiz from "../StartQuiz/StartQuiz";
import Statistics from "../Statistics/Statistics";
const Nav = () => {
  const id = useContext(QuizId);
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
        {
          path: "/quiz/:id",
          loader: async ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.id}`
            );
          },
          element: <StartQuiz></StartQuiz>,
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
