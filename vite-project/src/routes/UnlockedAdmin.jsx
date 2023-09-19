import { useState, useEffect } from "react";
import "../components/Styles/admin.css"
import UserFinder from "../apis/UserFinder";
import axios from 'axios';
import AdminForm from "../components/AdminForm";
import AdminList from "../components/AdminList";
import { UserListContext } from "../context/UserListContext";
import { useContext } from "react";
import ElectionAdmin from "../components/ElectionAdmin";
import Header from "../components/Header"
import { useAuth } from '../AuthContext';

export default function UnlockedAdmin(props) {
    const { isAuthenticated, logout } = useAuth();
    if (!isAuthenticated) {
        return <div>You are not authorized to access this page.</div>;
      }

    const addUser = useContext(UserListContext)
    //console.log(addUser)
    const [userObject, setUserObject] = useState({
        name: "",
        email: "",
        status: "offline"
    });
    const userList = addUser.userList
    const setUserList = addUser.setUserList
    const [showMembers, setShowMembers] = useState(true);

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
                showMembers = {showMembers}
                setShowMembers = {setShowMembers}
                />
            <AdminList 
                userList = {userList}
                setUserList = {setUserList}
                showMembers = {showMembers}
                setShowMembers = {setShowMembers}
                />
            <ElectionAdmin />
            
        </div>
    );
}
