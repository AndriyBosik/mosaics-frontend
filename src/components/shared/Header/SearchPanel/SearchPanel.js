import React from "react";
import { useMessage } from "./../../../../hooks/useMessage";
import "./SearchPanel.css";

function SearchPanel() {
    return (
        <div className="flex-auto s-hflex-center px50 SearchPanel">
            <input placeholder={useMessage("search")} type="text" className="search-field" />
        </div>
    );
}

export default SearchPanel;