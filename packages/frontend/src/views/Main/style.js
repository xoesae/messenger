import styled from 'styled-components'

export const Container = styled.div`
  height: 85vh;

  box-sizing: border-box;
  padding: 0 20px;

  overflow: scroll;
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

export const InputContainer = styled.div`
  width: 90%;
  & > * {
    width: 100%;
  }
`;

export const ButtonContainer = styled.div`
  width: 10%;
  & > * {
    width: 100%;
  }
`;

export const Message = styled.p`
  padding: 10px;
  border-radius: 5px 5px 5px 0;

  background-color: #2A5176;
  color: #FAFAFA;
`;
