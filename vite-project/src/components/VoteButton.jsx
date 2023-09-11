import { useState } from "react";

export default function VoteButton(props) {

return (
    <div>
        <input type="radio" id="html" name="fav_language" value="HTML"/>
        <label htmlFor="html">{props.name}</label>
    </div>

    )
}