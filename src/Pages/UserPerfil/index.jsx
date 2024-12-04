import PetList from "../../components/PetList";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import imagemdogcare from "/img/imageDogCareHome.png";
import imagemPerfil from "../../../dist/img/imagemDePerfil.png";

export const UserPerfil = () => {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      <Header />
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
                <h2 className="text-xl font-medium">Usuário1412</h2>
                <p className="text-gray-400">Status de agendamento</p>
              </div>
            </div>
            <div className="mt-6">
              <h2 className="text-2xl font-medium">Meus pets</h2>
            </div>
          </div>
        </section>

        <PetList />
      </main>

      <Footer />
    </div>
  );
};
