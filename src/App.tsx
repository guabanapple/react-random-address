import React, { useState } from 'react';
import Post from './components/Post';
import { StartButton, Container, ResultBox, CounterBox } from './components/styled';

function App() {
  const [address, setAddress] = useState('');
  const [postCode, setPostCode] = useState('0000000');

  const createPostCode = () => {
    let rand7Digit: string = '';
    for (let i: number = 0; i < 7; i += 1) {
      rand7Digit += String(Math.floor(Math.random() * 10));
    }
    setPostCode(rand7Digit);
  };

  const getPostAddress = (resultAddress: string) => {
    setAddress(resultAddress);
  };

  return (
    <Container>
      <CounterBox>
        <h3>{postCode}</h3>
        <StartButton onClick={createPostCode}>start</StartButton>
      </CounterBox>
      <ResultBox>
        {postCode !== '0000000' && <Post postCode={postCode} getAddress={getPostAddress} />}
        <p>{address}</p>
      </ResultBox>
    </Container>
  );
}

export default App;
