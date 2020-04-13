import React from 'react';
import {Header} from './Header'
import './styles.css'
import { HoldContainer } from './HoldContainer';

const App:React.FC = () => {
  return (
    <>
      <header>
        <link href="https://fonts.googleapis.com/css2?family=Gotu&display=swap" rel="stylesheet" />

      </header>
      <Header /> 
      <HoldContainer />
    </>
    );
}

export default App;
