import React, {useContext} from "react";
import {Context} from "../index";
import {NavLink, useNavigate} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {DEVICE_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, ADMIN_ROUTE, BASKET_ROUTE} from "../utils/consts";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import data from "bootstrap/js/src/dom/data";

const NavBar = observer(() => {
    const {user, device} = useContext(Context)

    const history = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        user.setIsAdmin(false)
        localStorage.setItem('token', {})
        history(SHOP_ROUTE)
    }

    const click = () => {
        //history(SHOP_ROUTE)
        device.selectedBrand={}
    }

    return (
        <Navbar bg="light" variant="light">
            <Container>
                <NavLink style={{textDecoration: "none"}}
                         to={SHOP_ROUTE}
                         onClick={click}
                >
                    <Navbar.Brand>Home</Navbar.Brand>
                </NavLink>
                {user._isAuth ?
                    <Nav className="ml-auto">
                        {user.isAdmin ?
                            <Button variant={"outline-dark"}
                                    className="me-2"
                                    onClick={() => history(ADMIN_ROUTE)}
                            >
                                Админ панель</Button>
                            :
                            <div></div>
                        }
                        <Button variant={"outline-dark"}
                                onClick={() => console.log(device.brands.at(1))}
                        >
                            Корзина</Button>
                        <Button variant={"outline-dark"}
                                className="ms-2"
                                onClick={logOut}
                        >
                            Выйти</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Button variant={"outline-dark"}
                                onClick={() => history(LOGIN_ROUTE)}
                        >
                            Авторизация
                        </Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;