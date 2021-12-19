import React from "react";

const AudioTile = ({ tile }) => {
    return (
        <audio className="z-depth-3 full-width" controls src={tile.value}>
                Your browser does not support the
                <code>audio</code> element.
        </audio>
    );
}

export default AudioTile;