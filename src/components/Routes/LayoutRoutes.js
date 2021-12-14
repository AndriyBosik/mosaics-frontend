import React from "react";
import { application } from "./../../constants/application";
import { extractTheme } from "../../handlers/ThemeHandler";
import { useLink } from "../../hooks/useLink";
import { Routes, Route } from "react-router-dom";
import { pages } from "../../constants/pages";
import Header from "../shared/Header/Header";
import HomePage from "../HomePage/HomePage";
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import CreateMosaicPage from "../CreateMosaicPage/CreateMosaicPage";
import CreateTilePage from "../CreateTilePage/CreateTilePage";
import ProfilePage from "../ProfilePage/ProfilePage";
import EditTilePage from "../EditTilePage/EditTilePage";
import SearchPage from "../SearchPage/SearchPage";
import EditMosaicPage from "../EditMocaicPage/EditMosaicPage";
import PermissionBoundary from "../PermissionBoundary/PermissionBoundary";

function LayoutRoutes() {
    const homePage = useLink(pages.home);
    const loginPage = useLink(pages.login);
    const registerPage = useLink(pages.register);
    const createMosaicPage = useLink(pages.createMosaic);
    const createTilePage = useLink(pages.createTile);
    const profilePage = useLink(pages.profile);
    const editTilePage = useLink(pages.editTile);
    const searchPage = useLink(pages.search);
    const editMosaicPage = useLink(pages.editMosaic);

    return (
        <div id={application.themeContainerId} className={extractTheme()}>
            <PermissionBoundary>
                <Header />
                <main className="flex-auto s-vflex">
                    <Routes>
                        {
                            [homePage, "/"].map((link, index) => <Route key={index} path={link} element={<HomePage />} />)
                        }
                        <Route path={loginPage} exact element={<LoginPage />} />
                        <Route path={registerPage} element={<RegisterPage />} />
                        <Route path={createMosaicPage} element={<CreateMosaicPage />} />
                        <Route path={createTilePage} element={<CreateTilePage />} />
                        <Route path={profilePage} element={<ProfilePage />} />
                        <Route path={editTilePage} element={<EditTilePage />} />
                        <Route path={searchPage} element={<SearchPage />} />
                        <Route path={editMosaicPage} element={<EditMosaicPage />} />
                    </Routes>
                </main>
            </PermissionBoundary>
        </div>
    );
}

export default LayoutRoutes;