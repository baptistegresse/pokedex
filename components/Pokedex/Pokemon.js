import { useEffect, useState } from "react"

export default function Pokemon({pokemon, index, handleClick}) {
       const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`

    return <div className="Pokemon_Card">
        {pokemon.name}
        <img className='image_pokedex' src={url} />
        id: {index+1}
    </div>
}
