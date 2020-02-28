import React, { Component } from "react";

export default class ContactInfo extends Component {
    render() {
        return (
            <div>
                   <div class="row" id="spacer">
            <div class="col-8 offset-2">           
                <h2 id="contact-me">Reach Out</h2>
                <hr></hr>
    
                <div class="row">
                    <a class="reach-out" href="mailto:joshfdesign@gmail.com" target="_blank" rel="noopener noreferrer"><i class="far fa-paper-plane fa-fw"></i>email me</a>
                </div>
            </div>
        </div>
            </div>
        )
    }
}