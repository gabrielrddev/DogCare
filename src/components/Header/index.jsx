import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-orange-300 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl">
        {" "}
        <Link to="/">DogCare</Link>
      </h1>
      <nav>
        <Link to="Contact" className="text-white mx-2 font-bold">
          Contato
        </Link>
        <Link to="Login" className="text-white mx-2 font-bold">
          Entrar
        </Link>
        <Link to="Register" className="text-white mx-2 font-bold">
          Crie Conta
        </Link>
        <Link to="AdminCalendar" className="text-white mx-2 font-bold">
          Admin
        </Link>
      </nav>
    </header>
  );
}
