import React from "react";
import Masonry from "react-masonry-component";
import { useMessage } from "../../hooks/useMessage";
import ImageCard from "../ImageCard/ImageCard";
import { images } from "./../../data/images";

function HomePage() {
    document.title = useMessage("home_page");

    return (
        <div className="window-width flex-auto EditMosaicPage">
            <div className="container">
                <div className="row pt50">
                    <Masonry className={'gallery'} options={{transitionDuration: 100}} updateOnEachImageLoad={true}>
                        {
                            images.map(image => <ImageCard key={image.id} imageUrl={image.url} responsiveClassName="col s6 m4 l3" />)
                        }
                    </Masonry>
                </div>
            </div>
        </div>
    );
}

export default HomePage;