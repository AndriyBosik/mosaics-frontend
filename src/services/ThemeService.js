import { application} from "../constants/application";
import { themes } from "./../data/themes";
import { mosaics } from "./../data/mosaics";

export const getAllThemes = () => {
    return themes;
}

export const getThemeById = themeId => {
    return themes.find(theme => theme.id*1 === themeId);
}

export const getThemeByMosaicId = mosaicId => {
    const mosaic = mosaics.find(mosaic => mosaic.id*1 === mosaicId*1);
    if (typeof mosaic === "undefined") {
        return application.defaultTheme;
    }
    return getThemeById(mosaic.theme_id);
}