//import React, { useState } from 'react'
import '../login/login.scss';
import '../login/g-button/g-button.scss';
import imgLogo from '../../assets/Artboard 3.png';
import GoogleButton from './g-button/g-button';

const Login = () => {

  return (
    <section>
    <div className="login" id="login">
        <div className="form_login">
            <div className="copyRight" id="logo">
                <img src={imgLogo} alt="logo" />
            </div>
            <div>
                <label className="loginLabel" htmlFor="auth_login">Login</label>
                <input type="email" id="email" name="email" placeholder="Insira seu e-mail" />
            </div>
            <div>
                <label className="passwordLabel" htmlFor="auth_password">Senha</label>
                <input type="password" id="senha" name="senha" placeholder="Insira sua senha" />
            </div>
            <div id="button-container">

                <GoogleButton />

                <button id="default" type="submit">
                    Entrar
                </button>
            </div>
        </div>
        <footer>IM Designs ®</footer>
    </div>
</section>
  );
}

export default Login;
