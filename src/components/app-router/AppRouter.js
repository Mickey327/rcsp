import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../../routes";
import {SHOP_ROUTE} from "../../ulits/consts";
import {useSelector} from "react-redux";
const AppRouter = () => {
    const isAuth = useSelector(state => state.users.isAuth)
    console.log("AppRouter isAuth:" + isAuth)
    return (
        <Routes>
            {isAuth && authRoutes.map(({path, Element}) =>
                <Route key={path} path={path} element={<Element/>} exact></Route>
            )}
            {publicRoutes.map(({path, Element}) =>
                <Route key={path} path={path} element={<Element/>} exact></Route>
            )}
            <Route path="*" element={<Navigate to={SHOP_ROUTE} replace />} />
        </Routes>
    );
};

export default AppRouter;