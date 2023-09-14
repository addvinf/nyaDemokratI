import { useState, createContext } from "react";

export const UserListContext = createContext();

export const UserListProvider = (props) => {
    const [userList, setUserList] = useState([]);
    //console.log(userList)

    const addUser = (newUser) => {
        setUserList([...userList, newUser])
    }


    return (
        <UserListContext.Provider value={{ userList, setUserList, addUser}}>
            {props.children}
        </UserListContext.Provider>
    );

} 