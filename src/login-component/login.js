import React, { useCallback, useContext, useState } from "react";
import { withRouter, Redirect } from "react-router-dom";
import app from "../base.js";
import { AuthContext } from "./Auth.js";
import './login.css';



const Login = ({ history }) => {

    // Для авторизации использовал Firebase. Для входа использовать test@test.com  / 123456

    // Стейты для ошибок
    const [wrongLogin, setWrongLogin] = useState(false)
    const [emptyError, setEmptyError] = useState(false)


    // Отправка запроса для проверки логин и пароля
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            if (email.value && password.value) {
                try {
                    await app
                        .auth()
                        .signInWithEmailAndPassword(email.value, password.value);
                    history.push("/admin");
                } catch (error) {
                    setWrongLogin(true)
                }
            } else setEmptyError(true)
        },
        [history]
    );

    const { currentUser } = useContext(AuthContext);


    if (!currentUser) {
        return <Redirect to="/" />;
    }



    return (
        <div className="page-login">
            <div className="login-form">
                <div className="login-heading">Вход</div>
                <form onSubmit={handleLogin}>
                    <span>
                        Логин
            <input name="email" type="email" placeholder="Email" className='login-input' />
                    </span>
                    <span>
                        Пароль
            <input name="password" type="password" placeholder="Пароль" className='password-input' />
                    </span>
                    <div className='enter-error'>
                        {
                            wrongLogin ? 'Введите верный логин и пароль' : '' ||
                                emptyError ? 'Поля логин и пароль не могут быть пустыми' : ''
                        }
                    </div>

                    <button type="submit">Войти</button>
                </form>
            </div>
        </div>
    );
};

export default withRouter(Login);