import React, { useState } from "react";

export default function VotingForm(props) {


    function handleCandidateChange(candidate) {
        props.setSelectedCandidate(candidate);
    }
    

    const listOfCandidates = props.listOfCandidates.map((candidate) => (
        <span
            key={candidate}
            className={`candidate-radio ${props.selectedCandidate === candidate ? 'selected' : ''}`}
            onClick={() => handleCandidateChange(candidate)}
        >
            <input
                className="actual-button"
                type="radio"
                value={candidate}
                checked={props.selectedCandidate === candidate}
                onChange={() => {}} // Empty onChange to prevent the radio button from handling the change
            />
            <label>{candidate}</label>
        </span>
    ));

    return (
        <form className="vote-form" onSubmit={props.submitVote}>
            <ul>{listOfCandidates}</ul>
            <button className="vote-button" type="submit">Rösta</button>
        </form>
    );
}
