import React from "react";
import "./QuoteTile.css";

const QuoteTile = ({tile}) => {
    return (
        <div className="QuoteTile p10 z-depth-3">
            {tile.value}
        </div>
    );
}

export default QuoteTile;