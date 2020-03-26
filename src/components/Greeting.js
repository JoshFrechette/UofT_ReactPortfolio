import React, { Component } from "react";
import "../styles/Greeting.css";

export default class Greeting extends Component {
    render() {
        return (
            <div className="hi">
                <p className="greeting">hello.</p>
            </div>
        )
    }
}