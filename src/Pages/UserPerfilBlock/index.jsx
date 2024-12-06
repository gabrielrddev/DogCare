import { Footer } from "../../components/Footer";
import imagemdogcare from "/img/imageDogCareHome.png";
import imagemPerfil from "/img/adminback.png";
import { Link } from "react-router-dom";
import { useState } from "react"; // Importando useState para gerenciar o estado
import { HeaderAdmin } from "../../components/HeaderAdmin";

export const UserPerfilBlock = () => {
  // Exemplos de dados dos cachorros
  const dogs = [
    {
      id: 1,
      name: "Rex",
      photo: "/img/dog01.jpeg",
      weight: "10 kg",
      size: "Médio",
      allergies: "Nenhuma",
    },
    {
      id: 2,
      name: "Luna",
      photo: "/img/dog02.jpg",
      weight: "5 kg",
      size: "Pequeno",
      allergies: "Pólen",
    },
    {
      id: 3,
      name: "Max",
      photo: "/img/dog03.jpg",
      weight: "25 kg",
      size: "Grande",
      allergies: "Frutos do mar",
    },
  ];

  // Estado para controlar se o usuário está bloqueado ou não
  const [isBlocked, setIsBlocked] = useState(false);

  // Função para bloquear o usuário
  const handleBlockUser = () => {
    setIsBlocked(true); // Atualiza o estado para bloqueado
  };

  return (
    <div>
      <HeaderAdmin />

      <main className="flex-grow">
        <section className="relative">
          <img
            className="w-full h-96 object-cover"
            src={imagemdogcare}
            alt=""
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center rounded-lg text-white bg-black bg-opacity-50 p-8">
            <div className="flex items-center space-x-4">
              <img
                src={imagemPerfil}
                alt="Profile Picture"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h2 className="text-xl font-medium">Arnaldo</h2>
                <p className="text-gray-400">
                  {isBlocked ? "Usuário Bloqueado" : "Status de agendamento"}
                </p>
              </div>
            </div>
            <div className="mt-6">
              <h2 className="text-2xl font-medium">Meus pets</h2>
            </div>
          </div>
        </section>

        {/* Seção dos cachorros */}
        <section className="mt-12 px-6">
          <h2 className="text-3xl font-medium text-center mb-8">
            Meus Cachorros
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dogs.map((dog) => (
              <div
                key={dog.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-6"
              >
                <img
                  src={dog.photo}
                  alt={dog.name}
                  className="w-32 h-32 object-cover rounded-full mb-4"
                />
                <h3 className="text-xl font-medium">{dog.name}</h3>
                <div className="mt-4 text-gray-600">
                  <p>
                    <strong>Peso:</strong> {dog.weight}
                  </p>
                  <p>
                    <strong>Tamanho:</strong> {dog.size}
                  </p>
                  <p>
                    <strong>Alergias:</strong> {dog.allergies}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Seção do botão de bloquear usuário */}
        <section className="mt-8 text-center">
          {!isBlocked ? (
            <button
              onClick={handleBlockUser}
              className="bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-700 transition"
            >
              Bloquear Usuário
            </button>
          ) : (
            <p className="text-xl text-red-600 font-bold">Usuário Bloqueado</p>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};
