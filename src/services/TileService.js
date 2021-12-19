import { tiles } from "./../data/tiles";

export const getTilesByUserId = userId => {
    return tiles.filter(tile => tile.user_id*1 === userId*1);
}