import { useContext } from "react";
import { useState } from "react";
import FullForm from "../components/FullForm";
import Header from "../components/Header";
import { UserListContext } from "../context/UserListContext";

export default function User(props) {
    const allContext = useContext(UserListContext);
    const userList = allContext.userList;


    return(
        <div>
            <Header /> 
            <FullForm
            userList = {userList}
            />
        </div>
    
    )
}