import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import "./styles.module.css";
import styles from "./styles.module.css";
import { PiMinus, PiPlus } from "react-icons/pi";
import { IoMdHeartEmpty } from "react-icons/io";


interface ModalProps {
    isModalOpen: number | null; // Matches your state type
    handleClose: () => void;
    handleAddToCart: (product: any, quantity: number) => void;
    data: any | undefined; // Add this to receive product details
}

const Modal = ({ isModalOpen, handleClose, handleAddToCart, data }: ModalProps) => {
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        if (isModalOpen) {
            console.log('modal open');
            // console.log('quantity', quantity);
        } else {
            console.log('modal close');
        }
    }, [isModalOpen, quantity]);

    // console.log('data', data);

    const increaseQuantity = () => {
        console.log('quantity', quantity);
        const newQty = Math.max(quantity + 1, 1);
        setQuantity(newQty)
        // const newQty = currentQuantity + 1;
        // setQty(newQty);
    };
    const decreaseQuantity = () => {
        // console.log('quantity', quantity);
        const newQty = Math.max(quantity - 1, 1);
        setQuantity(newQty)

        // const newQty = Math.max(currentQuantity - 1, 1);
        // setQty(newQty);

    };

    const addToCart = () => {
        if (data) {
            handleAddToCart(data, quantity);
            console.log(data,quantity);
            
            handleClose(); // Close the modal after adding the item
        }
    };

    return (
        <>

            {isModalOpen !== null && data && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>

                        {/* Close Button */}
                        <button
                            className={styles.closeButton}
                            onClick={handleClose}
                        >
                            <FaTimes />
                        </button>

                        {/* Modal content */}
                        <div className={styles.modalBody}>
                            <div className={styles.imageWrapper}>
                                <img src={data.image} alt={data.title} />

                            </div>
                            <div className={styles.details}>
                                <h2>{data.title}</h2>
                                <p className={styles.price}>${data.price}</p>
                                <p className={styles.description}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In minima nostrum perspiciatis velit doloribus mollitia natus, officia inventore dignissimos.
                                </p>

                                <div>
                                    <span style={{ marginRight: '30px' }}>
                                        <span style={{
                                            fontWeight: '700', color: '#000',
                                            fontFamily: 'PocoSourceSansPro',
                                            fontSize: '1rem',
                                            lineHeight: '1.5'
                                        }}>
                                            Color:
                                        </span>
                                        <span style={{
                                            color: `${data.color}`,
                                        }}>
                                            {data.color}
                                        </span>
                                    </span>

                                    <span >
                                        <span style={{
                                            fontWeight: '700', color: '#000',
                                            fontFamily: 'PocoSourceSansPro',
                                            fontSize: '1rem',
                                            lineHeight: '1.5'
                                        }}>
                                            Material:
                                        </span>
                                        {data.material}</span>
                                </div>


                                {/* Quantity and Add to Cart */}
                                <div className={styles.actions}>
                                    <div className={styles.quantityControl}>
                                        <button onClick={() => decreaseQuantity()}><PiMinus /></button>
                                        <input type="number" value={quantity} readOnly />
                                        <button onClick={() => increaseQuantity()}><PiPlus /></button>
                                    </div>
                                    <div style={{ marginLeft: 'auto' }}>
                                        <button className={styles.addToFavorites}>
                                            <IoMdHeartEmpty />
                                        </button>
                                        <button onClick={addToCart} className={styles.addToCart}>Add to Cart</button>
                                    </div>


                                </div>

                            </div>
                        </div>

                    </div>

                </div>

            )}
        </>
    );
};

export default Modal;