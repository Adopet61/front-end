
import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,

  Button,

} from "reactstrap";



function index() {
	return (

<div>
<Navbar
      color="light"
      expand="xl"
      fixed="top"
      light
  >
    <NavbarBrand href="http://localhost:3000/"
    size= "xl"
    >
      ADOPET
    </NavbarBrand >
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem >
          <NavLink href="http://localhost:3000/">
            Anasayfa
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="http://localhost:3000/Add">
          Sahiplendir
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="http://localhost:3000/Donate">
          Bağış
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="http://localhost:3000/Animal">
          <Button
            color="success"
            size="sm"
          >
            Sahipsiz Dostlarımız
          </Button>
        
          
          </NavLink>
        </NavItem>
         
      </Nav>
      
    </Collapse>
  </Navbar>
</div>
);

}
export default index;