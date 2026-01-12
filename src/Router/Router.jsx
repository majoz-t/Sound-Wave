import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import Join from "../Pages/Join/Join";
import Discover from "../Pages/Discover";
import Layout from "../Layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/Join",
        Component: Join,
        
      },
      {
        path: "/Discover",
        Component: Discover,
      },
    ],
  },
]);
