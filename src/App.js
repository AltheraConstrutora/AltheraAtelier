import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./features/header/Header";
import Home from "./features/home/Home";
import Portfolio from "./features/portfolio/Portfolio";
import Contato from "./features/contato/Contato";
import Footer from "./features/footer/Footer";
import Sobre from "./features/sobre/Sobre";
import "./global.css";

export default function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}