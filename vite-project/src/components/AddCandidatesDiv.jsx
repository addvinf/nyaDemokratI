

export default function AddCandidatesDiv (props) {

    function activeCandidates() {
        return props.electionObject.candidates.map((candidate) => (
            <div className="specific-user" key={candidate}>
                <span>
                    <p>{candidate}</p>
                </span>
                <button className="delete-button" onClick={() => deleteCandidate(candidate)}>X</button>
            </div>
        ));
    } 
    function deleteCandidate(candidate) {
        props.setElectionObject({...props.electionObject, candidates: props.electionObject.candidates.filter((item) => item !== candidate)});
    }
    
    const addCandidate = (event) => {
        event.preventDefault();
        props.setElectionObject({...props.electionObject, candidates: [...props.electionObject.candidates, props.candidate]})
        
        props.setCandidate("");
        }

    return (
        <div className="candidate-add">
            <input
                className="input-fields down" 
                type="text" 
                placeholder="Kandidat" 
                name="candidates"
                value={props.candidate}
                onChange={(event) => props.setCandidate(event.target.value)}
                ></input>
            <button className="add-button" onClick={addCandidate}>Lägg till kandidat</button>

            <h2>Kandidater</h2>
            {activeCandidates()}

        
        </div>

    )

}