import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./assets/sass/main.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import SingleProduct from "./pages/SingleProduct.jsx";
import Favorite from "./pages/Favorite.jsx";
import { store } from './app/store'
import { Provider } from 'react-redux'
import Basket from "./pages/Basket.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>404 Page not Fount Fara</div>,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/:id",
        element: <SingleProduct />,
      },
      {
        path: "/favorite",
        element: <Favorite />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  
);
