import "./portfolio.css";
import casaModerna from "./casa-moderna.jpg";
import escritorio from "./escritorio.jpeg";
import loft from "./loft.jpg";

export default function Portfolio() {
  const projetos = [
  {
    id: 1,
    nome: "Casa Moderna",
    descricao: "Projeto residencial contemporâneo.",
    imagem: casaModerna
  },
  {
    id: 2,
    nome: "Escritório Minimalista",
    descricao: "Espaço corporativo funcional e elegante.",
    imagem: escritorio
  },
  {
    id: 3,
    nome: "Loft Industrial",
    descricao: "Ambiente urbano e sofisticado.",
    imagem: loft
  }
];

  return (
    <section className="portfolio">
      <h2>Nosso Portfólio</h2>
      <p>Alguns dos projetos que tivemos orgulho de projetar:</p>

      <div className="portfolio-grid">
        {projetos.map((projeto) => (
          <div key={projeto.id} className="portfolio-card">
            <img src={projeto.imagem} alt={projeto.nome} className="portfolio-image" />
            <h3>{projeto.nome}</h3>
            <p>{projeto.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}