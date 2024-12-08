import styles from './styles.module.css';

const {footer_section, footer_content} = styles;

interface FooterSectionProps {
    title: React.ReactNode,
    content: React.ReactNode; // it can be any type of data
}
const FooterSection : React.FC<FooterSectionProps> = ({ title, content }) => {
    return (
        <div className={footer_section}>
            <h5>{title}</h5>
            <span className={footer_content}>{content}</span>
            
        </div>
    )
}

export default FooterSection
