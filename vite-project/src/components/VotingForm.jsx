import { useState } from "react";
import VoteButton from "./VoteButton"; "./VoteButton.jsx"
//import buttonClick from "./Functions"; "./Functions.jsx"

export default function VotingForm(props) {
    
    const buttonClickAction = () => {
        console.log("Du har röstat på " + VoteButton.name);
    }

    return (
        <form>
            <VoteButton name="Edvin" />
            <VoteButton name="Mats" />
            <VoteButton name="Blank" />

            <button onClick={buttonClickAction}>Rösta</button>
            <button type="submit" formAction="racegame.html">Knapp som gör något</button>
        </form>
    )
}