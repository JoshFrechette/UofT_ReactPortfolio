import React, { Component } from "react";
import "../styles/Greeting.css";

export default class Greeting extends Component {
    render() {
        return (
            <div className="grid-x hi">
                <div className="cell auto">
                <p className="fill">hello.</p>
                </div>
            </div>
            
        )
    }
}