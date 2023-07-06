import LandingPage from '../../module/hero'
import CartPage from  '../../module/Cart'
import { createBrowserRouter } from 'react-router-dom'

const routerList = createBrowserRouter ([
    {
        path: '/',
        element: <LandingPage />,
    },
    {
        path: 'cart',
        element: <CartPage/>,
    },
]);

export default routerList;
