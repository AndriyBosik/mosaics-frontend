import { useLocation } from "react-router-dom";
import { checkLanguage } from "../handlers/LangHandler";
import { parseUrl } from "./../handlers/LinkHandler";

export const useLink = (to, language = null) => {
    const location = useLocation();

    const [lang, url] = parseUrl(location.pathname);
    checkLanguage(lang);
    
    return "/" + (language == null ? lang : language) + (to === "" ? url : to);
}