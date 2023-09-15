import { useState } from "react";
import UserFinder from "../apis/UserFinder";

export default function AdminForm(props) {

    async function submitForm(event) {
        event.preventDefault();
        // Check if user already exists
        if (props.userList.some((item) => item.email === props.userObject.email)) {
            // Handle user already exists
        } else {
            try{
                const response   = await UserFinder.post('/createUser', {
                    name: props.userObject.name,
                    email: props.userObject.email,
                    hashed_email: 12346
                }) 
                //console.log(response.data.data)
                props.addUser.addUser(response.data.data.users)
                //  console.log(response)
            }
            catch(err){
                console.log(err)
            }
            //Den här ska ersättas med att pusha till databasen
            //props.setUserList([...props.userList, props.userObject]);
        }
    }

    function handleUser(event) {
        props.setUserObject({ ...props.userObject, [event.target.name]: event.target.value });
    }

    return (
        <div>
            <h1>Lägg till användare</h1>
                <form>
                        <div className="inputs">
                            <input className="input-fields" type="text" placeholder="name" value={props.userObject.name} onChange={handleUser} name="name" />
                            <input className="input-fields" type="text" placeholder="Email" value={props.userObject.email} onChange={handleUser} name="email" />
                            <button className="add-button" onClick={submitForm}>Add user</button>
                        </div>
                         
                </form>
        </div>
        
    )
}