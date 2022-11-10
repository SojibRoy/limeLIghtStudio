import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyReviewsField from "../Pages/MyReviewsField/MyReviewsField";
import Register from "../Pages/Register/Register";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import ServiceField from "../Pages/Services/ServiceField";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/servicefield",
        loader: () => fetch("https://y-kappa-indol.vercel.app/services"),
        element: <ServiceField></ServiceField>,
      },
      {
        path: "/details/:id",
        loader: ({ params }) =>
          fetch(`https://y-kappa-indol.vercel.app/services/${params.id}`),
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/myreviews",
        element: <PrivateRoute><MyReviewsField></MyReviewsField></PrivateRoute>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default router;
