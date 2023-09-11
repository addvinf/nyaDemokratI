import { useState } from "react";
import VotingForm from "./VotingForm";
import LogInField from "./LogInField";

export default function FullForm(props) {

    const [email, setEmail] = useState("");
    const [selectedCandidate, setSelectedCandidate] = useState(null);

    return (

        <div>
            <LogInField />
            <VotingForm listOfCandidates={["Edvin", "Mats"]} />
        </div>
    );


}
