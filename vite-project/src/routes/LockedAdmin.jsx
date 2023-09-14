import { useState } from 'react'
import "../components/Styles/lockedadmin.css"
import mats from "../Pictures/0de09bdc-f601-4b67-bbbc-192519350292.avif"
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';




export default function LockedAdmin(props) {

    const { login } = useAuth();
    const navigate = useNavigate();

    const [userObject, setUserObject] = useState({
    password: "",
    });

    function submitForm(event) {
        event.preventDefault();
        //hashedPassword = 
        login(userObject.password); // Check password using login function from context
        navigate('/unlockedadmin');
      }

    function handleUser(event) {
        setUserObject({...userObject, [event.target.name]: event.target.value})
    }

return (
    <div>
        <form >
        <input type = "text" placeholder="password" value={userObject.password} onChange={handleUser} name= "password"/>
        <button onClick={submitForm}>Log In</button>
        </form>   
    </div>
);
}