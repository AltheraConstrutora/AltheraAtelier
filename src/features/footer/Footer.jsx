import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Althera Atelier – Engenharia & Arquitetura</p>
        <div className="footer-links">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram size={18} style={{ marginRight: "8px" }} />
            Instagram
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook size={18} style={{ marginRight: "8px" }} />
            Facebook
          </a>
          <Link to="/contato">
            <FaEnvelope size={18} style={{ marginRight: "8px" }} />
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}
