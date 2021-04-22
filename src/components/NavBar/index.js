import React from "react";

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
            <h1>imPablo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
            <NavLink to="about" activeStyle>
                About
            </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default NavBar;
