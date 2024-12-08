import React from 'react'
import { IoMdHeartEmpty } from "react-icons/io";
import styles from '../Modal/styles.module.css'

interface CardButtonProps {
    addToCart: any; // Matches your state type

}

const CardButton = ({ addToCart }: CardButtonProps) => {
    
    return (
        <div style={{ marginLeft: 'auto' }}>
            <button className={styles.addToFavorites}>
                <IoMdHeartEmpty />
            </button>
            <button onClick={addToCart} className={styles.addToCart}>Add to Cart</button>
        </div>
    )
}

export default CardButton
