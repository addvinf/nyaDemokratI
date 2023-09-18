import { useState } from "react";
import UserFinder from "../apis/UserFinder";
import logo from "../Pictures/Logga2.png";

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
            alert("Val uppdaterat")
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
            alert("Röster nollställda")
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
        <div className="entire-elad">
        <h1>Election Admin</h1>
        <form className="admin-form">
            <input 
                className="input-fields down"
                type="text" 
                placeholder="Namn på val" 
                name="electionName" 
                value={electionObject.electionName}
                onChange={(event) => setElectionObject({...electionObject, electionName: event.target.value})}
            />
            <div className="candidate-add">
                <input
                    className="input-fields down" 
                    type="text" 
                    placeholder="Kandidat" 
                    name="candidates"
                    value={candidate}
                    onChange={(event) => setCandidate(event.target.value)}
                    ></input>
                <button className="add-button" onClick={addCandidate}>Lägg till kandidat</button>

                <h2>Kandidater</h2>
        {activeCandidates()}

            
            </div>
            
            
            <div>
                <div className="update-status">
                    <label>
                        <input
                        className="radio-button-two"
                        type="radio"
                        value="open"
                        checked={electionObject.status === "open"}
                        onChange={handleStatusChange}
                        />
                        Öppet
                    </label>

                </div>

                <div className="update-status">
                    <label>
                        <input
                        className="radio-button-two"
                        type="radio"
                        value="closed"
                        checked={electionObject.status === "closed"}
                        onChange={handleStatusChange}
                        />
                        Stängd
                    </label>
                </div>
                
            </div>


            <button className="add-button" onClick={uppdatera}>Uppdatera val</button>
            <button className="add-button" onClick={clearVotes}>Nollställ röster</button>
            <button className="add-button" onClick={getResult}>Hämta resultat</button>
        </form>
        
        

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