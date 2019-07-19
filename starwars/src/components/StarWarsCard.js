import React from "react";
import styled from 'styled-components';

const CardStyle = styled.div`
  color: white;
  padding: 20px;
  font-family: georgia;
`;

export default function StarWarsCard(props) {
  // console.log('props', props);

  return (
    <CardStyle>
      <h1>{props.data.name}</h1>
      <p>Born: {props.data.birth_year}</p>
    </CardStyle>
  )
}