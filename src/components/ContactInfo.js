import React from "react";
import "../styles/ContactInfo.css"

let ContactInfo = () => {

    return (

        <div className="grid contact sectionbg" id="spacer">
            <div className="grid-x">
                <div className="cell">
                    <h2 className="sectionhead" id="contact-me">Reach Out</h2>
                    <hr></hr>
                </div>
            </div>

            <div className="grid-x" id="reachme">

                <div className="cell small-12 medium-6">
                    <a className="reach-out" href="mailto:joshfdesign@gmail.com" target="_blank" rel="noopener noreferrer">
                        <i className="far fa-paper-plane fa-fw"></i>  joshfdesign@gmail.com</a>
                </div>

                <div className="cell small-12 medium-6">
                <a className="reach-out" href="tel:1-647-302-0661">
                        <i className="fas fa-mobile-alt"></i>  647.302.0661</a>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo;