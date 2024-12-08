import { Navbar } from 'react-bootstrap';
import styles from './styles.module.css';


const { navbar_logo } = styles;
const Logo = () => {
  return (
    <Navbar.Brand href="/" className={navbar_logo}>
      Ecommerce &nbsp; Brand
    </Navbar.Brand>
  )
}

export default Logo
