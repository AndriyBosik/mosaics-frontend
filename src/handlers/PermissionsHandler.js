import { pages } from "./../constants/pages";
import { getUserRole } from "./UserHandler";
import { matchPath } from "react-router-dom";

const permissions = {
    [pages.home]: ["guest", "user"],
    [pages.login]: ["guest"],
    [pages.register]: ["guest"],
    [pages.createMosaic]: ["user"],
    [pages.createTile]: ["user"],
    [pages.profile]: ["guest", "user"],
    [pages.editTile]: ["user"],
    [pages.search]: ["guest", "user"],
    [pages.editMosaic]: ["user"]
};

export const checkPermission = url => {
    const role = getUserRole();
    return checkPermissionForRole(url, role);
}

const checkPermissionForRole = (url, role) => {
    if (typeof permissions[url] !== "undefined") {
        return permissions[url].includes(role);
    }
    return tryBruteForce(url, role);
}

const tryBruteForce = (requestUrl, role) => {
    const urls = Object.keys(permissions);
    for (const url of urls) {
        const match = matchPath(requestUrl, {
            path: url,
            exact: true,
            strict: false
        });
        if (match != null) {
            return permissions[url].includes(role);
        }
    }
    return false;
}