import React from "react";

function Search({setCurrentPoke, allPoke}) {

  function handleSearch(etv){
    if(etv !== ''){
      const filteredPoke = allPoke.filter((poke) => poke.name.toLowerCase().includes(etv.toLowerCase()))
      setCurrentPoke(filteredPoke)
    } else {setCurrentPoke(allPoke)}
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={(e) => handleSearch(e.target.value)} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
