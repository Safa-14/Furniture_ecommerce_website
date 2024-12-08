import Category from "@components/ecommerce/Category/Category";
import { Container, Row, Col } from "react-bootstrap";
import { categories_list } from "../data/data";


// const Title = "Shirts & Blouses";
const Categories = () => {
  
  return (
    <Container>
      <Row>
      {categories_list.length > 0 
      ? categories_list.map((category) => (
        <Col key={category.id} xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2">
          {/* <Category title={category.title} img={category.img} pre/> */}
          <Category {...category}/>
        </Col>
      ))
    : "No categories available"}
      </Row>
    </Container>
  );
};

export default Categories;
