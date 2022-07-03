import Name from '../../components/Pokemon/Name'
import Types from '../../components/Pokemon/Types'
import Characteristics from '../../components/Pokemon/Characteristics'
import Stats from '../../components/Pokemon/Stats'
import Evolutions from '../../components/Pokemon/Evolutions'
import Image from 'next/image'
import Link from 'next/link'


export default function Info({id, height, name, image, weight, abilities, stats, types, description }) {
    return <div className='Pokemon_back'>
        <span className='back'></span>
        <Link href='/pokedex'>
            <div className='goback'>
                <Image src={'/arrow.png'} width={60} height={60}></Image>      
            </div>
        </Link>
        <div className="parent">
            <div className="div1"> <Name image={image} name={name} description={description} id={id} /> </div>
            <div className="div2"> <Characteristics height={height} weight={weight} abilities={abilities} /> </div>
            <div className="div3"> <Stats stats={stats} /> </div>
            <div className="div4">  <Types types={types} /> </div>
            <div className="div5"> <Evolutions name={name} id={id} /> </div>
        </div> 
    </div>
}

export async function getStaticProps({ params }) {
    const results = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemonName}`).then(r => r.json())
    return {
        props: {
            id: results.id,
            height: results.height,
            name: results.name,
            image: results.sprites.front_default,
            abilities: results.abilities,
            weight: results.weight,
            stats: results.stats,
            types: results.types,
            description: results.species.url
        }
    }
}

export async function getStaticPaths() {
    const pokemons = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151').then(r => r.json())
    return {
        paths: pokemons.results.map(pokemon => {
            return {
                params: {
                    pokemonName: pokemon.name
                }
            }
        }),
        fallback: false
    }
}
