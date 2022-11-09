import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import ServiceDetails from '../Pages/Services/ServiceDetails';
import ServiceField from '../Pages/Services/ServiceField';
import Services from '../Pages/Services/Services';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>


        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/servicefield',
          loader: () => fetch('http://localhost:5000/services'),
          element:<ServiceField></ServiceField>
        }
        ,
        {
          path:'/details/:id',
          loader:({params}) => fetch(`http://localhost:5000/services/${params.id}`),
          element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
        }
      ]
    }
  ])

  export default router