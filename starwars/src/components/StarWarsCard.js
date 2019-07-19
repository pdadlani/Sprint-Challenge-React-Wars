import React from "react";

export default function StarWarsCard(props) {
  console.log('props', props);
  Object.keys(props.data).forEach(character =>
    console.log(character.name)
  );
  
  // function numberFilms({props}) {
  //   return props.data.films
  // }
  // console.log('films', numberFilms.length);
  return (
    <div>
      <h1>{props.data.name}</h1>
      <p>Born: {props.data.birth_year}</p>
      {/* <p>{numberFilms.length()}</p> */}
    </div>
  )
}