import React, { useState } from "react";

export default function VotingForm(props) {


    function handleCandidateChange(event) {
        props.setSelectedCandidate(event.target.value);
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
        <form onSubmit={props.submitVote}>
            <ul>{listOfCandidates}</ul>
            <button type="submit">Vote</button>
        </form>
    );
}
