import { useState } from 'react'
import "../components/Styles/lockedadmin.css"
import mats from "../Pictures/0de09bdc-f601-4b67-bbbc-192519350292.avif"
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';



export async function hashString(input) {
    const encoder = new TextEncoder();
    const data = encoder.encode(input);
    const buffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(buffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
  }

export default function LockedAdmin(props) {

    const { login } = useAuth();
    const navigate = useNavigate();

    const [userObject, setUserObject] = useState({
    password: "",
    });

    function submitForm(event) {
        event.preventDefault();

        hashString(userObject.password).then(hashedPassword => {
            login(hashedPassword); // Check password using login function from context
            navigate('/admin');
          });
      }

    function handleUser(event) {
        setUserObject({...userObject, [event.target.name]: event.target.value})
    }


return (
    <div className="inputs"> 
        <form >    
        <input className="input-fields" type = "password" placeholder="password" value={userObject.password} onChange={handleUser} name= "password"/>
        <button className="add-button" onClick={submitForm}>Log In</button>
        </form>   
    </div>
);
}