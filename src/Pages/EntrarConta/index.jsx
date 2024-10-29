import { useState } from "react";
import { Link } from "react-router-dom";
import './styles.css'; // Import your CSS file here

export function EntrarConta() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempted");
  };

  return (
    <div className="container">
      <div className="form-container">
        <div className="form-header">
          <h2 className="title">Entre na sua conta</h2>
          <button className="close-button"><Link to="/"  className="close-button">X</Link></button>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="email"
            className="input"
            placeholder="Insira seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="input"
            placeholder="Insira a sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="submit-button">Entrar</button>
        </form>
        <a href="#" className="forgot-password">Esqueci minha senha.</a>
      </div>
    </div>
  );
}
