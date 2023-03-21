import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [allPoke, setAllPoke] = useState([])
  const [currentPoke, setCurrentPoke] = useState([])



  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then((resp) => resp.json())
    .then((pokeData) => {
      setAllPoke(pokeData)
      setCurrentPoke(pokeData)
    })
      
  },[])


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm setCurrentPoke={setCurrentPoke} />
      <br />
      <Search allPoke={allPoke} setCurrentPoke={setCurrentPoke} />
      <br />
      <PokemonCollection setCurrentPoke={setCurrentPoke} currentPoke={currentPoke} />
    </Container>
  );
}

export default PokemonPage;
