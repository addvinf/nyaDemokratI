import { useState } from "react";
import VotingForm from "./VotingForm";
import LogInField from "./LogInField";

export default function FullForm(props) {

    const [email, setEmail] = useState("");
    const [selectedCandidate, setSelectedCandidate] = useState(null);
    console.log(email + " " + selectedCandidate);
    

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
            />
            
        </div>
    );


}
