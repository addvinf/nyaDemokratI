import { useState } from "react";
import mats from "../Pictures/Logga.png"
import "./Styles/header.css"

export default function Header(props) {

    return (
        <div className="css-header">
            <h1 className="rubrik">DEMOkrat II</h1>
            <img className="logo" src={mats} alt="Mats" />

        </div>
    )

}
