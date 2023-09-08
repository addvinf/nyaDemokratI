import { useState } from "react";

export default function VoteButton(props) {

return (
    <div>
        <button>    
            {props.name}
        </button>
    </div>
)
}