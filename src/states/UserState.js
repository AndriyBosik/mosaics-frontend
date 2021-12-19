const USER_STATE_KEY = "user-state";

export const getUser = () => {
    const user = JSON.parse(localStorage.getItem(USER_STATE_KEY));
    return user;
}

export const destroyUser = () => {
    localStorage.removeItem(USER_STATE_KEY);
}

export const initUser = user => {
    localStorage.setItem(USER_STATE_KEY, JSON.stringify(user));
}