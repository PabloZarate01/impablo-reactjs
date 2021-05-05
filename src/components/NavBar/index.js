import React, { useEffect, useState } from "react";
import {
  MobileIcon,
  Nav,
  NavBarContainer,
  NavBtn,
  NavBtnLink,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from "./NavBarElements";
import { FaBars } from "react-icons/fa";
import SideBar from "../SideBar";
const NavBar = ({ ...props }) => {
  const [sidebarActive, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarActive);
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavBarContainer>
          <NavLogo>impablo</NavLogo>
          <MobileIcon>
            <FaBars onClick={toggleSidebar} color="white"></FaBars>
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="portfolio">Portfolio</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact">Contact</NavLinks>
            </NavItem>
          </NavMenu>
        </NavBarContainer>
      </Nav>
      <SideBar toggle={toggleSidebar} isOpen={sidebarActive}></SideBar>
    </>
  );
};

export default NavBar;
