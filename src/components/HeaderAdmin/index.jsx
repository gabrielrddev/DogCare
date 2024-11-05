import adminjunin from "/img/adminjunin.jpg"
import { Link } from "react-router-dom";

export function  HeaderAdmin() {
    return (
        <header className="top-0 bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">
        <Link to="/">Home</Link>
        </h1>
        <img src={adminjunin} alt="user.png" className="w-10 h-10 rounded-full" />
      </header>
    );
  }
  