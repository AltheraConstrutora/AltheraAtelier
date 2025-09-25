import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logo from "../../../src/logo.png"; // ✅ importa direto do src

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Althera Atelier" className="logo" />
        </Link>
        <nav className="nav">
          <Link to="/" className="nav-link emphasis">
            Home
          </Link>
          <Link to="/portfolio" className="nav-link emphasis">
            Portfólio
          </Link>
          <Link to="/contato" className="nav-link emphasis">
            Contato
          </Link>
          <Link to="/sobre" className="nav-link emphasis">
            Sobre
          </Link>
        </nav>
      </div>
    </header>
  );
}