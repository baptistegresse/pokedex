import { useState } from "react"
import Pokemon from "../components/Pokedex/Pokemon"
import Link from "next/link"
import Image from "next/image"

export default function PokemonData({initialPokemon}) {

    const [pokemon, setPokemon] = useState(initialPokemon)

    
    return  <div className='center-pokedex'>
            <span className='back-pokedex'></span>
                <Image src={'/titre.png'} width={400} height={150}></Image>
                <div className='Pokedex'>
                    {pokemon.results.map((monster, index) => ( 
                        <Link href={`/pokemon/${monster.name}`}>
                            <div key={index}>
                                <Pokemon key={index} pokemon={monster} index={index} />
                            </div> 
                        </Link>
                    ))}
                </div>
            </div>
}
 
export async function getStaticProps() {
    const initialPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`).then(r => r.json())
    return {
        props: {
            initialPokemon
        }
    }
}