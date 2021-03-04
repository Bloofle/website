import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
export const Header = () => {
    return (
        <Navbar expand="lg" variant="dark" bg="dark">
          <Navbar.Brand href="/">Bloofle</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <NavDropdown title="My Works" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/videos">Videos</NavDropdown.Item>
                    <NavDropdown.Item href="/drawings">Drawings</NavDropdown.Item>
                    <NavDropdown.Item href="/music">Music</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="https://rec.net/bloofle" target="_blank">My RecRoom Profile</Nav.Link>
              </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
};