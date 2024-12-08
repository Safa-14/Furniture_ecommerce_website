import { Container, Navbar } from 'react-bootstrap';
import CustomNavbar from '../Navbar/Nav';

import styles from './styles.module.css';

import Logo from '../Logo/Logo';
import UserIcons from '../UserIcons/UserIcons';
import { useEffect, useState } from 'react';
// import CardButton from '../CardButton/CardButton';


const { custom_navbar } = styles;

function Header() {
  const [cart, setCart] = useState<any[]>([]);
  useEffect(() => {
    console.log("Updated cart:", cart);
  }, [cart]);
   // Simulate adding items to the cart
  //  const addToCart = () => {
  //   setCart((prevCart) => [...prevCart, { id: prevCart.length + 1, name: `Item ${prevCart.length + 1}` }]);
  // };

  return (
    <Navbar expand="lg" className={custom_navbar}>
      <Container>
        {/* Navbar Toggle for Mobile View */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Logo />
          <CustomNavbar />
          <UserIcons cartCount={cart.length}/>
        </Navbar.Collapse>
      </Container>
      {/* Add a button for testing (this should be replaced by your actual logic to add to cart) */}
      {/* <div style={{display:'none'}}> */}
      {/* <CardButton addToCart ={addToCart} /> */}
      {/* </div> */}
      
    </Navbar>
  )
}

export default Header
