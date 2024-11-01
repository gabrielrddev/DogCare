import { useNavigate } from 'react-router-dom';

const bookings = [
  { usuario: 'Arnaldo', pet: 'Batman', servico: 'Pacote completo', entrada: '01/06', saida: '03/06' },
  { usuario: 'Fernando', pet: 'Billy', servico: 'Somente banho', entrada: '05/06', saida: '05/06' },
  { usuario: 'Leonardo', pet: 'Oz', servico: 'Banho/Tosa', entrada: '06/06', saida: '06/06' },
  { usuario: 'Rodolfo', pet: 'Cristina', servico: 'Pacote completo', entrada: '06/06', saida: '08/06' },
  { usuario: 'Suzana', pet: 'Nikita', servico: 'Pacote completo', entrada: '07/06', saida: '09/06' },
  { usuario: 'Rafael', pet: 'Kiko', servico: 'Somente banho', entrada: '09/06', saida: '09/06' },
  { usuario: 'Ana', pet: 'Elza Jr', servico: 'Somente banho', entrada: '13/06', saida: '13/06' },
  { usuario: 'Maria Joaquina', pet: 'Pérolas', servico: 'Banho/Tosa', entrada: '16/06', saida: '16/06' },
  { usuario: 'Daniel', pet: 'Meg', servico: 'Somente banho', entrada: '17/06', saida: '17/06' },
  { usuario: 'Arthur', pet: 'Arnaldo', servico: 'Pacote completo', entrada: '19/06', saida: '21/06' },
  { usuario: 'Vitor', pet: 'Rex', servico: 'Somente banho', entrada: '25/06', saida: '25/06' },
  { usuario: 'Luiz', pet: 'Amélia', servico: 'Somente banho', entrada: '20/06', saida: '20/06' },
];



export function AdminHistory() {


  const navigate = useNavigate();

  const voltar = () => {
    navigate(-1);
  };

  function selectYes() {
    alert('Você selecionou sim')
  }
  
  function selectNo() {
    alert('Você selecionou não')
  }

  return (
    <div className="max-w-6xl mx-auto bg-orange-400">
      <header className="bg-orange-600 text-white p-5 h-52 flex flex-col justify-center">
        <h1 className="text-3xl font-bold cursor-pointer" onClick={voltar}>DogCare</h1>
        <h2 className="text-xl">Administração</h2>
        <p>Pedidos de Agendamento</p>
      </header>

      <main className="bg-white p-5 shadow-lg">
        <div className="bg-orange-500 text-white p-3 font-bold mb-5">Painel do Administrador</div>
        <h3 className="text-2xl mb-4">Pedidos de Agendamento</h3>
        <table className="min-w-full border-collapse mb-5">
          <thead>
            <tr>
              <th className="bg-orange-500 text-white text-left p-3">Usuário</th>
              <th className="bg-orange-500 text-white text-left p-3">Pet</th>
              <th className="bg-orange-500 text-white text-left p-3">Serviço desejado</th>
              <th className="bg-orange-500 text-white text-left p-3">Dt. de entrada</th>
              <th className="bg-orange-500 text-white text-left p-3">Dt. de saída</th>
              <th className="bg-orange-500 text-white text-left p-3">Ações</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                <td className="border p-3">{booking.usuario}</td>
                <td className="border p-3">{booking.pet}</td>
                <td className="border p-3">{booking.servico}</td>
                <td className="border p-3">{booking.entrada}</td>
                <td className="border p-3">{booking.saida}</td>
                <td className="border p-3">
                  <span onClick={selectYes} role="img" aria-label="aprovar" className="cursor-pointer">✅</span>
                  <span onClick={selectNo} role="img" aria-label="rejeitar" className="cursor-pointer">❌</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between">
          <div className="w-1/2">
            <h3 className="text-xl mb-2">Histórico</h3>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-md">Registro de entradas</button>
          </div>
          <div className="w-1/2">
            <h3 className="text-xl mb-2">Notas</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Suspendisse rhoncus et augue faucibus.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </main>

      <footer className="bg-orange-600 text-white p-4 flex justify-between items-center">
        <span>DogCare - Rua Luke Skywalker, 123 - São José / SC | Telefone: (48) 91012-2913</span>
        <div className="flex space-x-3">
          <span role="img" aria-label="Instagram" className="cursor-pointer">📷</span>
          <span role="img" aria-label="WhatsApp" className="cursor-pointer">📱</span>
          <span role="img" aria-label="Email" className="cursor-pointer">📧</span>
        </div>
      </footer>
    </div>
  );
}
