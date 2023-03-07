import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import {adminRoutes, authRoutes, publicRoutes} from "../routes";
import {SHOP_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {useContext} from 'react';

const AppRouter = () => {
    const {user} = useContext(Context)
    return (
        <Routes>
            {adminRoutes.map(({path, Component}) =>
            <Route key={path} path={path} element={<Component/>} exact/>)
            }
            {authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>)
            }
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            <Route path='*' element={<Navigate to={SHOP_ROUTE}/>}/>

        </Routes>
    );
};

export default AppRouter;