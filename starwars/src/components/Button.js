import React from 'react';

export default function Button(props) {

  console.log('button props', props)
  return (
    <button onClick={() => props.onClick()}> {props.text}</button>
  );
}