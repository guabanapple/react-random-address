import styled from 'styled-components';

export const Container = styled.div`
  background: lightblue;
  width: 400px;
  margin: 16px auto 0;
  padding: 16px;
`;

export const CounterBox = styled(Container)`
  text-align: center;
  width: auto;
  margin: auto;
  background: lightcyan;
`;

export const StartButton = styled.button`
  width: 80%;
  box-sizing: border-box;
  padding: 8px;
  cursor: pointer;
`;

export const ResultBox = styled(CounterBox)`
  background: gray;
`;
