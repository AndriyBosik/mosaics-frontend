import React, { useState, useEffect } from "react";
import M from "materialize-css";
import { useMessage } from "../../hooks/useMessage";
import { useLink } from "./../../hooks/useLink";
import { loginUser } from "./../../services/UserService";
import { initUser } from "../../states/UserState";
import { pages } from "./../../constants/pages";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    document.title = useMessage("login");

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const homePage = useLink(pages.home);
    const navigate = useNavigate();
    const invalidData = useMessage("invalid_auth_data");

    useEffect(() => {
        M.updateTextFields();
    }, []);

    const tryLogin = event => {
        event.preventDefault();
        const user = loginUser(login, password);
        if (user != null) {
            initUser(user);
            navigate(homePage);
        } else {
            M.toast({html: invalidData});
        }
    }

    return (
        <div className="window-width flex-auto s-vflex-center">
            <div className="container">
                <div className="row">
                    <div className="col m4"></div>
                    <div className="col m4">
                        <form onSubmit={tryLogin}>
                            <div className="input-field full-width">
                                <input id="login" type="text" className="validate" value={login} onChange={event => setLogin(event.target.value)} />
                                <label htmlFor="login">{useMessage("login")}</label>
                            </div>
                            <div className="input-field full-width">
                                <input id="password" type="password" className="validate" value={password} onChange={event => setPassword(event.target.value)} />
                                <label htmlFor="password">{useMessage("password")}</label>
                            </div>
                            <div className="s-hflex-center">
                                <button type="submit" className="btn waves-effect waves-light brown lighten-1">
                                    {useMessage("login")}
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

export default LoginPage;