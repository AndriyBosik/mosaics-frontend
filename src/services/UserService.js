import { users } from "./../data/users";

export const getUserByNickname = nickname => {
    return users.find(user => user.nickname === nickname);
}