import React from "react";

function ImageCard({
    imageUrl,
    responsiveClassName="",
    imageAlt="image"
}) {
    return (
        <div className={responsiveClassName}>
            <div className="py5">
                <img className="clickable z-depth-3 full-width" src={imageUrl} alt={imageAlt} />
            </div>
        </div>
    );
}

export default ImageCard;