import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({setCurrentPoke}) {

  const [newPoke, setNewPoke] = useState({
    id: null,
    name: "Bulbasaur",
    hp: 40,
    sprites: {
      front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"
    },
  })

  const {id, name, hp, sprites} = newPoke

  function handleFormChange(e){
    if(e.target.name === 'front' || e.target.name === 'back'){
      setNewPoke({...newPoke, sprites: {
        ...newPoke.sprites, [e.target.name]: e.target.value
      }})
    } else {setNewPoke({...newPoke, [e.target.name]: e.target.value})}
  }

  function handleSubmit(e){
    e.preventDefault()
    fetch('http://localhost:3001/pokemon',{
      method: "POST",
      headers:{
        "content-type": "application/json",
      },
      body: JSON.stringify(newPoke),
    })
    .then((resp) => resp.json())
    .then((data) => setCurrentPoke((prevPoke) => {
      return [data, ...prevPoke]
    }))
  }
  

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => handleSubmit(e)}
      >
        <Form.Group widths="equal">
          <Form.Input 
          fluid 
          label="Name" 
          placeholder="Name" 
          name="name" 
          value={name}
          onChange={(e) => handleFormChange(e)}
          />
          <Form.Input 
          fluid 
          label="hp" 
          placeholder="hp" 
          name="hp" 
          value={hp}
          onChange={(e) => handleFormChange(e)}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name={"front"}
            value={sprites.front}
            onChange={(e) => handleFormChange(e)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="back"
            value={sprites.back}
            onChange={(e) => handleFormChange(e)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
