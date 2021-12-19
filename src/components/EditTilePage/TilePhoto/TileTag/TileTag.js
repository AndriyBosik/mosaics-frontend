import React from "react";
import "./TileTag.css";

function TileTag({tag}) {
    return (
        <span className="TileTag new badge orange lighten-1 badge-left s-hflex" data-badge-caption="">
            <span className="white-text weight-normal">{tag}</span>
            <i className="material-icons tiny s-vflex-center clickable remove-tag">close</i>
        </span>
    );
}

export default TileTag;