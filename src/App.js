import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./features/home/Home";
import Contato from "./features/contato/Contato";
import Portfolio from "./features/portfolio/Portfolio";
import Sobre from "./features/sobre/Sobre";
import Header from "./features/header/Header";
import Footer from "./features/footer/Footer";

export default function App() {
  return (
    <BrowserRouter basename="/AltheraAtelier">
      <Header />
      <main>
        <Routes>
          <Route path="/AltheraAtelier" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}