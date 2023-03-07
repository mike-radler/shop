import React, {useContext, useState} from 'react'
import Container from "react-bootstrap/Container";
import {Alert, Button, Card, Form} from "react-bootstrap";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";

const Auth = observer(() => {
        const history = useNavigate()
        const {user} = useContext(Context)
        const location = useLocation()
        const isLogin = location.pathname === LOGIN_ROUTE
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [showError, setShowError] = useState(false);
        const [error, setError] = useState('')

        const click = async () => {
            try {
                if (isLogin) {
                    const data = await login(email, password);
                    user.setUser(data)
                    if (data.role === 'ADMIN') user.setIsAdmin(true)
                } else {
                    const data = await registration(email, password);
                    user.setUser(data)
                }
                user.setIsAuth(true)
                console.log(user.isAdmin)
                history(SHOP_ROUTE)
            } catch (e) {
                setShowError(true)
                setError(e.response.data.message)
            }
        }

        return (
            <Container
                className="d-flex justify-content-center align-items-center"
                style={{height: window.innerHeight - 54}}
            >
                {showError ?
                    <Alert
                        variant="danger"
                        onClose={() => setShowError(false)}
                        dismissible
                    >
                        <Alert.Heading>Ошибка!</Alert.Heading>
                        <p>
                            {error}
                        </p>
                    </Alert>
                    :
                    <Card style={{width: 600}} className="p-3">
                        <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                        <Form className="d-flex flex-column">
                            <Form.Control
                                className="mt-4"
                                placeholder="Введите email..."
                                value={email}
                                onChange={e => setEmail(e.target.value)}

                            />
                            <Form.Control
                                className="mt-2"
                                placeholder="Введите пароль..."
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}

                            />
                            <Card className="mt-2 d-flex justify-content-between" border={'light'}>
                                {isLogin ?
                                    <div>
                                        Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Регистрация</NavLink>
                                    </div>
                                    :
                                    <div>
                                        Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                                    </div>
                                }
                                {isLogin ?
                                    <Button
                                        className="mt-2 align-self-end"
                                        variant={"outline-dark"}
                                        onClick={click}
                                    >
                                        Войти</Button>
                                    :
                                    <Button
                                        className="mt-2 align-self-end"
                                        variant={"outline-dark"}
                                        onClick={click}

                                    >
                                        Регистрация</Button>
                                }
                            </Card>
                        </Form>
                    </Card>
                }
            </Container>
        );
    })
;

export default Auth;