import React, { useState, useEffect } from "react";
import { useMessage } from "../../hooks/useMessage";
import Masonry from "react-masonry-component";
import ImageCard from "./../ImageCard/ImageCard";
import { Link, useParams } from "react-router-dom";
import { pages } from "./../../constants/pages";
import "./EditMosaicPage.css";
import { getMosaicById } from "./../../services/MosaicService";
import { getThemeByMosaicId } from "./../../services/ThemeService";
import { setThemeWithoutSaving } from "./../../handlers/ThemeHandler";

function EditMosaicPage() {
    document.title = useMessage("edit_mosaic");

    const { id } = useParams();
    const [mosaic, setMosaic] = useState({
        tiles: []
    });

    useEffect(() => {
        const result = getMosaicById(id);
        const theme = getThemeByMosaicId(id);
        setMosaic(result);
        setThemeWithoutSaving(theme);
    }, []);

    return (
        <div className="window-width flex-auto EditMosaicPage">
            <div className="container">
                <div className="row">
                    <Link to={pages.createMosaic} className="btn-floating waves-effect waves-light add-new-tile brown lighten-1">
                        <i className="material-icons">add</i>
                    </Link>
                    <h4 className="s-center-align">{mosaic.name}</h4>
                    <div className="s-vflex m-hflex mb10">
                        <div className="pr20 mb30 s-justify-align col-indent-left">{mosaic.description}</div>
                        <div className="flex-auto s-vflex col">
                            <button className="btn waves-effect waves-light brown lighten-1">
                                {useMessage("make_private")}
                            </button>
                            <button className="btn waves-effect waves-light brown lighten-1 mt10">
                                {useMessage("link")}
                            </button>
                            <input type="text" placeholder={useMessage("theme")} value={mosaic.theme} onChange={event => setMosaic({
                                ...mosaic,
                                theme: event.target.value
                            })} />
                        </div>
                    </div>
                    <Masonry className={'gallery'} options={{transitionDuration: 100}} updateOnEachImageLoad={true}>
                        {
                            
                            mosaic.tiles.map(tile => <ImageCard key={tile.id} imageUrl={tile.url} responsiveClassName="col s6 m4 clickable" />)
                        }
                    </Masonry>
                </div>
            </div>
        </div>
    );
}

export default EditMosaicPage;