import React, { useEffect, useRef } from "react";
import { generateUrl, parseUrl } from "../../../../handler/LinkHandler";
import { history } from "./../../../../handler/HistoryHandler";
import M from "materialize-css";
import "./Langs.css";
import { getSelectOptions } from "../../../../handler/html/SelectHandler";

function Langs() {
    const selectRef = useRef(null);

    const [currentLanguage, ] = parseUrl(window.location.pathname);

    useEffect(() => {
        const elems = document.querySelectorAll('select');
        M.FormSelect.init(elems, {});
    }, []);

    const languageChanged = event => {
        const [ , currentUrl] = parseUrl(window.location.pathname);
        const lang = event.target.value.toLowerCase();
        setValueForSelect(selectRef.current, lang);
        const link = generateUrl(currentUrl, lang);
        history.push(link);
    }

    return (
        <div className="input-field Langs small-select px10 s-vflex-center standart-color-select">
            <select ref={selectRef} defaultValue={currentLanguage} onChange={languageChanged}>
                <option value="en">EN</option>
                <option value="ua">UA</option>
                <option value="ru">RU</option>
            </select>
        </div>
    );
}

export default Langs;

const setValueForSelect = (selectElement, value) => {
    const options = getSelectOptions(selectElement);
    const values = options.map(option => option.value);
    const selectedIndex = values.indexOf(value);
    if (selectedIndex !== -1) {
        selectElement.selectedIndex = selectedIndex;
    }
}