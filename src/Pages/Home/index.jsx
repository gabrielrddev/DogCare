import imagemdogcare from "/img/imageDogCareHome.png";
import { Link } from "react-router-dom";
import  {Footer}  from '../../components/Footer/index.jsx';
import { Header } from "../../components/Header"

export function Home() {

  function markTo() {
    alert('Porfavor crie uma conta para poder realizar seu agendamente.')
  }
  return (
    <div className="font-sans">
      <Header />
      <main>
        <section className="relative">
          <img className="w-full h-96 object-cover" src={imagemdogcare} alt="" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center rounded-lg text-white bg-black bg-opacity-50 p-8">
            <h2 className="text-3xl mb-4">DogCare</h2>
            <p>Seu cãozinho em ótimas mãos enquanto você viaja ou precisa se ausentar</p>
            <button className="bg-orange-300 text-white px-4 py-2 mt-4 rounded-lg">Saiba mais</button>
          </div>
        </section>

        <section className="max-w-xl mx-auto my-8">
          <div className="bg-orange-100 p-4 rounded-lg">
            <h3 className="text-lg">Endereço</h3>
            <div className="flex gap-4 mt-2">
              <input type="text" placeholder="Data Entrada" className="flex-1 p-2 border border-gray-300 rounded" />
              <input type="text" placeholder="Data Saída" className="flex-1 p-2 border border-gray-300 rounded" />
              <button onClick={()=> markTo()} className="bg-orange-300 text-white px-4 py-2 rounded-lg">Agendar</button>
            </div>
          </div>
        </section>

        <section className="max-w-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg">Onde Estamos</h3>
            <p>R. Exemplo, 123 - Bairro Exemplo, São Paulo - SP, 12345-678</p>
            <p>+55 (11) 91234-5678</p>
            <p>contato@dogcare.com.br</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg">Nossos Serviços</h3>
            <ul className="list-disc pl-5">
              <li>Daycare - diversão e cuidados especiais durante o dia</li>
              <li>Banho e Tosa - deixe seu amigo limpo e cheiroso</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
