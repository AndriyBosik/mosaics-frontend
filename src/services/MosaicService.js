import { themes } from "./../data/themes";
import { mosaics } from "./../data/mosaics";

export const getUserMosaics = userId => {
    return mosaics;
}

export const getUserMosaicsWithThemes = userId => {
    const items = mosaics;
    items.map(item => item.theme = themes.find(theme => theme.id*1 === item.theme_id*1));
    return items;
}

export const getMosaicById = mosaicId => {
    return mosaics.find(mosaic => mosaic.id*1 === mosaicId*1);
}

export const getMosaicTiles = mosaicId => {
    const mosaic = getMosaicById(mosaicId);
    if (typeof mosaics == "undefined") {
        return [];
    }
    return mosaic.tiles;
}