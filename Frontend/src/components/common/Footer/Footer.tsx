// import { Nav } from 'react-bootstrap';
import Logo from '../Logo/Logo';
import styles from './styles.module.css'

const { footer_content,style_logo, footer, footer_bottom, style_navbar } = styles;

import React from 'react';
import CustomNavbar from '../Navbar/Nav';
import FooterSection from '../FooterSection/FooterSection';
import SocialMedia from '../SocialMedia/SocialMedia';

const Footer: React.FC = () => {
  return (
    <footer className={footer}>

      <div className={footer_content}>
        <FooterSection 
        title={<span className={style_logo}><Logo /></span>} 
        content={<p>Elegant home Decor.</p>} />

        <FooterSection 
        title={<>Quick Links</>} 
        content={<span className={style_navbar}><CustomNavbar/></span>} />


        <FooterSection 
          title={<>Contact Us</>}
          content={<>
            <p>Do you have any questions or suggestions?:<br/> support@ecommerce.com</p>
            <p>Do you need support? Give us a call:<br/> +123 940 7890</p>
          </>} />

          <FooterSection 
        title={<>Follow Us</>} 
        content={<SocialMedia />} />

      </div>

      <div className={footer_bottom}>
        <p>&copy; {new Date().getFullYear()} Ecommerce Brand. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

