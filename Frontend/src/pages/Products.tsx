import FilterSidebar from "@components/ecommerce/FilterSidebar/FilterSidebar";
import Product from "@components/ecommerce/Product/Product";
import { products } from "../data/data";
import { useEffect, useState } from "react";
import  Modal  from "@components/common/Modal/Modal";
// import { Container, Row, Col } from "react-bootstrap";
// import styles from "@styles/global.css";

// const {category_container, products_section} = styles; // Assuming 'categoryContainer' is a class in your CSS file

interface FilterState {
  category: string[];
  price: { min: number; max: number };
  color: string[];
  material: string[];
}

interface ProductType {
  id: number,
  img_product: string;
  title_product: string;
  price_product: string;
}

const Products = () => {
  const [cart, setCart] = useState<any[]>([]);
  const [filters, setFilters] = useState<FilterState>({
    category: [],
    price: {
      min: 0,
      max: 1000,
    },
    color: [],
    material: [],
  });

  const [isModalOpen, setIsModalOpen] = useState<number | null>(null);

  const handleOpen = (productId: number) => {
    console.log("Opening modal for product ID:", productId);
    setIsModalOpen(productId);
  };
  
  const handleClose = () => {
    console.log("Closing modal");
    setIsModalOpen(null);
  };
  

  // useEffect(() => {  // we render the categories from the API
  //   // fetch categories from API
  //   const fetchCategories = async () => {
  //     try {
  //       const response = await fetch('https://fakestoreapi.com/products/categories')
  //       const data: string[] = await response.json()
  //       // console.log(data);
  //       setCategories(data);

  //     } catch (error) {
  //       console.error('Error fetching categories', error)
  //     }
  //   }

  //   fetchCategories();
  // }, [])

  // Filter the products based on active filters
  const filteredProducts = products.filter((product) => {
    // console.log("Filters:", filters);
    // console.log("Products:", product);

    // Filter by category: check if th array is empty that mean you didnt select a filter or to check the category inside the data file exists in the array of the filters
    const categoryMatch =
      filters.category.length === 0 ||
      filters.category.map((c) => c.toLowerCase().trim()).includes(product.category.toLowerCase().trim());


    // Filter by price
    const priceMatch =
      parseFloat(product.price.toString()) >= filters.price.min &&
      parseFloat(product.price.toString()) <= filters.price.max;

    // // Filter by color
    const colorMatch =
      filters.color.length === 0 ||
      filters.color.map((c) => c.toLowerCase().trim()).includes(product.color.toLowerCase().trim());

    // // Filter by material
    const materialMatch =
      filters.material.length === 0 ||
      filters.material.map((c) => c.toLowerCase().trim()).includes(product.material.toLowerCase().trim());

    return categoryMatch && priceMatch && colorMatch && materialMatch;
  });

  // Log updated filters for debugging

  // console.log('filteredProducts',filteredProducts);

  useEffect(() => {
    console.log("Updated filters:", filters);
  }, [filters]);

  const handleAddToCart = (product: any, quantity: number) => {
    const cartItem = { ...product, quantity };
    setCart((prevCart) => [...prevCart, cartItem]);
    console.log('2',quantity);
    

    // Optionally, save the cart to a backend database here
    // (example: use an API call to store cart data in your database)
  };

  return (
    <div className="products_container">
      {/* Filter Side */}
      <aside className="filter_sidebar_section">
        <FilterSidebar filters={filters} setFilters={setFilters} />
      </aside>

      {/* Product Grid Side */}
      <main className="row">

        {filteredProducts.length > 0
          ? filteredProducts.map((product, index) => (
            <div key={index} className="col-md-4 mb-4">

              <Product
                handleOpen={handleOpen}
                img_product={product.image}
                title_product={product.title}
                price_product={product.price.toString()}
                product_id={product.id} />
            </div>
          )) : "No products match the selected filters."}
{/* POP UP MODAL */}
<div>
      <Modal
          data={products.find((item) => item.id === isModalOpen)}
          isModalOpen={isModalOpen}
          handleClose={handleClose}
          handleAddToCart={handleAddToCart} // Pass add-to-cart function to Modal
        />
      </div>
        
      </main>

      
      


    </div>
  );
};

export default Products;
