import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './components/root.jsx';
import HomeComponets from './components/homecomponets';
import ProductDetails, {
  loader as productLoader,
} from './components/productdetails.jsx';
import ProductsComponent from './components/products/products.jsx';
import Cart from './components/cart.jsx';
<<<<<<< HEAD
import Login from './components/auth/login.jsx';
import Signup from './components/auth/signup.jsx';

import './app.css';

// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Root />,
//     children: [
//       {
//         path: '/',
//         element: <HomeComponets />,
//       },
//       {
//         path: '/product/:id',
//         element: <ProductDetails />,
//       },
//       {
//         path: '/cart',
//         element: <Cart />,
//       },
//       {
//         path: '/login',
//         element: <Cart />,
//       },
//       {
//         path: '/signup',
//         element: <Cart />,
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <Signup />
=======
import FilterComponent from './components/products/filter.jsx';
//import Login from './componets/auth/login.jsx';
//import Signup from './componets/auth/signup.jsx';

import './app.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <HomeComponets />,
      },
      {
        path: '/product/:id',
        element: <ProductDetails />,
        loader: productLoader,
      },
      {
        path: '/products',
        element: <ProductsComponent />,
        children: [{ index: true, element: <FilterComponent /> }],
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/login',
        element: <Cart />,
      },
      {
        path: '/signup',
        element: <Cart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
>>>>>>> e29470ba736c68d21c343b25d5f4d150ba89dd3a
  </React.StrictMode>
);
