import React from "react";
import { isYoutubeVideo } from "../../../handlers/TileHandler";

const VideoTile = ({tile}) => {
    return (
        <div className="s-hflex z-depth-3 full-width">
            {
                isYoutubeVideo(tile.value) ? (
                    <iframe className="full-width" style={{minHeight: 1}} src={tile.value}></iframe>
                ) : (
                    <video controls className="full-width">
                        <source src={tile.value} />
                    </video>
                )
            }
        </div>
    );
}

export default VideoTile;