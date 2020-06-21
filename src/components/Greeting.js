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
            <div className="cell auto arrow bounce"><a href="/#about-me"><i class="fas fa-angle-double-down" id="down"></i></a></div>
        </div>
    )
}
export default Greeting;