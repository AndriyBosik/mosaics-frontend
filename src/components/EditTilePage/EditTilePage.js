import React from "react";
import { useMessage } from "./../../hooks/useMessage";
import TilePhoto from "./TilePhoto/TilePhoto";
import UsersProposedTagsCollection from "./UsersProposedTagsCollection/UsersProposedTagsCollection";
import TileOptions from "./TileOptions/TileOptions";
import { useParams } from "react-router";
import { tiles } from "../../data/tiles";

const proposedTags = [
    'proposed-1', 'proposed-2', 'not-proposed', 'added', 'wall'
];

function EditTilePage() {
    document.title = useMessage("edit_tile");

    const { id } = useParams();

    const tile = tiles.find(tile => tile.id === id*1);

    return (
        <div className="window-width flex-auto">
            <div className="container">
                <div className="row pt30">
                    <div className="col s12 m4">
                        <TilePhoto tile={tile} />
                    </div>
                    <div className="col s12 m6">
                        <UsersProposedTagsCollection proposedTags={proposedTags} />
                    </div>
                    <div className="col s12 m2">
                        <TileOptions />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditTilePage;