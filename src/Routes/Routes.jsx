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
import SingleTeddyBear from "../Pages/SingleTeddyBear/SingleTeddyBear";

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
          path : '/singleTeddyBear/:id',
          element : <SingleTeddyBear></SingleTeddyBear>,
          loader : ({params}) => fetch(`http://localhost:5000/singleTeddyBear/${params.id}`)
        },
        {
          path: '/mytoy',
          element: <PriveteRouteMyToy><MyToy></MyToy></PriveteRouteMyToy>
        }
      ]
    }
  ]);

  export default router;