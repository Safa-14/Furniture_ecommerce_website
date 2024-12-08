import styles from './styles.module.css';

const { testimonial_card, testimonial_card_content, testimonial_image, rating } = styles;

const TestimonialSection = () => {

    return (
        <div className={testimonial_card}>
            <div className={testimonial_card_content}>
            <img src="https://cdn-eu.dynamicyield.com/api/9876644/images/244c68ad42d8b__hp-w12-22032022-h_m-women_shirts-blouses.jpg" alt="" className={testimonial_image}/>
            <h3>John Doe</h3>
            <h6>Product Manager</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className={rating}>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
            </div>
            </div>
            
        </div>
    )
}

export default TestimonialSection
