import { useState } from "react";
import VotingForm from "./VotingForm";
import LogInField from "./LogInField";

export default function FullForm(props) {

    const [email, setEmail] = useState("");
    const [selectedCandidate, setSelectedCandidate] = useState(null);
    console.log(email + " " + selectedCandidate);

    function hash(string){
        var hash = 0;
        for (var i = 0; i < string.length; i++) {
            hash += Math.pow(string.charCodeAt(i) * 31, string.length - i);
            hash = hash & hash; // Convert to 32bit integer
        }
        return hash;
    }
    
    function submitVote(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        if (selectedCandidate !== null) {
            var userId = hash(email);
            console.log("Voted for:", selectedCandidate + " with email: " + email + " and userId: " + userId);
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
