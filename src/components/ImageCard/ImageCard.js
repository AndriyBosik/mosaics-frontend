import React from "react";

function ImageCard({
    imageUrl,
    isClickable = true,
    responsiveClassName = "",
    imageAlt = "image",
    editable = false,
    editClickCallback = () => {}
}) {
    const callCallback = event => {
        event.preventDefault();
        event.stopPropagation();
        editClickCallback(event);
    }

    return (
        <div className={responsiveClassName}>
            <div className="py5">
                {
                    editable ? (
                        <div className="top-right-element s-hflex" onClick={callCallback}>
                            <div className="clickable tooltipped waves-light blue-text text-darken-3 text-hoverable">
                                <i className="material-icons small">edit</i>
                            </div>
                        </div>
                    ) : null
                }
                <img className={`${isClickable ? "clickable" : ""} z-depth-3 full-width`} src={imageUrl} alt={imageAlt} />
            </div>
        </div>
    );
}

export default ImageCard;