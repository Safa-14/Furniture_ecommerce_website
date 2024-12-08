import { useEffect } from 'react';
import { Nav } from 'react-bootstrap';

import { useLocation, NavLink } from 'react-router-dom';

function CustomNavbar() {
  const location = useLocation(); // Get the current location

  useEffect(() => {
    console.log(`Navigating to: ${location.pathname}`); // Log the current path
  }, [location]);

  return (
    <Nav className="mx-auto">
      <Nav.Link to="/" as={NavLink}>
        Home
      </Nav.Link>
      <Nav.Link to="/categories" as={NavLink}>
        Categories
      </Nav.Link>
      <Nav.Link to="/about-us" as={NavLink}>
        About
      </Nav.Link>
      <Nav.Link to="/contact" as={NavLink}>
        Contact
      </Nav.Link>
    </Nav>
  )
}

export default CustomNavbar


