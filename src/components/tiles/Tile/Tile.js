import React from "react";
import AudioTile from "../AudioTile/AudioTile";
import ImageTile from "../ImageTile/ImageTile";
import QuoteTile from "../QuoteTile/QuoteTile";
import VideoTile from "../VideoTile/VideoTile";

const Tile = ({responsiveClassName, tile}) => {
    return (
        <div className={responsiveClassName}>
            <div className="py5 clickable">
                {
                    {
                        'photo': <ImageTile tile={tile} />,
                        'audio': <AudioTile tile={tile} />,
                        'quote': <QuoteTile tile={tile} />,
                        'video': <VideoTile tile={tile} />
                    }[tile.type]
                }
            </div>
        </div>
    );
}

export default Tile;