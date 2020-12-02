import React from 'react';
import { Navbar, Nav, Button, Row } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home" className="pl-4">
        <Row>
          <span className="font-weight-bold">GiphyService</span>
        </Row>
        <Row>
          <span className="font-weight-light small pl-4">by Smynay</span>
        </Row>
      </Navbar.Brand>
      <Nav className="ml-auto mr-2">
        <Nav.Link href="#home" className="d-none d-sm-block">
          Popular
        </Nav.Link>
        <Nav.Link href="#recent" className="d-none d-sm-block">
          Recent
        </Nav.Link>
        <Button variant="outline-info" href="#search" className="ml-2">
          Search
        </Button>
      </Nav>
    </Navbar>
  );
};

export default Header;
