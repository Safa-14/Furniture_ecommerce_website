import styles from './styles.module.css'

const { whyUs_container, whyUs_heading, whyUs_items, whyUs_item } = styles;

const WhyUs = () => {
    const whyItems = [
        {
            title: "Free Shipping",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            title: "24/7 Support",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            title: "Secure Payments",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
    ];

  return (
    <div className={ whyUs_container } >
        <span className={whyUs_heading}>Why <br/> Choosing Us</span>
        <div className={whyUs_items}>
            {whyItems.map((item, index) => (
                <div  key={index} className={whyUs_item}>
                    <span>{item.title}</span>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default WhyUs
