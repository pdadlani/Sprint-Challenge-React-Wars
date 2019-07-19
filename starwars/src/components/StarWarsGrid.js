import React, { useState, useEffect } from "react";
import axios from 'axios';
import StarWarsCard from './StarWarsCard.js';
import Button from './Button.js';

export default function StarWarsGrid() {
  const [data, setData] = useState();
  const [index, setIndex] = useState(1);
  
  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/?page=${index}`)
      .then(response => {
        setData(response.data)
        console.log('response', response.data)
      })
      .catch(error => {
        console.log(`There is an ${error} in StarWarsGrid.js`)
      })
  }, [index])

  // function getCharacters(data) {
  //   if (data) {
  //     const characters = data.map(character =>
  //       console.log('character', character)
  //       <StarWarsCard data={ character }/>
  //     );
  //   }
  // }


  function assignPage(iterator) {
    if (index === 1 && iterator === -1) {
      return 8
    } else if (index === 8 && iterator === 1) {
      return 1
    }
    return index + iterator
  }

  const prevPage = assignPage(-1),
    nextPage = assignPage(1);

  console.log('prevPage', prevPage);
  console.log('nextPage', nextPage);


  console.log('data in Grid', data)
  console.log('index', index)


  return (

    <div>
      {!data ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Button text={'previous'} onClick={() => {
            console.log('previous was clicked')
            setIndex(prevPage)
          }} />
          {/* <Button text={'previous'} onClick={() => {
            // console.log('previous was clicked')
            (index===1) ? 
              (setIndex(10)) : 
              (setIndex(prevPage)
            )}} /> */}
          {data.results.map(character => {
            return <StarWarsCard data={character} />
          })}
          <Button text={'next'} onClick={() => {
            console.log('next was clicked')
            setIndex(nextPage)}} />
        </div>
      )
      }
    </div>
  );
}