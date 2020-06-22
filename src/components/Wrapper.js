import React from 'react';
import "../styles/Wrapper.css";
import "../styles/styles.scss";

let Wrapper = ({ children }) => {
  return (
      <div className="wrapper">
        { children }
      </div>
  );
}

export default Wrapper;