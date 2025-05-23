import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root.jsx";
import Error from "./Components/Error/Error.jsx";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import HomePage from "./Components/HomePage/HomePage.jsx";
import Statistics from "./Components/Statistics/Statistics.jsx";
import ProductDetails from "./Components/ProductDetails/ProductDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "stats",
        element: <Statistics></Statistics>,
      },
      {
        path: "products/:product",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch("/product.json"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
