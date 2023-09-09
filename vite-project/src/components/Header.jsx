import { useState } from "react";
import mats from "../Pictures/0de09bdc-f601-4b67-bbbc-192519350292.avif"
import "./Styles/header.css"

export default function Header(props) {

    return (
        <div className="css-header">
            <h1 className="rubrik">DEMOkrat II</h1>
            <img src={mats} alt="Mats" />

        </div>
    )

}
