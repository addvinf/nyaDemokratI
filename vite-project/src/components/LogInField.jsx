import { useState } from "react";

export default function LogInField(props) {


    const handleEmailChange = (event) => {
        props.setEmail(event.target.value);
        console.log(props.email);
    }

        return (
            <div className="user-login">
                <input className="email-box" type="text" placeholder="Email" value={props.email} onChange={handleEmailChange} />
            </div>
        )
    

}