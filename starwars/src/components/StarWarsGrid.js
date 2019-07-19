import React, { useState, useEffect } from "react";
import axios from 'axios';
import StarWarsCard from './StarWarsCard.js';
import Button from './Button.js';

export default function StarWarsGrid() {
  const [data, setData] = useState();
  const [index, setIndex] = useState(1);
  
  function assignIndex(iterator) {
    if (index === 1 && iterator === -1) {
      return 10
    } else if (index === 10 && iterator === 1) {
      return 1
    }
    return index + iterator
  }
  
  const prevIndex = assignIndex(-1),
    nextIndex = assignIndex(1);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => {
        setData(response.data)
        console.log('response', response.data)
      })
      .catch(error => {
        console.log(`There is an ${error} in StarWarsGrid.js`)
      })
  }, [])

  // function getCharacters(data) {
  //   if (data) {
  //     const characters = data.map(character =>
  //       console.log('character', character)
  //       <StarWarsCard data={ character }/>
  //     );
  //   }
  // }
  

  console.log('data in Grid', data)
  console.log('index', index)


  return (

    <div>
      {!data ? (
        <div>Loading...</div>
      ) : (
        <div>
          Testing

          
          {/* <Button text={'previous'} onClick={() => {
            // console.log('previous was clicked')
            (index===1) ? 
              (setIndex(10)) : 
              (setIndex(prevIndex)
            )}} /> */}
          {/* {Object.keys(data.results).forEach(character => 
            <StarWarsCard data={character} />  )} */}
          
          {/* <Button text={'next'} onClick={() => {
            console.log('next was clicked')
            setIndex(nextIndex)}} /> */}
        </div>
      )
      }
    </div>
  );
}