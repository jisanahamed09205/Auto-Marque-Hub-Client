import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import LogIn from '../Pages/LogIn/LogIn';
import Register from '../Pages/Register/Register';
import AddProduct from '../Pages/AddProduct/AddProduct';
import PrivateRoute from './PrivateRoute';
import MyCart from '../Pages/MyCart/MyCart';
import Update from '../Pages/Update/Update';

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <LogIn></LogIn>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path:'/addProduct',
          element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
        },
        {
          path: '/myCart',
          element: <PrivateRoute><MyCart></MyCart></PrivateRoute>
        },
        {
          path: '/update',
          element: <PrivateRoute><Update></Update></PrivateRoute>
        }
      ]
    },
  ]);
export default router;