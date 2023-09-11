import { useState } from "react";
import "./Styles/admin.css"
import mats from "../Pictures/0de09bdc-f601-4b67-bbbc-192519350292.avif"

export default function Admin(props) {

    const [userObject, setUserObject] = useState(
        {
            name: "",
            email: "",
        }

    );
    const [userList , setUserList] = useState([]);

    function submitForm(event) {
        event.preventDefault();
        setUserList([...userList, userObject]);
    }

    function handleUser(event) {
        setUserObject({...userObject, [event.target.name]: event.target.value})
    }

    function deleteUser(userObject) {
        console.log(userObject.name + " deleted");
        // Remove the user from the list
        setUserList(userList.filter((item) => item.email !== userObject.email));
    }


    function activeUsers() {
        return userList.map((userObject) => (
            <div className="specific-user" key={userObject.email}>
                <span>
                    <p>{userObject.name}</p>
                    <p>{userObject.email}</p>
                </span>
                
                
                <button onClick={()=>deleteUser(userObject)} >x</button>

            </div>
        ));
    }
return (
    <div>
        <form >
        <input type = "text" placeholder="name" value={userObject.name} onChange={handleUser} name= "name"/>
        <input type="text" placeholder="Email" value={userObject.email} onChange={handleUser} name= "email"/>
        <button onClick={submitForm}>Add user</button>
        </form>   

        <div className="userdiv">
            {activeUsers()}    
        </div>   
    </div>
);
}