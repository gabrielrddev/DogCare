import * as C from "./styles.js";
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





export function DogCareAdminPage() {
  const navigate = useNavigate();

  const voltar = () => {
    navigate(-1);
  };
  return (



    <C.PageContainer>
      <C.Header>
        <C.Title onClick={voltar}>DogCare</C.Title>
        <C.Subtitle>Administração</C.Subtitle>
        <p>Pedidos de Agendamento</p>
      </C.Header>
      <C.AdminPanel>
        <C.PanelHeader>Painel do Administrador</C.PanelHeader>
        <h3>Pedidos de Agendamento</h3>
        <C.Table>
          <thead>
            <tr>
              <C.Th>Usuário</C.Th>
              <C.Th>Pet</C.Th>
              <C.Th>Serviço desejado</C.Th>
              <C.Th>Dt. de entrada</C.Th>
              <C.Th>Dt. de saída</C.Th>
              <C.Th>Ações</C.Th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                <C.Td>{booking.usuario}</C.Td>
                <C.Td>{booking.pet}</C.Td>
                <C.Td>{booking.servico}</C.Td>
                <C.Td>{booking.entrada}</C.Td>
                <C.Td>{booking.saida}</C.Td>
                <C.Td>
                  <span role="img" aria-label="aprovar">✅</span>
                  <span role="img" aria-label="rejeitar">❌</span>
                </C.Td>
              </tr>
            ))}
          </tbody>
        </C.Table>
        <C.ContentWrapper>
          <C.Section>
            <h3>Histórico</h3>
            <C.Button>Registro de entradas</C.Button>
          </C.Section>
          <C.Section>
            <h3>Notas</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Suspendisse rhoncus et augue faucibus.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </C.Section>
        </C.ContentWrapper>
      </C.AdminPanel>
      <C.Footer>
        <span>DogCare - Rua Luke Skywalker, 123 - São José / SC | Telefone: (48) 91012-2913</span>
        <C.SocialIcons>
          <span role="img" aria-label="Instagram">📷</span>
          <span role="img" aria-label="WhatsApp">📱</span>
          <span role="img" aria-label="Email">📧</span>
        </C.SocialIcons>
      </C.Footer>
    </C.PageContainer>
  );
}