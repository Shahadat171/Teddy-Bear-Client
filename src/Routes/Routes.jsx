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
import UpdateYourToy from "../Pages/Shared/MyToy/UpdateYourToy";
import PrivateRouteUpdateSingleTeddyBear from "./PrivateRouteUpdateSingleTeddyBear";
import PrivateRouteSingleTeddyBear from "./PrivateRouteSingleTeddyBear";

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
          element : <PrivateRouteSingleTeddyBear><SingleTeddyBear></SingleTeddyBear></PrivateRouteSingleTeddyBear>,
          loader : ({params}) => fetch(`http://localhost:5000/singleTeddyBear/${params.id}`)
        },
        {
          path : '/updateSingleTeddyBear/:id',
          element : <PrivateRouteUpdateSingleTeddyBear><UpdateYourToy></UpdateYourToy></PrivateRouteUpdateSingleTeddyBear>,
          loader : ({params}) => fetch(`http://localhost:5000/updateSingleTeddyBear/${params.id}`)
        },
        {
          path: '/mytoy',
          element: <PriveteRouteMyToy><MyToy></MyToy></PriveteRouteMyToy>
        }
      ]
    }
  ]);

  export default router;