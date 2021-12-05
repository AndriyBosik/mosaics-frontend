import React from "react";
import Logo from "./Logo";
import SearchPanel from "./SearchPanel/SearchPanel";
import RightPanel from "./RightPanel/RightPanel";
import "./Header.css";

function Header() {
    return (
        <header>
            <div className="navbar-fixed">
                <nav id="navbar" className="navbar">
                    <div className="nav-wrapper orange lighten-3">
                        <div className="container">
                            <div className="row">
                                <div className="full-width s-hflex">
                                    <Logo />
                                    <SearchPanel />
                                    <RightPanel />
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;