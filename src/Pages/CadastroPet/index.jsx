import { Link } from "react-router-dom";
import "./styles.css";

export function CadastrarPet() {
    return(
    <>


    <header class="header">
        <div class="logo"><Link to='/'>DogCare</Link></div>
    </header>

    <div class="profile-banner">
        <div class="profile-info">

            <div class="username">Usuário1412</div>
            <div class="bio">Status do agendamento<br />Meus pets</div>
        </div>
    </div>

    <main className="main-content">
        <form>
            <div className="form-group">
                <label for="name">Nome</label>
                <input type="text" id="name" name="name"/>
            </div>
            <div className="form-group">
                <label for="peso">Peso</label>
                <input type="text" id="peso" name="peso"/>
            </div>
            <div className="form-group">
                <label for="alergias">Tem alergias?</label>
                <input type="text" id="alergias" name="alergias"/>
            </div>
            <div className="form-group">
                <label for="agressivo">É(são) agressivo(s)?</label>
                <input type="text" id="agressivo" name="agressivo"/>
            </div>
            <div className="form-group">
                <label for="info">Tem algo que precisamos saber?</label>
                <textarea id="info" name="info"></textarea>
            </div>
            <button><Link to='/'>Cadastrar Seu Pet</Link></button>
        </form>
    </main>

    <footer className="footer">
        DogCare · Rua Luke Skywalker, 123 - São José / SC | Telefone: (48) 9102-3873
    </footer>

        </>
    );
}