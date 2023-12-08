import { useState } from "react";

import { initiateAuth, forgotPassword } from "../../services/AuthService";

import style from "./login.module.css";

function Login({ loading }) {

    const [isForgotPassword, setIsForgotPassword] = useState(false);

    const handleLoginSubmit = async (event) => {
        event.preventDefault();
        loading(true);
        const username = event.target.username.value;
        const pswrd = event.target.pswrd.value;

        console.log(username);
        console.log(pswrd);

        const authResult = await initiateAuth(username, pswrd);
        localStorage.setItem('idToken', authResult.AuthenticationResult.IdToken);
        loading(false);
    };

    const handleForgotPassword = (isForgotPsd) => {
        setIsForgotPassword(isForgotPsd);
    };

    const handleForgotPasswordSubmit = async (event) => {
        event.preventDefault();
        loading(true);
        const username = event.target.username.value;

        await forgotPassword(username);
        loading(false);
    };

    if (isForgotPassword) {
        return (
            <form onSubmit={handleForgotPasswordSubmit}>
                <div className={style.headingsContainer}>
                    <h3>Forgot Password</h3>
                </div>
                <div className={style.mainContainer}>
                    <label htmlFor="username">Your username</label>
                    <input type="email" placeholder="Enter Username" name="username" required />
                    <br /><br />
                    <button type="Next">Submit</button>
                    <br />
                    <div className={style.subcontainer}>
                        <p className={style.forgotpsd}> <a href="#" onClick={() => handleForgotPassword(false)} >&larr; Back</a></p>
                    </div>
                </div>
            </form>
        );
    }
    else {
        return (
            <form onSubmit={handleLoginSubmit}>
                <div className={style.headingsContainer}>
                    <h3>Sign In</h3>
                </div>
                <div className={style.mainContainer}>
                    <label htmlFor="username">Your username</label>
                    <input type="email" placeholder="Enter Username" name="username" required />
                    <br /><br />
                    <label htmlFor="pswrd">Your password</label>
                    <input type="password" placeholder="Enter Password" name="pswrd" required />
                    <div className={style.subcontainer}>
                        <p className={style.forgotpsd}> <a href="#" onClick={() => handleForgotPassword(true)} >Forgot Password?</a></p>
                    </div>
                    <button type="Next">Login</button>
                </div>
            </form>
        );
    }
}

export default Login;