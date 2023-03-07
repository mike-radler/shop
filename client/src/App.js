import React, {useContext, useEffect, useState} from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userAPI";
import {Spinner} from "react-bootstrap";
import Footer from "./components/Footer";
import classes from "./css/style.css";

const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        check().then(data => {
            user.setUser(data)
            user.setIsAuth(true)
            if (data.role === 'ADMIN') user.setIsAdmin(true)
        }).finally(() => setLoading((false)))
    }, [])


    if (loading) {
        return <div style={{marginTop: 200}} className='d-flex justify-content-center align-items-center'
        >
            <Spinner animation="border" role="status"/>
        </div>
    }

    return (
        <BrowserRouter>
                <NavBar/>
                <AppRouter/>
        </BrowserRouter>
    );
});

export default App;
