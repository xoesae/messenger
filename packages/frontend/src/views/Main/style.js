import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  background-color: #333333;

  box-sizing: border-box;
`;

export const Chat = styled.div`
  height: 85vh;

  padding: 0 20px;
`;

export const SendMessage = styled.div`
  width: 100%;

  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  position: fixed;
  bottom: 0;

  padding: 0 20px 50px;
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
  margin-left: 5px;
`;

export const Message = styled.p`
  width: 50%;

  padding: 10px;
  border-radius: 5px 5px 5px 0;

  float: ${props => props.author === 0 ? 'right' : 'left'};
  background-color: #2A5176;
  color: #FAFAFA;
`;
