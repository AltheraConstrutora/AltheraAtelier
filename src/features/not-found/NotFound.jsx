import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section style={styles.section}>
      <h2>404 - Página não encontrada</h2>
      <p>A página que você tentou acessar não existe.</p>
      <Link to="/" style={styles.link}>
        Voltar para Home
      </Link>
    </section>
  );
}

const styles = {
  section: {
    textAlign: "center",
    padding: "3rem",
  },
  link: {
    display: "inline-block",
    marginTop: "1rem",
    padding: "0.7rem 1.5rem",
    backgroundColor: "var(--primary)",
    color: "white",
    textDecoration: "none",
    borderRadius: "8px",
  },
};
