import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Register from "../Pages/Shared/Register/Register";
import Login from "../Pages/Shared/Login/Login";
import AddaToys from "../Pages/Shared/AddaToys/AddaToys";
import PrivateRouteAddToys from "./PrivateRouteAddToys";
import MyToy from "../Pages/Shared/MyToy/MyToy";
import PriveteRouteMyToy from "./PriveteRouteMyToy";
import AllToys from "../Pages/Shared/AllToys/AllToys";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path : '/signup',
          element : <Register></Register>
        },
        {
          path: '/alltoys',
          element: <AllToys></AllToys>
        },
        {
          path : '/login',
          element : <Login></Login>
        },
        {
          path : '/addtoys',
          element : <PrivateRouteAddToys><AddaToys></AddaToys></PrivateRouteAddToys>
        },
        {
          path: '/mytoy',
          element: <PriveteRouteMyToy><MyToy></MyToy></PriveteRouteMyToy>
        }
      ]
    }
  ]);

  export default router;