import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
  background-color: blue;
  color: white;
`;

export default function Button(props) {

  console.log('button props', props)
  return (
    <ButtonStyle onClick={() => props.onClick()}>
      {props.text}
    </ButtonStyle>
  );
}