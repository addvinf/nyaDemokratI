import { useState } from "react";
import UserFinder from "../apis/UserFinder";

export default function ElectionAdmin (props) {
    
    function activeCandidates() {
        return electionObject.candidates.map((candidate) => (
            <div className="specific-user" key={candidate}>
                <span>
                    <p>{candidate}</p>
                </span>
                <button onClick={() => deleteCandidate(candidate)}>X</button>
            </div>
        ));
    } 
    function deleteCandidate(candidate) {
        setElectionObject({...electionObject, candidates: electionObject.candidates.filter((item) => item !== candidate)});
    }
    
    
    const [electionObject, setElectionObject] = useState({
        electionName: "",
        candidates: [],
        status: "closed"
    });
    const [candidate, setCandidate] = useState("");

    const addCandidate = (event) => {
    event.preventDefault();
    setElectionObject({...electionObject, candidates: [...electionObject.candidates, candidate]})
    
    setCandidate("");
    }

    async function uppdatera(event) {
        event.preventDefault();
        console.log(electionObject);
        //uppdaterar val i databasen
        try{
            const response = await UserFinder.put('updateElectionData', {
                name: electionObject.electionName,
                candidates: electionObject.candidates,
                status: electionObject.status
            });
            console.log(response.data.data)
        }
        catch(err){
            console.log(err)
        }

    }

    const handleStatusChange = (event) => {
        setElectionObject({...electionObject, status: event.target.value})
    }
    const clearVotes = (event) => {
        event.preventDefault();
    }

  
    return (
    <div>
      <h1>Election Admin</h1>
      <form>
        <label>Election Name</label>
        <input 
            type="text" 
            placeholder="Namn på val" 
            name="electionName" 
            value={electionObject.electionName}
            onChange={(event) => setElectionObject({...electionObject, electionName: event.target.value})}
        />
        <label>Candidates</label>
        <input 
            type="text" 
            placeholder="Kandidat" 
            name="candidates"
            value={candidate}
            onChange={(event) => setCandidate(event.target.value)}
            ></input>
        <button onClick={addCandidate}>Lägg till kandidat</button>
        <span>
            <input 
                type="radio" 
                value="open"
                checked={electionObject.status == "open"}
                onChange= {handleStatusChange}
                />
            <label>Öppet</label>
            <input 
                type="radio" 
                value="closed" 
                checked={electionObject.status == "closed"} 
                onChange= {handleStatusChange}
                />
            <label>Stängd</label>
        </span>

        <button onClick={uppdatera}>Uppdatera val</button>
        <button onClick={clearVotes}>Nytt Val</button>
      </form>
      <h2>Kandidater</h2>
      {activeCandidates()}
    </div>
  )
}