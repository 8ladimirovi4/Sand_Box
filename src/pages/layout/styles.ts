import styled from '@emotion/styled';

export const PageWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Wnd = styled.div`
width: 100%;
height: 300px;
display: flex;
align-items: center;
flex-direction: column;
`;

export const BtnGetText = styled.div<{ isLoading: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ isLoading }) =>
    isLoading ? 'lightgray' : 'lightblue'};
  border: 2px solid rgb(31, 171, 218);
  width: 150px;
  height: 50px;
  border-radius: 15px;
  font-size: x-large;
  border-color: ${({ isLoading }) =>
    isLoading ? 'lightgray' : 'rgb(31, 171, 218)'};
  cursor: ${({ isLoading }) => (isLoading ? 'wait' : 'pointer')};

  &:hover{
    background-color: ${({ isLoading }) =>
    isLoading ? 'lightgray' : 'rgb(31, 171, 218)'};
  }
`;