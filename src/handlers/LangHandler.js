import { localization } from "../constants/localization";

export const checkLanguage = (language) => {
    if (localization.availableLanguages.indexOf(language.toLowerCase()) === -1) {
        throw {
            code: 404,
            message: "Page not found"
        };
    }
}