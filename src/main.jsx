import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Component/Layout/Home";
import Shop from "./Component/Shop/Shop";
import Order from "./Component/Order/Order";
import Inventory from "./Component/Inventory/Inventory";
import LogIn from "./Component/LogIn/LogIn";
import CartProductLoader from "./Loaders/CartProductsLoader";
import CheckOut from "./Component/CheckOut/CheckOut";
import SignUp from "./Component/SignUp/SignUp";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Shop> </Shop>,
      },
      {
        path: "/orders",
        element: <Order></Order>,
        loader: CartProductLoader,
      },
      {
        path: "/inventory",
        element: <Inventory></Inventory>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/checkout",
        element: <CheckOut></CheckOut>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
