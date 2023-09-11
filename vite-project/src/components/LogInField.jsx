import { useState } from "react";

export default function LogInField(props) {
    const [email, setEmail] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        console.log(email);
    }


    return (
        <div>
            <input type="text" placeholder="Email" value={email} onChange={handleEmailChange} />
        </div>
    )

}