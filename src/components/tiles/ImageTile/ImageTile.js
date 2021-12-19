import React from "react";

const ImageTile = ({tile}) => {
    return (
        <img className="full-width z-depth-3" src={tile.value} alt="Image" />
    );
}

export default ImageTile;