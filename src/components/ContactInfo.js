import React, { Component } from "react";

export default class ContactInfo extends Component {
    render() {
        return (
            <div>
                   <div className="row" id="spacer">
            <div className="col-8 offset-2">           
                <h2 id="contact-me">Reach Out</h2>
                <hr></hr>
    
                <div className="row">
                    <a className="reach-out" href="mailto:joshfdesign@gmail.com" target="_blank" rel="noopener noreferrer"><i className="far fa-paper-plane fa-fw"></i>email me</a>
                </div>
            </div>
        </div>
            </div>
        )
    }
}