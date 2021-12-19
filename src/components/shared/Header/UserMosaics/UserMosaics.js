import React, { useState, useEffect } from "react";
import { useMessage } from "../../../../hooks/useMessage";
import { application } from "../../../../constants/application";
import M from "materialize-css";
import { getUserMosaics } from "../../../../services/MosaicService";
import { getThemeByMosaicId } from "./../../../../services/ThemeService";

function UserBoards() {
    const [mosaics, setMosaics] = useState([]);

    useEffect(() => {
        setMosaics(getUserMosaics());
    }, []);

    useEffect(() => {
        M.FormSelect.init(document.querySelectorAll("select"), {});
    });

    const changeUserMosaic = event => {
        const mosaicId = event.target.value;
        const themeContainer = document.getElementById(application.themeContainerId);
        themeContainer.className = getThemeByMosaicId(mosaicId).title;
    }

    return (
        <div className="input-field px10 small-select s-vflex-center standart-color-select" defaultValue="none">
            <input type="hidden"/>
            <select onChange={changeUserMosaic}>
                <option value="none disabled">{useMessage("choose_mosaic")}</option>
                {
                    mosaics.map(mosaic => <option key={mosaic.id} value={mosaic.id}>{mosaic.name}</option>)
                }
            </select>
        </div>
    );
}

export default UserBoards;