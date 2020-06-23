import React from "react";
import "../styles/Greeting.css";

let Greeting = () => {

    return (

        <div className="grid-x">
            <div className="cell auto greet">
                <div className="grid-x hi">
                    <div className="cell">
                        <p className="fill">hello.</p>
                    </div>
                </div>
                {/* <div className="cell auto arrow bounce"><a href="/#about-me"><i className="fas fa-angle-double-down" id="down"></i></a></div> */}
            </div>
        </div>
    )
}
export default Greeting;