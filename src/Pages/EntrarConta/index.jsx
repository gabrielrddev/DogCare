import  { useState } from "react";
import * as C from "./styles.js";
import { Link } from "react-router-dom";

export function EntrarConta() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempted");
  };

  return (
    <C.Container>
      <C.FormContainer>
        <C.FormHeader>
          <C.Title>Entre na sua conta</C.Title>
          <C.CloseButton><Link to="/">X</Link></C.CloseButton>
        </C.FormHeader>
        <C.Form onSubmit={handleSubmit}>
          <C.Input
            type="email"
            placeholder="Insira seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <C.Input
            type="password"
            placeholder="Insira a sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <C.SubmitButton type="submit">Entrar</C.SubmitButton>
        </C.Form>
        <C.ForgotPassword href="#">Esqueci minha senha.</C.ForgotPassword>
      </C.FormContainer>
    </C.Container>
  );
}
