import React, { Component } from "react";
import "../styles/ContactInfo.css"

export default class ContactInfo extends Component {
    render() {
        return (
            <div className="contact">
                <div className="row" id="spacer">
                    <div className="col-8 offset-2">
                        <h2 id="contact-me">Reach Out</h2>
                        <hr></hr>
                    </div>
                </div>

                <div className="row" id="reachme">
                    <div className="col">
                        <a className="reach-out" href="mailto:joshfdesign@gmail.com" target="_blank" rel="noopener noreferrer">
                            <i className="far fa-paper-plane fa-fw"></i> joshfdesign@gmail.com</a>
                    </div>
                    <div className="col">
                        <p className="reach-out"><i class="fas fa-mobile-alt"></i> 647.302.0661</p>
                    </div>
                </div>
            </div>

        )
    }
}