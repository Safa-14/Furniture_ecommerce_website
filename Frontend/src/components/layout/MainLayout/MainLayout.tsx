import { Container } from 'react-bootstrap'
import styles from './styles.module.css';

import Header from '@components/common/Header/Header'
import Footer from '@components/common/Footer/Footer'
import { Outlet } from 'react-router-dom';

const {container, wrapper} = styles;

function MainLayout() {
  return (
    
    <Container className={container}>
      <Header/>
      
      <div className={wrapper}>
         <Outlet />   {/* dynamic component This is where the child routes will be rendered    */}
      </div>

      <Footer/>      
    </Container>
  )
}

export default MainLayout
