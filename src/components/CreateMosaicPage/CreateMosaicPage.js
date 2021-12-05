import React, { useState, useEffect } from "react";
import { useMessage } from "./../../hooks/useMessage";
import M from "materialize-css";

function CreateMosaicPage() {
    document.title = useMessage("create_mosaic");

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [theme, setTheme] = useState("");

    useEffect(() => {
        M.updateTextFields();
    }, []);

    const createMosaic = event => {
        event.preventDefault();
        console.log("Creating Mosaic...");
    }

    return (
        <div className="window-width flex-auto">
            <div className="container">
                <div className="row pt30">
                    <div className="col s12 m4 mosaic-photo">
                        <img src="/mosaic.jpeg" alt="mosaic" className="full-width z-depth-1" />
                    </div>
                    <div className="col s12 m8 mosaic-form">
                        <form onSubmit={createMosaic}>
                            <div className="input-field full-width">
                                <input id="title" type="text" value={title} onChange={event => setTitle(event.target.value)} />
                                <label htmlFor="title">{useMessage("title")}</label>
                            </div>
                            <div className="input-field full-width">
                                <textarea id="description" className="materialize-textarea" value={description} onChange={event => setDescription(event.target.value)}></textarea>
                                <label htmlFor="description">{useMessage("description")}</label>
                            </div>
                            <div className="input-field full-width">
                                <input id="theme" type="text" value={theme} onChange={event => setTheme(event.target.value)} />
                                <label htmlFor="theme">{useMessage("theme")}</label>
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

export default CreateMosaicPage;