import sectionStyles from "../styles/components/Sections.module.css";
import footerStyles from "../styles/components/Footer.module.css";

const Footer = () => {
  return (
    <footer
      className={`${footerStyles.footer} ${sectionStyles["section-roni"]}`}
    >
      Copyright 2022 Piethagoras Pizza Shop
    </footer>
  );
};

export default Footer;
