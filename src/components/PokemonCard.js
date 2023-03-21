import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({poke, toTitleCase, deletePoke, incrementPokeHP}) {
  const [flipCard, setFlipCard] = useState(false)


  return (
    <Card>
      <div onClick={() => setFlipCard(!flipCard)}>
        <div className="image">
          <img src={flipCard ? poke.sprites.back : poke.sprites.front} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{toTitleCase(poke.name)}</div>
        </div>
        <div className="extra content">
          <span>
            <button onClick={() => incrementPokeHP(poke, -1)}>-</button>
            <i className="icon heartbeat red" />
            {poke.hp}
            <button onClick={() => incrementPokeHP(poke, 1)}>+</button>
          </span>
        </div>
          <button onClick={() => deletePoke(poke)}>Delete</button>
      </div>
    </Card>
  );
}

export default PokemonCard;
