import { useState } from "react";
import { Link } from "react-router-dom";

export function FixEmail() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempted");
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-orange-600">
      <div className="bg-gray-200 p-6 rounded-lg shadow-lg min-w-[27rem] min-h-[19rem]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Recuperar Conta <br /> 
          Iremos enviar um codigo para seu E-mail</h2> <br />
          <Link to="/" className="text-2xl text-black">X</Link>
        </div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            type="email"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            placeholder="Insira seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="w-full bg-green-500 text-white py-2 rounded transition duration-300 hover:bg-green-600">
            <Link to='FixEmail2' >Enviar</Link>
          </button>
        </form>
      </div>
    </div>
  );
}
