import React from "react";
import './DarkMode.css'

export const DarkMode = () => {
  return (
        <div>
          <input type="checkbox" id="switch" />
          <label for="switch"></label>
          <section className="dark-mode"></section>
        </div>
    
  );
};

