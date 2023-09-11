import { useState } from "react";

export default function Admin(props) {

    const [userObject, setUserObject] = useState(
        {
            name: "",
            email: "",
        }

    );
    const [userList , setUserList] = useState([])

    function submitForm(event) {
        event.preventDefault();
        setUserList([...userList, email])
    }

    function handleEmail(event) {
        setEmail(event.target.value);
    }

    function deleteUser(user) {
        console.log(user + " deleted");
        // Remove the user from the list
        setUserList(userList.filter((item) => item !== user));
    }


    function activeUsers() {
        return userList.map((user) => (
            <span key={user}>
                <p>{user}</p>
                <button onClick={()=>deleteUser(user)} >Delete user</button>
            </span>
        ));
    }
return (
    <div>
        <form >
        <input type = "text" placeholder="name" value={}/>
        <input type="text" placeholder="Email" value={email} onChange={handleEmail} />
        <button onClick={submitForm}>Add user</button>
        </form>   

        <div>
            {activeUsers()}    
        </div>   
    </div>
);
}