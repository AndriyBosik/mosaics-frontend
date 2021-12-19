import React, { useState, useEffect } from "react";
import PageNotFound from "./../PageNotFound/PageNotFound";
import { checkPermission } from "./../../handlers/PermissionsHandler";
import { history } from "./../../handlers/HistoryHandler";
import { parseUrl } from "./../../handlers/LinkHandler";
import LoadingPage from "./../LoadingPage/LoadingPage";
import { Children } from "react/cjs/react.production.min";

const PermissionBoundary = ({children}) => {
    const [, url] = parseUrl(window.location.pathname);

    const [allowed, setAllowed] = useState(0);

    useEffect(() => {
        const result = checkPermission(url);
        setAllowed(result ? 1 : -1);
    }, [url]);

    useEffect(() => {
        const disposer = history.listen(history => {
            const [, url] = parseUrl(history.location.pathname);
            setAllowed(checkPermission(url) ? 1 : -1);
        });

        return disposer;
    });

    if (allowed === 1) {
        return children;
    } else if (allowed === -1) {
        return <PageNotFound />;
    }
    return <LoadingPage />
}

export default PermissionBoundary;