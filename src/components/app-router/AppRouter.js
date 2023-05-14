import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import {adminRoutes, publicRoutes, userRoutes} from "../../routes";
import {NOT_FOUND_ROUTE} from "../../utils/consts";
import {useSelector} from "react-redux";
const AppRouter = () => {

    const isAuth = useSelector(state => state.users.isAuth)
    const role = useSelector(state => state.users.role)

    return (
        <Routes>
            {isAuth && role === 'admin' && adminRoutes.map(({path, Element}) =>
                <Route key={path} path={path} element={<Element/>} exact></Route>
            )}
            {isAuth && role === 'user' && userRoutes.map(({path, Element}) =>
                <Route key={path} path={path} element={<Element/>} exact></Route>
            )}
            {publicRoutes.map(({path, Element}) =>
                <Route key={path} path={path} element={<Element/>}></Route>
            )}
            <Route path="*" element={<Navigate to={NOT_FOUND_ROUTE} replace />} />
        </Routes>
    );
};

export default AppRouter;