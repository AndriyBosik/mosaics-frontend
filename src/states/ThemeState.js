import { makeAutoObservable } from "mobx";

class ThemeState {
    theme = 'antique';

    constructor() {
        makeAutoObservable(this);
    }

    changeTheme(theme) {
        this.theme = theme;
    }
}