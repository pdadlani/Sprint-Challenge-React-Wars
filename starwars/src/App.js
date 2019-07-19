import React from 'react';
import './App.css';
import StarWarsGrid from './components/StarWarsGrid.js';
import styled from 'styled-components'

const AppDiv = styled.div`
  font-family: georgia;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const PageHeader = styled.h1`
  text-align: center;
  color: darkorange;
`;

const PageSubHead = styled.h3`
  text-align: center;
  color: #585b5c;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <AppDiv>
      <PageHeader>React Wars</PageHeader>
      <PageSubHead>Enjoy all the Star Wars Characters</PageSubHead>
      <StarWarsGrid />
    </AppDiv>
  );
}

export default App;
