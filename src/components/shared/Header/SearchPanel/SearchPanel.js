import React, { useState } from "react";
import { useMessage } from "./../../../../hooks/useMessage";
import { useNavigate, useLocation } from "react-router-dom";
import { generateUrl } from "../../../../handlers/LinkHandler";
import { pages } from "../../../../constants/pages";
import "./SearchPanel.css";

function SearchPanel() {
    const search = new URLSearchParams(useLocation().search).get("search");

    const [query, setQuery] = useState(search ? search : "");

    const navigate = useNavigate();

    const handleKeyDown = event => {
        if (event.key === "Enter") {
            navigate({
                pathname: generateUrl(pages.search),
                search: "?search=" + query
            });
        }
    }

    return (
        <div className="flex-auto s-hflex-center px50 SearchPanel">
            <input placeholder={useMessage("search")} value={query} onChange={event => setQuery(event.target.value)} type="text" className="search-field" onKeyDown={handleKeyDown} />
        </div>
    );
}

export default SearchPanel;