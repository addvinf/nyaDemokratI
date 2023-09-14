import UserFinder from "../apis/UserFinder";

export default function AdminList(props){
    function activeUsers() {
        return props.userList.map((userObject) => (
            <div className="specific-user" key={userObject.email}>
                <span>
                    <p>{userObject.name}</p>
                    <p>{userObject.email && userObject.email}</p>
                </span>
                <button onClick={() => deleteUser(userObject)}>x</button>
            </div>
        ));
    }
    async function deleteUser(userObject) {
        //console.log(userObject.name + " deleted");
        const response = await UserFinder.delete(`/deleteUser/${userObject.email}`)
        //console.log(response)        
        // Remove the user from the list
        props.setUserList(props.userList.filter((item) => item.email !== userObject.email));
    }

    return (
        <div className="userdiv">
            {activeUsers()}
        </div>
    )

}