import React from "react";
const Navbar = ({ filterItem, menuList }) => {
  return (
    <>
      <div id="section1"className="line"></div>
      <nav className="navbarr">
        <div className="button-grp">
          <div className="btn-group">
            {menuList.map((curElem) => {
              return (
                <button
                  className="btn btn-group__item"
                  onClick={() => filterItem(curElem)}>
                  {curElem}
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;