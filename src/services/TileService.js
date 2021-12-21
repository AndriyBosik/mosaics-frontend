import { tiles } from "./../data/tiles";

export const getTilesByUserId = userId => {
    return tiles.filter(tile => tile.user_id*1 === userId*1);
}

export const getTilesByTagLike = tag => {
    return tiles.filter(tile => containTagLike(tile.tags, tag));
}

const containTagLike = (tags, tag) => {
    return tags.filter(t => t.toLowerCase().includes(tag.toLowerCase())).length > 0;
}