import { useState } from "react";
import VoteButton from "./VoteButton"; "./VoteButton.jsx"

export default function VotingForm(props) {
   
    return (
        <form>
            <VoteButton name="Edvin" />
            <VoteButton name="Mats" />

            <button>Rösta</button>
        </form>
    )
   
}