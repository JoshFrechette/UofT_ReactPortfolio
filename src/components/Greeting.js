import React from "react";
import "../styles/Greeting.css";

let Greeting = () => {

    return (

        <div className="grid">
            <div className="grid-x hi">
                <div className="cell auto">
                    <p className="fill">hello.</p>
                </div>
            </div>
            <div className="cell auto arrow bounce"><i class="fas fa-angle-double-down" id="down"></i></div>
        </div>
    )
}
export default Greeting;