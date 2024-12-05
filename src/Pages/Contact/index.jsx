import { Footer } from "../../components/Footer/index.jsx";
import { Header } from "../../components/Header/index.jsx";
import { Link } from "react-router-dom";

export function Contact() {
  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
        <h1 className="text-2xl font-bold text-center text-orange-600 mb-8">
          Caso deseje fazer parte da nossa equipe de profissionais, preencha as
          opções abaixo
        </h1>

        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-semibold text-gray-700"
            >
              Usuário:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Digite seu nome"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-lg font-semibold text-gray-700"
            >
              E-mail:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Digite seu e-mail"
            />
          </div>

          <div>
            <label
              htmlFor="numero"
              className="block text-lg font-semibold text-gray-700"
            >
              Número:
            </label>
            <input
              type="number"
              name="numero"
              id="numero"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Digite seu número"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-orange-600 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <Link to="/">Enviar</Link>
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
