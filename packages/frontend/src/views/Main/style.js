import styled from 'styled-components'

export const SendMessage = styled.div`
  width: 100%;

  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  position: fixed;
  bottom: 0;

  padding-bottom: 50px;
`;

export const InputContainer = styled.div`
  width: 90%;
  & > * {
    width: 100%;
  }
`;
