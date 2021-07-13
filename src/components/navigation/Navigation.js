import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { withRouter } from "react-router";

function Navigation(props) {
  const { location } = props
  return (
    <Navbar style={{background: "ghostwhite"}} expand="lg">
      <Navbar.Brand style={{color: "cadetblue", font: "Roboto"}} href="/">Ben Salinaro</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav
          className="mr-auto"
          activeKey={location.pathname}
          onSelect={(selectedKey) => this.activeKey=`${selectedKey}`}
        >
          <Nav.Link style={{font: "Roboto"}} eventKey="/" href="/">About</Nav.Link>
          <Nav.Link style={{font: "Roboto"}} eventKey="React-Portfolio/#/Portfolio" href="React-Portfolio/#/Portfolio">Portfolio</Nav.Link>
          <Nav.Link style={{font: "Roboto"}} eventKey="React-Portfolio/#/Contact" href="React-Portfolio/#/Portfolio">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

const NavigationWithRouter = withRouter(Navigation);
export default NavigationWithRouter;