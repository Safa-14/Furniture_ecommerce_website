import { Nav } from "react-bootstrap"
import { FaHeart, FaShoppingBag } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

import styles from './styles.module.css';

const { cart_badge } = styles;

const UserIcons = ({ cartCount }: { cartCount: number }) => {
    console.log('cartCount',cartCount);
    
    return (
        <Nav className="align-items-center">
            <Nav.Link as={NavLink} to="login" className='d-flex align-items-center'>
                Login
            </Nav.Link>
            <Nav.Link as={NavLink} to="register" >
                Register
            </Nav.Link>
            <Nav.Link as={NavLink} to="favorites">
                <FaHeart />
            </Nav.Link>
            <Nav.Link as={NavLink} to="cart">
            <FaShoppingBag />
            <span className={cart_badge}>{cartCount}</span>
            </Nav.Link>
            
        </Nav>
    )
}


export default UserIcons
