import UserFinder from "../apis/UserFinder";
import AddCandidatesDiv from "./AddCandidatesDiv";
import ElectionStatusButtons from "./ElectionStatusButtons";

export default function ElectionForm (props) {

    




    return (
        <form className="admin-form">
        <input 
            className="input-fields down"
            type="text" 
            placeholder="Namn på val" 
            name="electionName" 
            value={props.electionObject.electionName}
            onChange={(event) => props.setElectionObject({...props.electionObject, electionName: event.target.value})}
        />
        <AddCandidatesDiv 
            result={props.result}
            setResult={props.setResult}
            electionObject={props.electionObject}
            setElectionObject={props.setElectionObject}
            candidate={props.candidate}
            setCandidate={props.setCandidate}
        />
        <ElectionStatusButtons
            electionObject={props.electionObject}
            setElectionObject={props.setElectionObject}
            result={props.result}
            setResult={props.setResult}
            candidate = {props.candidate}
            setCandidate = {props.setCandidate}
        />

        
        
        
    </form> 
    )
}