import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <section className="details-card">
      <p className="section-label">404</p>
      <h2>Página não encontrada</h2>
      <p>A rota acessada não existe nesta estrutura inicial.</p>
      <Link to="/" className="hero__link">
        Voltar para a home
      </Link>
    </section>
  );
}

export default NotFoundPage;
