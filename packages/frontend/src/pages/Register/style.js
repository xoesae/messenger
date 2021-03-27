import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  background-color: #333333;
  color: #FAFAFA;

  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  height: 50vh;
  width: 50%;

  border: 1px solid #FAFAFA;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 26px;
  font-weight: 900;

  padding-bottom: 20px;
`;

export const Input = styled.input`
  width: 90%;

  border: 1px solid;
  border-color: #FAFAFA;
  background-color: rgba(0, 0, 0, 0);
  color: #FAFAFA;

  padding: 10px;
`;

export const Button = styled.button`
  width: 10%;

  border: 1px solid;
  border-color: #FAFAFA;
  background-color: rgba(0, 0, 0, 0);
  color: #FAFAFA;

  padding: 10px;
  margin-top: 20px;
`;
