import { useState } from "react";

export default function LogInField(props) {
    const [email, setEmail] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        console.log(email);
    }


<<<<<<< HEAD
=======

>>>>>>> c721f964f5c0ccf6a8ca9df1cbd64f7f889144c3
    return (
        <div>
            <input type="text" placeholder="Email" value={email} onChange={handleEmailChange} />
        </div>
    )

}