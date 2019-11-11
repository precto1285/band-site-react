import React from 'react';
import AnarchyBrand from '../images/Anarchy.png';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';

const NavController = (props) => {
  return (
    <Nav>
      <NavbarBrand>
        <a href="#">
          <img src={AnarchyBrand} alt="anarchyBrand" width="15%" />
        </a>
      </NavbarBrand>

    </Nav>
  );
};

export default NavController;