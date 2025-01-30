import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import PublicPage from './pages/PublicPage/PublicPage';
import Shop from './pages/Shop/Shop';
import PlantCare from './pages/PlantCare/PlantCare';
import Blogs from './pages/Blogs/Blogs';
import Sale from './components/Sale/Sale';
import New from './components/New/New';
import All from './components/All/All';
import Shoping from './components/Shop/Shop';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import ShoppingCheckout from './pages/ShoppingCheckout/ShoppingCheckout';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <PublicPage />,
      children: [
        {
          index: true,
          element: <All />
        },
        {
          path: '/new',
          element: <New />
        },
        {
          path: '/sale',
          element: <Sale />
        },
      ]
    },
    {
      path: '/shop',
      element: <Shop />
    },
    {
      path: '/plant-care',
      element: <PlantCare />
    },
    {
      path: '/blogs',
      element: <Blogs />
    },
    {
      path:'/shop/shopping-cart',
      element: <ShoppingCart />
    },
    {
      path:'/shop/shopping-checkout',
      element: <ShoppingCheckout />
    },
    {
      path: '/shop/:productId',
      element: <Shop />
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
