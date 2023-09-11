import { useState } from "react";
import VotingForm from "./VotingForm";
import LogInField from "./LogInField";

export default function FullForm(props) {

    const [email, setEmail] = useState("");
    const [selectedCandidate, setSelectedCandidate] = useState(null);
    console.log(email + " " + selectedCandidate);
    
    function submitVote(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        if (selectedCandidate !== null) {
            console.log("Voted for:", selectedCandidate + " with email: " + email);
            // You can send the selected candidate to the server or perform other actions here
        } else {
            console.log("Please select a candidate before submitting.");
        }
    }


    return (

        <div>
            <LogInField 
                email={email}
                setEmail={setEmail}
            />
            <VotingForm 
                listOfCandidates={["Edvin", "Mats", "Blank"]} 
                selectedCandidate = {selectedCandidate}
                setSelectedCandidate = {setSelectedCandidate}
                submitVote = {submitVote}
            />
            
        </div>
    );


}
