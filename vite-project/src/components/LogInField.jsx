import { useState } from "react";

export default function LogInField(props) {
    const [email, setEmail] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        console.log(email);
    }

}