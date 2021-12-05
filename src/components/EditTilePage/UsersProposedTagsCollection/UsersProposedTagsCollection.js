import React, { useState } from "react";
import UserTagItem from "./UserTagItem/UserTagItem";
import "./UsersProposedTagsCollection.css";
import { useMessage } from "../../../hooks/useMessage";

function UsersProposedTagsCollection({proposedTags}) {
    const [tag, setTag] = useState("");

    const handleKeyDown = event => {
        if (event.key !== "Enter") {
            return;
        }

        console.log("Adding new tag...", tag);
        setTag("");
    }

    return (
        <ul className="collection UsersProposedTagsCollection m0">
            <li className="collection-item tag-input">
                <input
                    type="text"
                    placeholder={useMessage("type_your_tag_here")}
                    value={tag}
                    onKeyDown={handleKeyDown}
                    onChange={event => setTag(event.target.value)} />
            </li>
            {
                proposedTags.map((tag, index) => <UserTagItem key={index} tag={tag} />)
            }
        </ul>
    );
}

export default UsersProposedTagsCollection;