import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #de7d38;
`;

export const FormContainer = styled.div`
  background-color: #e0e0e0;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  min-width: 27rem;
  margin: 0 auto;
  min-height: 19rem;
`;

export const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
`;

export const CloseButton = styled.button`
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ffffff;
  border-radius: 0.25rem;
  background-color: #ffffff;
`;

export const SubmitButton = styled.button`
  width: 100%;
  background-color: #4caf50;
  color: white;
  padding: 0.5rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

export const ForgotPassword = styled.a`
  display: block;
  text-align: center;
  margin-top: 1rem;
  color: #4caf50;
  text-decoration: none;
  font-size: 0.9rem;
`;
