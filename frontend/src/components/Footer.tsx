import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">© 2025 Mi Proyecto - Todos los derechos reservados</p>

      <div className="footer-icons">
        <a
          href="https://www.facebook.com/talendigrd/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="icon" />
        </a>

        <a
          href="https://www.instagram.com/talendigrd/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="icon" />
        </a>

        <a
          href="https://wa.me/15551234"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="icon" />
        </a>

        <a href="/" className="regresar">
          Volver a Home
        </a>
      </div>
    </footer>
  );
};

export default Footer;
