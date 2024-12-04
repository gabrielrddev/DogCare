import imagemdogcare from "/img/imageDogCareHome.png";
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer/index.jsx";


export function About() {
  function markTo() {
    alert("Porfavor crie uma conta para poder realizar seu agendamente.");
  }

  return (
    <div className="font-sans min-h-screen flex flex-col">
              <header className="bg-orange-300 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl"> <Link to="/">DogCare</Link></h1>
        <nav>
          <Link to="Login" className="text-white mx-2 font-bold">Entrar</Link>
          <Link to="Register" className="text-white mx-2 font-bold">Crie Conta</Link>
          <Link to="AdminCalendar" className="text-white mx-2 font-bold">Admin</Link>
        </nav>
      </header>
      <main className="flex-grow">
        <section className="relative">
          <img
            className="w-full h-96 object-cover"
            src={imagemdogcare}
            alt=""
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center rounded-lg text-white bg-black bg-opacity-50 p-8">
            <h2 className="text-3xl mb-4">Sobre a DogCare</h2>
            <p>
              A DogCare nasceu com o objetivo de oferecer um serviço de
              hospedagem de qualidade para cachorros, proporcionando um ambiente
              seguro, confortável e acolhedor para os pets. Além da hospedagem,
              também oferecemos serviços de banho e tosa, tudo para garantir que
              seu amigo de quatro patas tenha uma experiência completa de
              cuidados enquanto você está ausente.
            </p>
          </div>
        </section>

        <section className="mx-10 max-w-150 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg">Nossa fundadora</h3>
            <p>
              Uma empresária local apaixonada pelo bem-estar dos animais,
              percebeu a necessidade de aprimorar a gestão do seu negócio, já
              que a demanda crescente de clientes estava sendo difícil de
              controlar utilizando apenas o celular e o WhatsApp. Com isso,
              surgiu a ideia de criar a DogCare, uma solução mais eficiente, que
              vai além de uma simples hospedagem. Nossa plataforma organizada e
              de fácil acesso permite o gerenciamento de reservas de forma ágil
              e prática, proporcionando uma experiência mais tranquila tanto
              para os donos quanto para os pets.
            </p>
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
