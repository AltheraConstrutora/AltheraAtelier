import "./home.css";

export default function Home() {
  return (
    <div className="home">
      {/* ===== HERO / BANNER ===== */}
      <section className="hero">
        <div className="hero-content">
          <h1>Transformamos Projetos em Realidade</h1>
          <p>
            Na Althera Atelier, unimos engenharia, arquitetura e design para
            entregar obras que unem estética, funcionalidade e confiança.
          </p>
          <a href="#portfolio" className="cta-btn">
            Conheça Nossos Projetos
          </a>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="features">
        <div className="feature-card">
          <img
            src="/images/icons/experience.png"
            alt="Experiência"
            className="feature-icon"
          />
          <h3>Paixão pela Excelência</h3>
          <p>
            Profissionais qualificados e apaixonados por transformar sonhos em
            realidade.
          </p>
        </div>

        <div className="feature-card">
          <img
            src="/images/icons/quality.png"
            alt="Qualidade"
            className="feature-icon"
          />
          <h3>Qualidade Garantida</h3>
          <p>
            Projetos que unem estética, funcionalidade e engenharia de alto
            padrão.
          </p>
        </div>

        <div className="feature-card">
          <img
            src="/images/icons/support.png"
            alt="Suporte"
            className="feature-icon"
          />
          <h3>Atendimento Personalizado</h3>
          <p>
            Estamos ao seu lado em todas as etapas, do planejamento à execução.
          </p>
        </div>
      </section>

      {/* ===== PORTFÓLIO ===== */}
      <section id="portfolio" className="portfolio">
        <h2>Projetos em Destaque</h2>
        <div className="portfolio-grid">
          <div className="portfolio-card">
            <img src="/images/portfolio/casa-moderna.jpg" alt="Projeto 1" />
            <h3>Residência Moderna</h3>
          </div>

          <div className="portfolio-card">
            <img src="/images/portfolio/escritorio.jpeg" alt="Projeto 2" />
            <h3>Espaço Corporativo</h3>
          </div>

          <div className="portfolio-card">
            <img src="/images/portfolio/loft.jpg" alt="Projeto 3" />
            <h3>Loft Insdustrial</h3>
          </div>
        </div>
      </section>

      {/* ===== CALL TO ACTION ===== */}
      <section className="cta-section">
        <h2>Pronto para transformar seu projeto em realidade?</h2>
        <p>Fale conosco e vamos juntos dar vida às suas ideias!</p>
        <a href="/contato" className="cta-btn">
          Solicitar Orçamento
        </a>
      </section>
    </div>
  );
}