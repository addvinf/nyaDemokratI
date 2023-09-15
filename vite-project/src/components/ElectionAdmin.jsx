import { useState } from "react";
import UserFinder from "../apis/UserFinder";

export default function ElectionAdmin (props) {
    const [result, setResult] = useState([]);
    
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
    async function clearVotes (event) {
        event.preventDefault();
        try {
            const response = await UserFinder.delete('deleteVotes');
        }
        catch(err){
            console.log(err)
        }
    }

    async function getResult(event){
        event.preventDefault();
        try {
            const response = await UserFinder.get('getVoteResults');
            //eventuellt fel här
            //setResult(response.rows)
            console.log(response.data.data.votes)
            setResult(response.data.data.votes)

            
        }
        catch(err){
            console.log(err)
        }

    }

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
      <h1>Election Admin</h1>
      <form>
        <input 
            className="input-fields down"
            type="text" 
            placeholder="Namn på val" 
            name="electionName" 
            value={electionObject.electionName}
            onChange={(event) => setElectionObject({...electionObject, electionName: event.target.value})}
        />
        <input
            className="input-fields down" 
            type="text" 
            placeholder="Kandidat" 
            name="candidates"
            value={candidate}
            onChange={(event) => setCandidate(event.target.value)}
            ></input>
        <button className="add-button" onClick={addCandidate}>Lägg till kandidat</button>
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

        <button className="add-button" onClick={uppdatera}>Uppdatera val</button>
        <button className="add-button" onClick={clearVotes}>Nytt Val</button>
        <button className="add-button" onClick={getResult}>Hämta resultat</button>
      </form>
      <h2>Kandidater</h2>
      {activeCandidates()}

        <h2>Resultat</h2>   
        <div>
            {showResult()}
       </div>

    </div>
  )
}