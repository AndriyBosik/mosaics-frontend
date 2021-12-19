import { pages } from "./../constants/pages";
import { getUserRole } from "./UserHandler";
import UrlPattern from "url-pattern";

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
        const urlPattern = new UrlPattern(url, {
            segmentValueCharset: "a-zA-Z0-9."
        });
        console.log(requestUrl, urlPattern.match(requestUrl));
        if (urlPattern.match(requestUrl) != null) {
            return permissions[url].includes(role);
        }
    }
    return false;
}