import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { FcGoogle } from "react-icons/fc";


const clientId = "Your-Client-Id";   //criar credencial na plataforma de autenticacao google

function GoogleButton() {

    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);
    const onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        setShowloginButton(false);
        setShowlogoutButton(true);
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
    };

    return (
        <div>
            { showloginButton ?
                <GoogleLogin
                    clientId={clientId}
                    // botao design nativo Google em Off
                    
                    render={renderProps => (
                        <button id="google_B" onClick={renderProps.onClick} disabled={renderProps.disabled}><FcGoogle /> Logar por Google</button>
                      )} 
                        
                    buttonText="Sign In"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                /> : null}

            { showlogoutButton ?
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Sign Out"
                    onLogoutSuccess={onSignoutSuccess}
                >
                </GoogleLogout> : null
            }
        </div>
    );
}
export default GoogleButton;