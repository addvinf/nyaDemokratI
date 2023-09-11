import React, { useState } from "react";

export default function VotingForm(props) {


    function handleCandidateChange(event) {
        props.setSelectedCandidate(event.target.value);
    }

    function submitVote(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        if (props.selectedCandidate !== null) {
            console.log("Voted for:", props.selectedCandidate);
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
                checked={props.selectedCandidate === candidate}
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
