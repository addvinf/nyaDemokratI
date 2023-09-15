import { useState, useEffect } from "react";
import "../components/Styles/admin.css"
import mats from "../Pictures/0de09bdc-f601-4b67-bbbc-192519350292.avif"
import UserFinder from "../apis/UserFinder";
import axios from 'axios';
import AdminForm from "../components/AdminForm";
import AdminList from "../components/AdminList";
import { UserListContext } from "../context/UserListContext";
import { useContext } from "react";
import ElectionAdmin from "../components/ElectionAdmin";
import Header from "../components/Header"

export default function Admin(props) {
    
    const addUser = useContext(UserListContext)
    //console.log(addUser)
    const [userObject, setUserObject] = useState({
        name: "",
        email: "",
    });
    const userList = addUser.userList
    const setUserList = addUser.setUserList

    useEffect(() => {
        (async () => {
            try {
                const response = await UserFinder.get("/getUsers");
                const userData = response.data.data.users;
                setUserList(userData);
            } catch (err) {
                console.log("Det är errors");
                console.log(err);
            }
        })();
    }, []);

    return (
        <div className="main-admin">
            <Header />
            <AdminForm 
                userList = {userList}
                setUserList = {setUserList}
                userObject = {userObject}
                setUserObject = {setUserObject}
                addUser = {addUser}
                />
            <AdminList 
                userList = {userList}
                setUserList = {setUserList}
                />
            <ElectionAdmin />
            
        </div>
    );
}
