import React, { useState, useEffect } from "react";
import TilePhoto from "../EditTilePage/TilePhoto/TilePhoto";
import { Link } from "react-router-dom";
import { useMessage } from "./../../hooks/useMessage";
import M from "materialize-css";

const tile = {
    url: "/tile.jpeg",
    tags: ["custom-tag", "winger", "wall"]
};

function CreateTilePage() {
    document.title = useMessage("create_tile");

    const [tag, setTag] = useState("");
    const [link, setLink] = useState("");

    useEffect(() => {
        M.updateTextFields();
    }, []);

    const createTile = event => {
        event.preventDefault();
        console.log("Creating tile...");
    }

    const keyDown = event => {
        if (event.key !== "Enter") {
            return;
        }
        setTag("");
    }

    return (
        <div className="window-width flex-auto">
            <div className="container">
                <div className="row pt30">
                    <div className="col s12 m4">
                        <TilePhoto tile={tile} />
                    </div>
                    <div className="col s12 m8 mosaic-form">
                        <form onSubmit={createTile}>
                            <div className="input-field full-width">
                                <input id="your-tag" type="text" value={tag} onChange={event => setTag(event.target.value)} onKeyDown={keyDown} />
                                <label htmlFor="your-tag">{useMessage("tag")}</label>
                            </div>
                            <div className="input-field full-width">
                                <input id="link" type="text" value={link} onChange={event => setLink(event.target.value)} />
                                <label htmlFor="theme">{useMessage("link")}</label>
                            </div>
                            <div className="s-hflex-end">
                                <button type="submit" className="btn waves-effect waves-light brown lighten-1">
                                    {useMessage("create")}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateTilePage;