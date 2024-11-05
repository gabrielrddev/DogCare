import { useState } from "react";
import { Link } from "react-router-dom";
import { CalendarData } from "../../components/Calendar";
import EditableNotes from "../../components/EditableNotes";
import adminback from "/img/adminback.png";
import { Footer } from "../../components/Footer";
import logocachorro from "/img/logocachorro.jpg"
import adminjunin from "/img/adminjunin.jpg"

export function AdminCalendar() {
  const [showPetDetails, setShowPetDetails] = useState(false);

  // Dados do pet para exibir
  const petDetails = {
    name: "Alfredo",
    alergia: "Pasta de amedoin",
    age: "2 anos",
    owner: "João da Silva",
  };

  // Função para exibir ou ocultar os detalhes do pet
  const togglePetDetails = () => {
    setShowPetDetails(!showPetDetails);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header fixo no topo */}
      <header className="top-0 bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link to="/">Home</Link>
        </h1>
        <img src={adminjunin} alt="user.png" className="w-10 h-10 rounded-full" />
      </header>

      {/* Seção da imagem com texto sobreposto e botão */}
      <div className="flex flex-col items-center justify-center ">
        <section
          className="relative bg-cover bg-center h-80 w-full flex flex-col justify-center items-center mb-4"
          style={{ backgroundImage: `url(${adminback})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50 rounded-md"></div>
          <div className="relative z-10 text-center">
            <h1 className="text-5xl font-bold text-orange-500"><Link to='/'> DogCare</Link></h1>
            <h2 className="text-2xl mt-2 text-white">Administração</h2>
            <p  className="text-orange-400 font-semibold text-lg no-underline">
                Painel do Administrador </p>
          </div>
        </section>

        {/* Botão centralizado abaixo da imagem */}
        <button className="bg-orange-500 text-white px-6 py-3 rounded-md shadow-md mb-8 hover:bg-orange-600">
        <Link to="AdminHistory"> Pedidos de Agendamento </Link> </button>
      </div>

      {/* Conteúdo principal com agendamentos, histórico e notas */}
      <main className="flex-grow flex flex-col items-center p-4">
        <div className="w-full max-w-5xl grid grid-cols-3 gap-6">
          {/* Coluna do calendário */}
          <div className="bg-white rounded-md shadow-md p-6 col-span-1">
            <h4 className="font-semibold mb-4">Agendamentos Confirmados</h4>
            <CalendarData />
          </div>

          {/* Coluna principal para histórico e notas */}
          <div className="bg-white rounded-md shadow-md p-6 col-span-2">
            <div className="grid grid-cols-2 gap-6">
              {/* Histórico */}
              <div>
                <h4 className="font-semibold mb-2">Histórico</h4>
                <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400">
                  <Link to="AdminHistory">Registro de entradas</Link>
                </button>

                {/* Espaço para a foto do pet */}
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Pets do dia:</h4>
                  <img
                    src={logocachorro} // Coloque aqui o caminho para a imagem do pet
                    alt="Foto do Pet"
                    className="w-32 h-32 object-cover rounded-md cursor-pointer"
                    onClick={togglePetDetails}
                  />
                  {showPetDetails && (
                    <div className="mt-4 bg-gray-100 p-4 rounded-md shadow-md">
                      <h5 className="font-bold text-lg mb-2">Detalhes do Pet</h5>
                      <p><strong>Nome:</strong> {petDetails.name}</p>
                      <p><strong>Alergia:</strong> {petDetails.alergia}</p>
                      <p><strong>Idade:</strong> {petDetails.age}</p>
                      <p><strong>Dono:</strong> {petDetails.owner}</p>
                    </div>
                  )}
                </div>
              </div>
              {/* Notas */}
              <div>
                <h4 className="font-semibold mb-2">Notas</h4>
                <EditableNotes />
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
