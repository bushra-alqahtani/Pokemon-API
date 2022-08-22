
import React, { useState } from 'react';


function APIpokemon(props) {
 //=======list of pokemons==============
 const [pokemon, setPokemon] = useState([]);
 

 //=================API==================
 function handelcheck(){

   fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
   .then(response=>response.json())
   .then(response => setPokemon(response.results));
 
}
   return ( 
       <div className='App' >
        <div >
        <img  src="uu.png" height={100} width={100} alt='logo'/>
        </div>

        <button className='button' onClick={handelcheck}>fetch the Pokemon</button>
            { pokemon.map((pokemon,index)=>{return(<p  key={index}>{pokemon.name}</p>)  })}
          
                
       </div>
   );
 
}

export default APIpokemon