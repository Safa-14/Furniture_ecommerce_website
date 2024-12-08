import { Button } from "react-bootstrap";
import styles from "./styles.module.css";
import { BiBorderRadius, BiCart } from "react-icons/bi";
import { IoMdHeartEmpty, IoMdSearch } from "react-icons/io";
// const { product, productImg, addToCartButton } = styles;

interface ProductProps {
  img_product: string;
  title_product: string;
  price_product: string;
}

const Product = ({ img_product, title_product, price_product }: ProductProps) => {

  return (
    // <div className={product}>
    //   <div className={productImg}>
    //     <img
    //       src={img_product}
    //       alt=""
    //     />
    //   </div>
    //   <h2>{title_product}</h2>
    //   <h3>{price_product}</h3>
    //   <Button variant="info" className={addToCartButton}>
    //     Add to cart
    //   </Button>
    // </div>
    <div className="card shadow-sm position-relative">
      <div className="position-relative">
        <img
          src={img_product}
          alt="img"
          className="card-img-top rounded"
          style={{ borderRadius: "15px" }}
        />
        <div
          className="position-absolute top-0 end-0 m-2"
          style={{ opacity: 0 }}
        >
          <div className="d-flex flex-column gap-2">
            <button className="btn btn-light rounded-circle shadow">
              <IoMdHeartEmpty />
            </button>
            <button className="btn btn-light rounded-circle shadow">
              <IoMdSearch />
            </button>
          </div>
        </div>
        <div
          className="position-absolute bottom-0 end-0 bg-white rounded-start shadow p-2"
          style={{ opacity: 0, transform: "translateY(50%)" }}
        >
          <button
            className="btn btn-dark rounded-circle"
            
          >
            <BiCart className="fs-5 text-white" />
          </button>
        </div>

      </div>
      <div className="card-body text-center">
        <h5 className="card-title">{title_product}</h5>
        <p className="card-text">${price_product}</p>
      </div>

    </div>
  );
};

export default Product;