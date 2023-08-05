import React, { useState } from "react";

const Navbar = ({ filterItem, menuList }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prevState) => !prevState);
  };
  const handleItemClick = (item) => {
    filterItem(item);
    setShowDropdown(false);
  };
  return (
    <>
      <div id="section1" className="line"></div>
      <nav className="navbarr">
        <div className="navbar-content">
          <div className="explore-categories-btn" onClick={toggleDropdown}>
            Click here : Categories<i className={`arrow ${showDropdown ? "up" : "down"}`}></i>
          </div>
          <div className={`dropdown-menu ${showDropdown ? "show" : ""}`}>
            {menuList.map((curElem) => (
              <button
                key={curElem}
                className="btn btn-group__item"
                onClick={() => handleItemClick(curElem)}
              >
                {curElem}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
