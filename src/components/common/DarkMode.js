import React from "react";
import './DarkMode.css'

export const DarkMode = () => {
  return (
        <div>
          <input className="input" type="checkbox" id="switch" />
          <label className="label" for="switch"></label>
          <section className="dark-mode"></section>
        </div>
    
  );
};

