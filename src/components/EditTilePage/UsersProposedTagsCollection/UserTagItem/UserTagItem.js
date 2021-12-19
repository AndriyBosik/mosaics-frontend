import React from "react";

function UserTagItem({tag}) {
    return (
        <li className="UserTagItem collection-item s-hflex">
            <div className="flex-auto s-vflex-center main-color-content">{tag}</div>
            <div className="tag-options s-hflex">
                <div className="add-tag clickable mx10">
                    <i className="material-icons teal-text weight-strong">add</i>
                </div>
                <div className="remove-tag clickable">
                    <i className="material-icons red-text weight-strong">remove</i>
                </div>
            </div>
        </li>
    );
}

export default UserTagItem;