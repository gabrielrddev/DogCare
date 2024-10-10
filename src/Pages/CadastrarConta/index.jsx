import * as C from "./styles.js";
import { useState } from "react";
import { Link } from "react-router-dom";

export function CadastrarConta() {
  const [email, setEmail] = useState("");
  const [emailConfirmation, setEmailConfirmation] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <C.Container>
      <C.ContainerItem>
        <C.ContainerTitle>
          <C.Title>Crie sua conta</C.Title>
          <C.CloseButton className="close-button"><Link to="/">X</Link></C.CloseButton>
        </C.ContainerTitle>
        <C.Formulario onSubmit={handleSubmit}>
          <C.FormInput
            type="email"
            placeholder="Coloque seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <C.FormInput
            type="email"
            placeholder="Repita o email"
            value={emailConfirmation}
            onChange={(e) => setEmailConfirmation(e.target.value)}
            required
          />
          <C.FormInput
            type="password"
            placeholder="Crie uma senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <C.FormInput
            type="password"
            placeholder="Repita a senha"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            required
          />
          <C.SubmitButton type="submit">Cadastrar</C.SubmitButton>
        </C.Formulario>
      </C.ContainerItem>
    </C.Container>
  );
}
