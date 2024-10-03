
import "./styles.css";
import imagemdogcare from "../../../public/img/imageDogCareHome.png";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <div className="dog-care-homepage">
        <header>
          <h1>DogCare</h1>
          <nav>
            <a href="#">
              <Link to="EntrarConta">Entrar</Link>
            </a>
            <Link to="CadastrarConta">Crie Conta</Link>
            <Link to="SimplifiedDogCareAdmin">admin</Link>
          </nav>
        </header>

        <main>
          <section>
            <img className="hero" src={imagemdogcare} alt="" />
            <div className="hero-content">
              <h2>DogCare</h2>
              <p>
                Seu cãozinho em ótimas mãos enquanto você viaja ou precisa se
                ausentar
              </p>
              <button>Saiba mais</button>
            </div>
          </section>

          <section className="booking">
            <div className="booking-form">
              <h3>Endereço</h3>
              <div className="form-inputs">
                <input type="text" placeholder="Data Entrada" />
                <input type="text" placeholder="Data Saída" />
                <button>Agendar</button>
              </div>
            </div>
          </section>

          <section className="info-section">
            <div className="info-card">
              <h3>Onde Estamos</h3>
              <p>R. Exemplo, 123 - Bairro Exemplo, São Paulo - SP, 12345-678</p>
              <p>+55 (11) 91234-5678</p>
              <p>contato@dogcare.com.br</p>
            </div>
            <div className="info-card">
              <h3>Nossos Serviços</h3>
              <ul>
                <li>Daycare - diversão e cuidados especiais durante o dia</li>
                <li>Banho e Tosa - deixe seu amigo limpo e cheiroso</li>
              </ul>
            </div>
          </section>
        </main>

        <footer>
          <p>
            DogCare - Rua Luis Silveirinha, 855 - São José / SC | Telefone: (48)
            99125-2831
          </p>
          <div className="social-icons">
            <a href="#" aria-label="Instagram">
              Instagram
            </a>
            <a href="#" aria-label="Phone">
              Phone
            </a>
            <a href="#" aria-label="Email">
              Email
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
