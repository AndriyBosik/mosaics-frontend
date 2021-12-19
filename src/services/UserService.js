import { users } from "./../data/users";

export const getUserByNickname = nickname => {
    return users.find(user => user.nickname === nickname);
}

export const loginUser = (login, password) => {
    const user = users.find(user => user.nickname === login);
    return user != null && user.password === password ? removePasswordFromUser(user) : null;
}

const removePasswordFromUser = user => {
    return {
        ...user,
        password: null
    };
}