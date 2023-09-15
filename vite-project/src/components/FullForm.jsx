import { useState, useEffect } from "react";
import VotingForm from "./VotingForm";
import LogInField from "./LogInField";
import UserFinder from "../apis/UserFinder";
import mats from "../Pictures/mats.jpg";
import './Styles/userpage.css'

export default function FullForm(props) {

    const [email, setEmail] = useState("");
    const [selectedCandidate, setSelectedCandidate] = useState(null);
    const [electionData, setElectionData] = useState(null);
    const [outputText, setOutputText] = useState(null);
    //console.log(email + " " + selectedCandidate);

    useEffect(() => {
        (async () => {
            try {
                const response = await UserFinder.get("/getElectionData");
                //console.log(response.data.data.election_data);
                setElectionData(response.data.data.election_data) //then add the blank candidate
                

            } catch (err) {
                console.log("Det är errors");
                //console.log(err);
            }
        })();
    }, []);

    function hash(string){
        var hash = 0;
        for (var i = 0; i < string.length; i++) {
            hash += Math.pow(string.charCodeAt(i) * 31, string.length - i);
            hash = hash & hash; // Convert to 32bit integer
        }
        return hash;
    }
    
    async function submitVote(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        if (selectedCandidate !== null) {
            //tidigare kod
            var userId = hash(email);
            //console.log("Voted for:", selectedCandidate + " with email: " + email + " and userId: " + userId);
            //ny kod
            try {
                const response = await UserFinder.post('/vote', {
                    email: email,
                    vote: selectedCandidate,
                })
                //console.log(response.data.status)
                if (response.data.status === "success"){

                    setOutputText("Din röst på " + selectedCandidate + " har registrerats.");
                }
                else if (response.data.status === "fail") {
                    setOutputText("Du har redan röstat bitch")
                }
                else if (response.data.status === "nonexistent"){
                    setOutputText("Du är inte registrerad i systemet")
                }

    
            


            }catch(err){
                //console.log("Det är errors");
                setOutputText("Du har redan röstat bitch");
            }
        } else {
            setOutputText("Please select a candidate before submitting.");
        }
    }



    return (

        <div>
            {electionData ? ( electionData.status === "open" ? (
                <>
                    <h1>{electionData.name}</h1>
                    <LogInField email={email} setEmail={setEmail} />
                    <VotingForm
                        listOfCandidates={electionData.candidates}
                        selectedCandidate={selectedCandidate}
                        setSelectedCandidate={setSelectedCandidate}
                        submitVote={submitVote}
                    />
                    <div className="submit-message">{outputText}</div>
                </>
            ) : <div>
                 <p>Inget val öppet</p>
                 <img className = "mats" src={mats} alt="" />
            </div>) : (
                <p>Laddar valdata...</p>
            )}
        </div>
    );


}
