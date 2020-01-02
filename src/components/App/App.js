import React from 'react';
import './App.css';
import Image from '../Image/Image';
import PokemonName from '../PokemonName/PokemonName';
import Letters from '../Letters/Letters';
import Reset from '../Reset/Reset';
import Signature from '../Signature/Signature';
import Header from '../Header/Header';
import Row from 'react-bootstrap/Row';

const App = () => {

  return (
    <div>
      <Header />
      <Row className="justify-content-center">
        <Image />
      </Row>
      <Row className="justify-content-center">
        <PokemonName />
      </Row>
      <Row className="justify-content-center">
        <Letters />
      </Row>
      <Row className="justify-content-center">
        <Reset />
      </Row>
      <Row className="justify-content-center">
        <Signature />
      </Row>
    </div>
  );
}

export default App;