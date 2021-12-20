import { application } from "./../constants/application";

const THEME_KEY = "mosaics_theme";

export const setTheme = theme => {
    setThemeWithoutSaving(theme);
    saveTheme(theme);
}

export const setThemeWithoutSaving = theme => {
    const themeContainer = document.getElementById(application.themeContainerId);
    themeContainer.className = theme.title;
}

export const saveTheme = theme => {
    window.localStorage.setItem(THEME_KEY, theme);
}

export const extractTheme = () => {
    const theme = window.localStorage.getItem(THEME_KEY);
    return theme == null ? application.defaultTheme : theme;
}