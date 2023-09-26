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
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Admin(props) {
    const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();
    function goToAdminLogin() {
        navigate('/lockedadmin');
      }
    /*if (!isAuthenticated) {
        return (<div>
            <h1>You are not authorized to access this page.</h1>
            <button className="add-button" onClick={goToAdminLogin}>Go to Admin Login</button>
        </div>
        )
      }*/

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
