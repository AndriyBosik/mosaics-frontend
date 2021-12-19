import { localization } from "../constants/localization";
import { checkLanguage } from "./../handlers/LangHandler";

export const generateUrl = (to, lang = null) => {
    if (lang != null) {
        lang = lang.toLowerCase();
    }
    const [urlLang, ] = parseUrl(window.location.pathname);
    if (lang == null) {
        return "/" + urlLang + to;
    }
    return "/" + lang + to;
}

export const parseUrl = (pathname) => {
    const parts = pathname.split("/").splice(1);
    const defaultLanguage = localization.defaultLanguage;
    
    if (parts.length === 1) {
        if (parts[0] === "") {
            return [defaultLanguage, "/"];
        } else {
            checkLanguage(parts[0]);
            return [parts[0], "/"];
        }
    } else {
        return [parts[0], "/" + parts.splice(1).join("/")];
    }
}