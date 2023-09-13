import { useState, createContext } from "react";

export const UserListContext = createContext();

export const UserListProvider = (props) => {
    const [userList, setUserList] = useState([]);




    return (
        <UserListContext.Provider value={{ userList, setUserList }}>
            {props.children}
        </UserListContext.Provider>
    )

}