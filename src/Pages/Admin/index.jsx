import { useState } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const StyledDogCareAdmin = styled.div`
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  header {
    background-color: #ea580c;
    color: white;
    padding: 1rem;
  }

  h1 {
    font-size: 1.875rem;
    font-weight: bold;
  }

  h2 {
    font-size: 1.25rem;
  }

  main {
    flex-grow: 1;
    display: flex;
    padding: 1rem;
  }

  .calendar-section {
    width: 300px;
    margin-right: 1rem;
  }

  .admin-panel {
    flex-grow: 1;
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
  }

  h3, h4 {
    margin-bottom: 1rem;
  }

  .calendar {
    background-color: #f9fafb;
    border-radius: 0.5rem;
    padding: 1rem;
    margin-bottom: 1.5rem;
  }

  .calendar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    color: #4b5563;
  }

  button:hover {
    color: #1f2937;
  }

  .calendar-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 0.25rem;
  }

  .calendar-day {
    text-align: center;
    padding: 0.5rem;
    font-size: 0.875rem;
  }

  .day-name {
    font-weight: bold;
  }

  .admin-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .history-section button {
    background-color: #e5e7eb;
    color: #1f2937;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
  }

  .history-section button:hover {
    background-color: #d1d5db;
  }

  ul {
    list-style-type: disc;
    padding-left: 1.5rem;
  }

  footer {
    background-color: #ea580c;
    color: white;
    padding: 1rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    main {
      flex-direction: column;
    }

    .calendar-section {
      width: 100%;
      margin-right: 0;
      margin-bottom: 1rem;
    }

    .admin-content {
      grid-template-columns: 1fr;
    }
  }
`;

export function SimplifiedDogCareAdmin() {
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
        <div key={i} className="calendar-day">
          {i}
        </div>
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
    <StyledDogCareAdmin>
      <header>
        <h1><Link to="SimplifiedDogCareAdmin">DogCare</Link></h1>
        <h2>Administração</h2>
        <p>Pedidos de Agendamento</p>
      </header>

      <main>
        <div className="calendar-section">
          <h4>Agendamentos Confirmados</h4>
          <div className="calendar">
            <div className="calendar-header">
              <button onClick={prevMonth}>&lt;</button>
              <h5>{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h5>
              <button onClick={nextMonth}>&gt;</button>
            </div>
            <div className="calendar-grid">
              {['Do', 'Se', 'Te', 'Qu', 'Qu', 'Se', 'Sa'].map(day => (
                <div key={day} className="calendar-day day-name">{day}</div>
              ))}
              {renderCalendar()}
            </div>
          </div>
        </div>

        <div className="admin-panel">
          <h3>Painel do Administrador</h3>
          
          <div className="admin-content">
            <div className="history-section">
              <h4>Histórico</h4>
              <button><Link to="DogCareAdminPage">Registro de entradas</Link></button>
            </div>
            <div className="notes-section">
              <h4>Notas</h4>
              <ul>
                <li>Nota 1</li>
                <li>Nota 2</li>
                <li>Nota 3</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <p>DogCare - Rua Luke Skywalker, 123 - São José / SC</p>
        <p>Telefone: (48) 91012-2913</p>
      </footer>
    </StyledDogCareAdmin>
  );
}