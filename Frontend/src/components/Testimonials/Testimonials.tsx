import styles from './styles.module.css';
import TestimonialSection from './TestimonialSection';

const { testimonials_container, testimonials_cards } = styles;

const Testimonials = () => {
    return (
        <div className={testimonials_container}>
            <h2>Our Client Reviews</h2>
            <div className={testimonials_cards}>
                <TestimonialSection />
                <TestimonialSection />
                <TestimonialSection />
            </div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Testimonials
