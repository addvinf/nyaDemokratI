<<<<<<< HEAD
import React, { useState } from "react";

export default function VotingForm(props) {
    const [selectedCandidate, setSelectedCandidate] = useState(null);

    function handleCandidateChange(event) {
        setSelectedCandidate(event.target.value);
    }

    function submitVote(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        if (selectedCandidate !== null) {
            console.log("Voted for:", selectedCandidate);
            // You can send the selected candidate to the server or perform other actions here
        } else {
            console.log("Please select a candidate before submitting.");
        }
    }

    const listOfCandidates = props.listOfCandidates.map((candidate) => (
        <span key={candidate}>
            <input
                type="radio"
                value={candidate}
                checked={selectedCandidate === candidate}
                onChange={handleCandidateChange}
            />
            <label>{candidate}</label>
        </span>
    ));

    return (
        <form onSubmit={submitVote}>
            <ul>{listOfCandidates}</ul>
            <button type="submit">Vote</button>
        </form>
    );
}
=======
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
>>>>>>> c721f964f5c0ccf6a8ca9df1cbd64f7f889144c3
