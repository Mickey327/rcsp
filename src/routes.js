import Admin from "./pages/Admin";
import {
    ADMIN_ROUTE,
    CART_ROUTE, CHECKOUT_ROUTE,
    FAQ_ROUTE,
    LOGIN_ROUTE,
    PRODUCT_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE
} from "./utils/consts";
import Cart from "./pages/Cart";
import Auth from "./pages/Auth";
import FAQ from "./pages/FAQ";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
export const adminRoutes = [
    {
        path: ADMIN_ROUTE,
        Element: Admin
    },
]
export const userRoutes = [
    {
        path: CHECKOUT_ROUTE,
        Element: Checkout
    },
    {
        path: CART_ROUTE,
        Element: Cart
    },
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Element: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Element: Auth
    },
    {
        path: FAQ_ROUTE,
        Element: FAQ
    },
    {
        path: SHOP_ROUTE,
        Element: Shop
    },
    {
        path: PRODUCT_ROUTE + ':/id',
        Element: Product
    },
]