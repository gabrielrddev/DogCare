import { useState } from 'react';
import { Link } from "react-router-dom";

export function AdminCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  const renderCalendar = () => {
    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day"></div>);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(
        <div key={i} className="calendar-day text-center p-2 text-sm">{i}</div>
      );
    }
    return days;
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  return (
    <div className="flex flex-col min-h-screen bg-orange-400">
      <header className="bg-orange-600 text-white p-4">
        <h1 className="text-2xl font-bold">
          <Link to="/" className="text-white no-underline">DogCare</Link>
        </h1>
        <h2 className="text-lg">Administração</h2>
        <p>
          <Link to="AdminHistory" className="text-white no-underline">Pedidos de Agendamento</Link>
        </p>
      </header>

      <main className="flex-grow flex p-4">
        <div className="w-80 mr-4">
          <h4 className="font-semibold mb-2">Agendamentos Confirmados</h4>
          <div className="bg-gray-100 rounded-md p-4 mb-4">
            <div className="flex justify-between items-center mb-2">
              <button onClick={prevMonth} className="text-gray-700">&lt;</button>
              <h5 className="font-medium">{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h5>
              <button onClick={nextMonth} className="text-gray-700">&gt;</button>
            </div>
            <div className="grid grid-cols-7 gap-1">
              {['Do', 'Se', 'Te', 'Qu', 'Qu', 'Se', 'Sa'].map(day => (
                <div key={day} className="text-center font-bold">{day}</div>
              ))}
              {renderCalendar()}
            </div>
          </div>
        </div>

        <div className="flex-grow bg-white rounded-md shadow-md p-6">
          <h3 className="font-bold mb-4">Painel do Administrador</h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="history-section">
              <h4 className="font-semibold mb-2">Histórico</h4>
              <button>
                <Link to="AdminHistory" className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400">
                  Registro de entradas
                </Link>
              </button>
            </div>
            <div className="notes-section">
              <h4 className="font-semibold mb-2">Notas</h4>
              <ul className="list-disc pl-5">
                <li>Nota 1</li>
                <li>Nota 2</li>
                <li>Nota 3</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-200 text-black text-center p-4">
        <p>DogCare - Rua Luke Skywalker, 123 - São José / SC</p>
        <p>Telefone: (48) 91012-2913</p>
      </footer>
    </div>
  );
}