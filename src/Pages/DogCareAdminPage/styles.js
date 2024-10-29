import styled from "styled-components";


export const PageContainer = styled.div`
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f4a261;
`;

export const Header = styled.header`
  background-image: url('path_to_dog_image.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  padding: 20px;
  height: 200px;
`;

export const Title = styled.h1`
  color: #white;
  font-size: 36px;
  margin: 0;
  cursor: pointer;
`;

export const Subtitle = styled.h2`
  font-size: 24px;
  margin: 10px 0;
`;

export const AdminPanel = styled.main`
  background-color: white;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;

export const PanelHeader = styled.div`
  background-color: #f4811e;
  color: white;
  padding: 10px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

export const Th = styled.th`
  background-color: #f4811e;
  color: white;
  text-align: left;
  padding: 10px;
`;

export const Td = styled.td`
  border: 1px solid #ddd;
  padding: 10px;
`;

export const Button = styled.button`
  background-color: #f4811e;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
`;

export const Footer = styled.footer`
  background-color: #f4811e;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Section = styled.div`
  width: 48%;
`;