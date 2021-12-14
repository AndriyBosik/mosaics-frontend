import { useState, useEffect } from "react";
import { history } from "../handlers/HistoryHandler";
import { format } from "../handlers/StringHandler";
import { getMessage } from "../handlers/MessageHandler";

export const useMessage = (alias, data = {}) => {
    const [message, setMessage] = useState(format(getMessage(alias), translateData(data, window.location.pathname)));

    useEffect(() => {
        const disposer = history.listen(location => {
            setMessage(format(getMessage(alias, location.pathname), translateData(data, location.pathname)));
        });

        return disposer;
    }, [alias, data]);

    return message;
}

const translateData = (data, pathname) => {
    const translated = {};
    const keys = Object.keys(data);
    for (let key of keys) {
        translated[key] = getMessage(data[key], pathname);
    }
    return translated;
}