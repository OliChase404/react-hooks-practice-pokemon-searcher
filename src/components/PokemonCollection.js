import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({currentPoke, setCurrentPoke}) {

  
  const displayPoke = currentPoke.map((poke) => {
    return <PokemonCard key={poke.id} toTitleCase={toTitleCase} poke={poke} deletePoke={deletePoke} incrementPokeHP={incrementPokeHP} />
  })


  function incrementPokeHP(poke, x){
    fetch(`http://localhost:3001/pokemon/${poke.id}`,{
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        hp: (poke.hp + x)
      }),
    })
    .then((resp) => resp.json())
    .then((data) => setCurrentPoke((prevPoke) => prevPoke.map((p) => p.id === data.id ? data : p)))
  }


  function deletePoke(poke){
    fetch(`http://localhost:3001/pokemon/${poke.id}`,{
      method: 'DELETE',
    })
    .then(() => setCurrentPoke((prevPoke) => {
      return prevPoke.filter((p) => p.id !== poke.id)
    }))
  }


  
  return (
    <div>
      <h1>Hello From Pokemon Collection</h1>
    <Card.Group itemsPerRow={6}>
      <span></span>
      {displayPoke}
    </Card.Group>
    </div>
  );
}




// Just for the sake of neatness-------------------------
function toTitleCase(str){
  let wordArr = str.split(' ')
  let mappedWordArr = wordArr.map((word) => {
    return word[0].toUpperCase() + word.slice(1)
  })
  return mappedWordArr.join(' ')
}
//--------------------------------------
export default PokemonCollection;
