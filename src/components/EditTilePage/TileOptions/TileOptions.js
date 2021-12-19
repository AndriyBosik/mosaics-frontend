import React from "react";
import { useMessage } from "./../../../hooks/useMessage";

function TileOptions() {
    return (
        <div className="s-vflex">
            <button type="button" className="btn waves-effect waves-light brown lighten-1">
                {useMessage("apply")}
            </button>
            <button type="button" className="btn waves-effect waves-light red mt10">
                {useMessage("delete")}
            </button>
        </div>
    );
}

export default TileOptions;