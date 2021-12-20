import React from "react";
import "./TileTag.css";

function TileTag({tag, showCloseButton = false}) {
    return (
        <span className="TileTag new badge orange lighten-1 badge-left s-hflex" data-badge-caption="" style={{minWidth: "auto"}}>
            <span className="white-text weight-normal">{tag}</span>
            {
                showCloseButton ? (
                    <i className="material-icons tiny s-vflex-center clickable remove-tag">close</i>
                ) : (
                    null
                )
            }
        </span>
    );
}

export default TileTag;