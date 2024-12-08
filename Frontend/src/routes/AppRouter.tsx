import { createBrowserRouter, RouterProvider } from 'react-router-dom';



// PAGES
import Home from '@pages/Home.tsx';
import Categories from '@pages/Categories.tsx';
import Products from '@pages/Products.tsx';
import AboutUs from '@pages/AboutUs.tsx';
import Register from '@pages/Register.tsx';
import Login from '@pages/Login.tsx';
import Error from '@pages/Error.tsx';
import App from 'src/App';


const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <Error/>,
      children: [
        {
          index:true,
          element: <Home/>,
        },
        {
          path: 'categories',
          element: <Categories/>,
        },
        {
          path: '/categories/products/:prefix',
          element: <Products/>,
          loader : ({params}) => {
            console.log(params.prefix);
            if (typeof params.prefix !== 'string' ||
                !/^[a-z]+$/i.test(params.prefix)
            ) {
                throw new Response("Bad Request",{
                    statusText:"Category not found",
                    status: 400,
                });
            }
            return true;
          }
        },
        {
          path: 'about-us',
          element: <AboutUs/>,
        },
        {
            path: 'login',
            element: <Login/>,
          },
          {
            path: 'register',
            element: <Register/>,
          },
      ],
    },
    
  ]);

const AppRouter = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default AppRouter
