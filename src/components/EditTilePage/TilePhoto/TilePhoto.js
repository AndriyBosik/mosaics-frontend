import React from "react";
import TileTag from "../../TileTag/TileTag";

function TilePhoto({tile}) {
    return (
        <div className="tile-photo s-vflex">
            <img src={tile.url} alt="tile" className="full-width z-depth-1" />
            <div className="tags pt5">
                {
                    tile.tags.map((tag, index) => <TileTag key={index} tag={tag} showCloseButton={true} />)
                }
            </div>
        </div>
    );
}

export default TilePhoto;