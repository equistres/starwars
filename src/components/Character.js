import React from 'react';
import GetAditionalinfo from '../containers/GetAditionalInfo';

function Character(character){
    const charId = character.data.url.split("/").slice(-2).shift()
    const charImg = `https://starwars-visualguide.com/assets/img/characters/${charId}.jpg`
 return(
    
    <div className="card mx-auto mb-4">
        <img className="card-img-top" src={charImg} alt={character.data.name}/>
        <div className="card-body">
            <h5 className="card-title">{character.data.name}</h5>
            <p className="card-text">Gender: {character.data.gender}</p>
            <p className="card-text">Height: {character.data.height}</p>
            <p className="card-text">Mass: {character.data.mass}</p>
            <p className="card-text">Hair Color: {character.data.hair_color}</p>
            <p className="card-text">Skin Color: {character.data.skin_color}</p>
            <p className="card-text">Race: <GetAditionalinfo value={character.data.species}/></p>
            <p className="card-text">Planet: <GetAditionalinfo value={character.data.homeworld}/></p>
    </div>

   </div>
 )
}

export default Character