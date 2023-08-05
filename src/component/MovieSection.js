import React, { useState } from "react";
import "./style.css";
import Menu from "./MovieApi";
import MenuCard from "./Menucard";
import Navbar from "./MovieNavbar";
import Footer from "./Footer";
import Imgslider from "./Carousel";
import ScrollToTop from "./GoUpBtn";
import Navbar2 from "./MainNavbar";
const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];
const Boxoffice = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList] = useState(uniqueList);
// Filter by Category
  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }
//adding a new category in API will automatically show that category in the navbar
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedList);
  };
  return (
    <>
    {/* Navbar at top of Movie section */}
    <Navbar2/>

      <div class="sliderr">Featured Movies</div>
      <div className="Sliderbg">
    {/* Carousel */}
      <Imgslider/>
      </div>
    {/* Navbar for Filter */}
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    {/* Scroll to Top */}
      <ScrollToTop/>
      <Footer/>
    </>
  );
};

export default Boxoffice;
