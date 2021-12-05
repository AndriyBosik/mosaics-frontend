import React, { useEffect, useState } from "react";
import UserAvatar from "../UserAvatar/UserAvatar";
import M from "materialize-css";
import { useMessage } from "../../hooks/useMessage";

function RegisterPage() {
    document.title = useMessage("register");

    const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    useEffect(() => {
        M.updateTextFields();
    }, []);

    const tryRegister = event => {
        event.preventDefault();
    }

    return (
        <div className="window-width flex-auto s-vflex-center">
            <div className="container">
                <div className="row">
                    <div className="col m4"></div>
                    <div className="col m4">
                        <form onSubmit={tryRegister}>
                            <UserAvatar />
                            <div className="input-field full-width">
                                <input id="login" type="text" className="validate" value={login} onChange={event => setLogin(event.target.value)} />
                                <label htmlFor="login">{useMessage("login")}</label>
                            </div>
                            <div className="input-field full-width">
                                <input id="email" type="email" className="validate" value={email} onChange={event => setEmail(event.target.value)} />
                                <label htmlFor="email">{useMessage("email")}</label>
                            </div>
                            <div className="input-field full-width">
                                <input id="password" type="text" className="validate" value={password} onChange={event => setPassword(event.target.value)} />
                                <label htmlFor="password">{useMessage("password")}</label>
                            </div>
                            <div className="input-field full-width">
                                <input id="confirm-password" type="password" className="validate" value={confirmPassword} onChange={event => setConfirmPassword(event.target.value)} />
                                <label htmlFor="password">{useMessage("confirm_password")}</label>
                            </div>
                            <div className="s-hflex-center">
                                <button type="submit" className="btn waves-effect waves-light brown lighten-1">
                                    {useMessage("register")}
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="col m4"></div>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;