import { BiCart } from "react-icons/bi";
import { IoMdHeartEmpty, IoMdSearch } from "react-icons/io";
import "./styles.module.css"; // Custom CSS file for additional styling
// import styles from "./styles.module.css";
// import { MdHeight } from "react-icons/md";
// import { useState } from "react";
interface ProductProps {
    handleOpen:any;
    product_id: number;
  img_product: string;
  title_product: string;
  price_product: string;
}

const Product = ({ handleOpen, img_product, title_product, price_product,product_id }: ProductProps) => {

    
  return (
    <div className="card product-card shadow-sm position-relative" style={{height:'390px'}}>
      <div className="position-relative overflow-hidden">
        {/* Product Image */}
        <img
          src={img_product}
          alt="Product"
          className="card-img-top rounded-3"
        />

        {/* Hover Icons */}
        <div className="hover-icons position-absolute top-0 end-0 m-3 d-flex flex-column gap-2">
          <button className="btn btn-light rounded-circle shadow-sm">
            <IoMdHeartEmpty />
          </button>
          <button className="btn btn-light rounded-circle shadow-sm" onClick={() => handleOpen(product_id)}>
            <IoMdSearch />
          </button>
        </div>
        <div className="cart-icon position-absolute bottom-0 end-0 m-3">
          <button className="btn btn-dark rounded-circle" 
          >
            <BiCart />
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="card-body text-center">
        <h5 className="card-title mb-1">{title_product}</h5>
        <p className="card-text text-muted">${price_product}</p>
      </div>


    </div>
  );
};

export default Product;
