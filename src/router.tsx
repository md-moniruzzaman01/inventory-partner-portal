import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
    {
      path: "/dashboard",
      element: <div>Hello world2!</div>,
    },
  ]);