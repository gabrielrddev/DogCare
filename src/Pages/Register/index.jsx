import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header"

export function Register() {
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
    <div>
      <Header />
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-gray-200 p-6 rounded-md shadow-lg min-w-[27rem] min-h-[19rem]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Crie sua conta</h2>
          <Link to="/" className="text-xl text-black">
            X
          </Link>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="email"
            className="w-full p-2 mb-3 border border-gray-300 rounded-md"
            placeholder="Coloque seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="email"
            className="w-full p-2 mb-3 border border-gray-300 rounded-md"
            placeholder="Repita o email"
            value={emailConfirmation}
            onChange={(e) => setEmailConfirmation(e.target.value)}
            required
          />
          <input
            type="password"
            className="w-full p-2 mb-3 border border-gray-300 rounded-md"
            placeholder="Crie uma senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            className="w-full p-2 mb-3 border border-gray-300 rounded-md"
            placeholder="Repita a senha"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white p-2 rounded-md transition duration-300 hover:bg-green-500"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
    </div>
  );
}
