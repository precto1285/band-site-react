import React from 'react';
import AnarchyBrand from '../images/Anarchy.png';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';

const NavController = (props) => {
  return (

    <Navbar>
      <NavbarBrand>
        <a href="#">
          <img src={AnarchyBrand} alt="anarchyBrand" width="15%" />
        </a>
      </NavbarBrand>
      <Nav>
        <NavItem>
          <NavLink href="#">
            The Band
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            Upcoming Shows
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            Merchandise
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            Join Us
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>

  );
};

export default NavController;