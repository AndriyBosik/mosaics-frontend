import React from "react";
import { useLink } from "../../../hooks/useLink";
import { pages } from "../../../constants/pages";
import "./AddTileButton.css";

const AddTileButton = () => {
    const link = useLink(pages.createTile);
    return (
        <a href={link} className="AddTileButton btn-floating btn-medium waves-effect waves-light bg-color"><i class="material-icons">add</i></a>
    );
}

export default AddTileButton;