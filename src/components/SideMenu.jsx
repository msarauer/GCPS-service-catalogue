import React from "react";

const SideMenu = ({ listItems }) => {
  return (
    <nav className="side-menu">
      <h3 className="side-menu-title">A to Z</h3>
      <ul>
        {listItems.map((item) => (
          <li>{item.item}</li>
        ))}
      </ul>
    </nav>
  );
};

export default SideMenu;
