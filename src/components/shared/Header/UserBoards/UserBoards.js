import React, { useEffect } from "react";
import { useMessage } from "./../../../../hooks/useMessage";
import M from "materialize-css";

function UserBoards() {
    useEffect(() => {
        M.FormSelect.init(document.querySelectorAll("select"), {});
    });

    return (
        <div className="input-field px10 small-select s-vflex-center standart-color-select" defaultValue="none">
            <input type="hidden"/>
            <select>
                <option value="none disabled">{useMessage("choose_board")}</option>
                <option value="board-1">Board 1</option>
                <option value="board-2">Board 2</option>
                <option value="board-3">Board 3</option>
            </select>
        </div>
    );
}

export default UserBoards;