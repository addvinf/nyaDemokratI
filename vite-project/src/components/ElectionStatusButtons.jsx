import UserFinder from "../apis/UserFinder";

export default function ElectionStatusButtons(props) {

    async function uppdatera(event) {
        event.preventDefault();
        console.log(props.electionObject);
        //uppdaterar val i databasen
        try{
            const response = await UserFinder.put('updateElectionData', {
                name: props.electionObject.electionName,
                candidates: props.electionObject.candidates,
                status: props.electionObject.status
            });
            console.log(response.data.data)
            alert("Val uppdaterat")
        }
        catch(err){
            console.log(err)
        }

    }

    const handleStatusChange = (event) => {
        props.setElectionObject({...props.electionObject, status: event.target.value})
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
            //props.setResuklt(response.rows)
            console.log(response.data.data.votes)
            props.setResult(response.data.data.votes)

            
        }
        catch(err){
            console.log(err)
        }

    }


    return (
        <div>
            
       
        <div>
            <div className="update-status">
                <label>
                    <input
                    className="radio-button-two"
                    type="radio"
                    value="open"
                    checked={props.electionObject.status === "open"}
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
                    checked={props.electionObject.status === "closed"}
                    onChange={handleStatusChange}
                    />
                    Stängd
                </label>
            </div>
            
        </div>


        <button className="add-button" onClick={uppdatera}>Uppdatera val</button>
        <button className="add-button" onClick={clearVotes}>Nollställ röster</button>
        <button className="add-button" onClick={getResult}>Hämta resultat</button>
        </div>
    )

}