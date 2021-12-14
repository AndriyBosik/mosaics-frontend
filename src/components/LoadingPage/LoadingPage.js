import React from "react";
import CircularPreloader from "./CircularPreloader";

const LoadingPage = () => {
    return (
        <div className="full-width center-align">
            <div className="window-height s-vflex-center">
                <div className="s-hflex-center">
                    <CircularPreloader />
                </div>
            </div>
        </div>
    );
}

export default LoadingPage;