import UserFinder from "../apis/UserFinder";

export default function AdminList(props){
    function activeUsers() {

        return props.userList.map((userObject) => (
            <div className={`specific-user ${userObject.status === 'online' ? 'online' : 'offline'}`} key={userObject.email}>
                <span>
                    <p>{userObject.name}</p>
                    <p>{userObject.email && userObject.email}</p>
                </span>
                <button className="delete-button" onClick={() => deleteUser(userObject)}>x</button>
                <button className="activate-button" onClick={()=> activateUser(userObject)}></button>
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
    async function activateUser(userObject) {

        console.log(userObject.status)
        const response = await UserFinder.put(`/setUserStatus/${userObject.email}`, {
            status: userObject.status === "online" ? "offline" : "online"
            });
            console.log(response.data.data)
        //change object status in userList
        userObject.status = userObject.status === "online" ? "offline" : "online";

        const updatedUserList = props.userList.map((item) => {
            if (item.email === userObject.email) {
                return userObject;
            }
            return item;
        }
        );
        props.setUserList(updatedUserList);

    }

    return (
        props.showMembers && (
          <div className="userdiv">
            <h1>Medlemmar</h1>
            {activeUsers()}
          </div>
        )
      );

}