import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Register from "../Pages/Shared/Register/Register";
import Login from "../Pages/Shared/Login/Login";

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
          path : '/login',
          element : <Login></Login>
        }
      ]
    }
  ]);

  export default router;