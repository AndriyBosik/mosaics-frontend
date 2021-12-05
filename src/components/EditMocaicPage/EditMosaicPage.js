import React, { useState } from "react";
import { useMessage } from "../../hooks/useMessage";
import Masonry from "react-masonry-component";
import ImageCard from "./../ImageCard/ImageCard";
import { Link, useParams } from "react-router-dom";
import { pages } from "./../../constants/pages";
import "./EditMosaicPage.css";
import { mosaics } from "../../data/mosaics";

function EditMosaicPage() {
    document.title = useMessage("edit_mosaic");

    const { id } = useParams();
    const mosaic = mosaics.find(mosaic => mosaic.id === id*1);
    const [mosaicState, setMosaicState] = useState(mosaic);

    return (
        <div className="window-width flex-auto EditMosaicPage">
            <div className="container">
                <div className="row">
                    <Link to={pages.createMosaic} className="btn-floating waves-effect waves-light add-new-tile brown lighten-1">
                        <i className="material-icons">add</i>
                    </Link>
                    <h4 className="s-center-align">{mosaicState.name}</h4>
                    <div className="s-vflex m-hflex mb10">
                        <div className="pr20 mb30 s-justify-align col-indent-left">{mosaicState.description}</div>
                        <div className="flex-auto s-vflex col">
                            <button className="btn waves-effect waves-light brown lighten-1">
                                {useMessage("make_private")}
                            </button>
                            <button className="btn waves-effect waves-light brown lighten-1 mt10">
                                {useMessage("link")}
                            </button>
                            <input type="text" placeholder={useMessage("theme")} value={mosaicState.theme} onChange={event => setMosaicState({
                                ...mosaicState,
                                theme: event.target.value
                            })} />
                        </div>
                    </div>
                    <Masonry className={'gallery'} options={{transitionDuration: 100}} updateOnEachImageLoad={true}>
                        {
                            mosaicState.tiles.map(tile => <ImageCard key={tile.id} imageUrl={tile.url} responsiveClassName="col s6 m4 clickable" />)
                        }
                    </Masonry>
                </div>
            </div>
        </div>
    );
}

export default EditMosaicPage;