import "./sobre.css";

export default function Sobre() {
  return (
    <div className="sobre">
      {/* HERO */}
      <section className="sobre-hero">
        <div className="sobre-hero-content">
          <h1>Sobre Nós</h1>
          <p>Transformando Projetos em Realidade</p>
        </div>
      </section>

      {/* HISTÓRIA */}
      <section className="sobre-historia">
        <h2>Nossa História</h2>
        <p>
          A <strong>Althera Atelier</strong> nasceu do sonho de fazer diferente o que muitos faziam por igual.
          Nossa missão é proporcionar ao cliente uma experiência única — de lar, trabalho e conforto —
          unindo o aconchego à sofisticação. 
        </p>
        <p>
          Nosso propósito é entregar ao cliente seu projeto pronto para ser usado: 
          seja uma casa, escritório ou apenas um ambiente. 
          Realizamos toda a engenharia, design e arquitetura e, sempre que possível, 
          entregamos o espaço já mobiliado e pronto para ser vivido.
        </p>
        <p className="significado">
          <strong>O que significa Althera Atelier?</strong><br />
          “Althera” vem de <em>alter</em> (latim, “outro, diferente”) + <em>thera</em> (referência a terra, espaço), 
          simbolizando um novo jeito de fazer, um espaço único.  
          “Atelier” é oficina ou estúdio criativo.  
          Juntas, as palavras representam <strong>um estúdio criativo que transforma espaços de forma única e diferenciada</strong>.
        </p>
      </section>

      {/* MISSÃO VISÃO VALORES */}
      <section className="sobre-valores">
        <div className="valor-card">
          <h3>Missão</h3>
          <p>
            Transformar sonhos em realidade através de projetos que unem 
            estética, funcionalidade e excelência técnica.
          </p>
        </div>

        <div className="valor-card">
          <h3>Visão</h3>
          <p>
            Ser referência em design, engenharia e arquitetura, 
            criando ambientes que inspirem e acolham.
          </p>
        </div>

        <div className="valor-card">
          <h3>Valores</h3>
          <p>
            Ética, inovação, compromisso com o cliente e atenção aos detalhes em cada etapa do projeto.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="sobre-cta">
        <h2>Pronto para transformar seu projeto em realidade?</h2>
        <p>Fale com a nossa equipe e vamos planejar juntos o seu próximo espaço.</p>
        <a href="/contato" className="cta-btn">Entrar em Contato</a>
      </section>
    </div>
  );
}