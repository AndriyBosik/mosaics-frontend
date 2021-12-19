import React from "react";
import { useMessage } from "./../../hooks/useMessage";
import "./PageNotFound.css";

const PageNotFound = () => {
    document.title = useMessage("error");

    return (
        <div>
            some unuseful text
            
        </div>
    );
}

export default PageNotFound;