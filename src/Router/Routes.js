import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import ServiceField from '../Pages/Services/ServiceField';
import Services from '../Pages/Services/Services';

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
      ]
    }
  ])

  export default router