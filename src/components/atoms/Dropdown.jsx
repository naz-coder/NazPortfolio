import React, { useState } from "react";

function Dropdown() {
  const [menuState, setMenuState] = useState("Menu");

  return (
    <div className="container">
      <select
        className="custom-select"
        value={menuState}
        onChange={(e) => {
          const selectedMenu = e.target.value;
          setMenuState(selectedMenu);
        }}
      >
        <option value="menu">Menu</option>
        <option value="about">About</option>
        <option value="works">Works</option>
        <option value="resume">Resume</option>
        <option value="programs">Programs</option>
        <option value="contact">Contact</option>

      </select>
      {menuState}
    </div>
  );
}

export default Dropdown