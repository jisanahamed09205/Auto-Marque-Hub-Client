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
import ProductPage from '../Pages/Home/ProductPage';
import ViewDetails from '../Pages/ViewDetails/ViewDetails';

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('https://auto-marque-hub-server.vercel.app/brands')
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
          path: '/update/:id',
          element: <PrivateRoute><Update></Update></PrivateRoute>,
          loader: ({params}) => fetch(`https://auto-marque-hub-server.vercel.app/productsKaku/${params.id}`)
        },
        {
          path: '/productPage/:name',
          element: <ProductPage></ProductPage>,
          loader: ({params}) => fetch(`https://auto-marque-hub-server.vercel.app/products/${params.name}`)
        },
        {
          path: '/details/:id',
          element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
          loader: ({params}) => fetch(`https://auto-marque-hub-server.vercel.app/productDetails/${params.id}`)
        }
      ]
    },
  ]);
export default router;