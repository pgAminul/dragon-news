import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../Layout/Home";
import Error from "../Layout/Error";
import NewsPaper from "../Pages/NewsPaper";
import Details from "../Pages/Details";
import Login from "../Layout/Login";
import Register from "../Layout/Register";
import PrivetRouter from "./PrivetRouter";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Navigate to={"/category/01"} />,
      },
      {
        path: "/category/:id",
        element: <NewsPaper />,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
  {
    path: "/details/:detailsId",
    element: (
      <PrivetRouter>
        {" "}
        <Details />
      </PrivetRouter>
    ),
    loader: ({ params }) =>
      fetch(
        `https://openapi.programming-hero.com/api/news/${params.detailsId}`
      ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
