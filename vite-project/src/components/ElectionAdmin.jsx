import { useState } from "react";
import UserFinder from "../apis/UserFinder";
import logo from "../Pictures/Logga2.png";
import ElectionForm from "./ElectionForm";

export default function ElectionAdmin (props) {
    const [result, setResult] = useState([]);
    const [electionObject, setElectionObject] = useState({
        electionName: "",
        candidates: [],
        status: "closed"
    });
    const [candidate, setCandidate] = useState("");

    function showResult(){
        return result.map((item) => (
            <div className="specific-user" key={item.candidate}>
                <span>
                    <p>{item.vote_option}</p>
                    <p>{item.count}</p>
                </span>
            </div>
        ));
    }

  
    return (
    <div>
        <div className="entire-elad">
        <h1>Election Admin</h1>
        <ElectionForm 
            result={result}
            setResult={setResult}
            electionObject={electionObject}
            setElectionObject={setElectionObject}
            candidate={candidate}
            setCandidate={setCandidate}
        />
        
        

        </div>
            <div className="results">
                <h1>Resultat</h1> 
                <img className="logo-two" src={logo} alt="" />  
                <div>
                    {showResult()}
                </div>
            </div>
    </div>
  )
}