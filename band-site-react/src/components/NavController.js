import React from 'react';
import AnarchyBrand from '../images/Anarchy.png';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import './Components.css'

const NavController = (props) => {
  return (

    <Navbar id="navigation" className="sticky-top">
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