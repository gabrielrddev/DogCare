import styled from "styled-components";

export const Container = styled.div``;

export const HomeImg = styled.img`
  width: 100%;
  height: 100vh;
`;

export const TextContainer = styled.div`
  position: absolute;
  top: 110px;
  left: 140px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 30%;
`;

export const Title = styled.h1`
  font-family: Inter;
  color: rgba(222, 125, 56, 1);
  font-size: 70px;
  font-weight: 900;
  line-height: 84.72px;
  text-align: left;
`;

export const Text = styled.p`
  font-family: Inter;
  color: rgba(222, 125, 56, 1);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.011em;
  text-align: left;
`;

export const Button = styled.button`
  background-color: rgba(222, 125, 56, 0.6);
  width: 142px;
  height: 57px;
  margin-top: 30px;
  border-radius: 7px;
  border: none;
  font-family: Inter;
  font-size: 19px;
  font-weight: 900;
  line-height: 22.99px;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
`;
