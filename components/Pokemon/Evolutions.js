import { useEffect, useState } from 'react'
import Link from 'next/link'
import Titles from './Titles'

export default function Evolutions({ name, id}) {

    const [fname, setFname] = useState('')
    const [sname, setSname] = useState('')
    const [tname, setTname] = useState('')

    const [fimage, setFimage] = useState('')
    const [simage, setSimage] = useState('')
    const [timage, setTimage] = useState('')


    fetchName(name)
    
    async function fetchName(name) {
        
        const results = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`).then(r => r.json())
        const evolution = await fetch(results.evolution_chain.url).then(r => r.json())
        
        if(evolution.chain.species.name === undefined) {
            setFname()
        } else {
            setFname(evolution.chain.species.name)
            const firstName = await evolution.chain.species.name
            const firstResult = await fetch(`https://pokeapi.co/api/v2/pokemon/${firstName}`).then(r => r.json())
            setFimage(firstResult.sprites.front_default)
        }
            
        if(evolution.chain.evolves_to[0] == undefined) {
            setSname()
        } else { 
            setSname(evolution.chain.evolves_to[0].species.name)
            const secondName = await evolution.chain.evolves_to[0].species.name
            const secondResult = await fetch(`https://pokeapi.co/api/v2/pokemon/${secondName}`).then(r => r.json())
            setSimage(secondResult.sprites.front_default)
        }

        if(evolution.chain.evolves_to[0]?.evolves_to[0] == undefined) {
            setTname()
        } else {
            setTname(evolution.chain.evolves_to[0].evolves_to[0].species.name) 
            const thirdName = await evolution.chain.evolves_to[0].evolves_to[0].species.name
            const thirdResult = await fetch(`https://pokeapi.co/api/v2/pokemon/${thirdName}`).then(r => r.json())
            setTimage(thirdResult.sprites.front_default)
        }
       
    }


        return <div className='Evolutions'>      
        <Titles name={'Evolutions'}/>
            <div className='Evolutions_div'>
                {fname && <Link href={`/pokemon/${fname}`}>
                    <img className='img_evo' src={fimage} alt={fname} />    
                </Link>}

                {sname && <Link href={`/pokemon/${sname}`}> 
                    <img className='img_evo' src={simage} alt={sname} /> 
                </Link>}

                {tname && <Link href={`/pokemon/${tname}`}>
                    <img className='img_evo' src={timage} alt={tname} />
                </Link>}
            </div>
        </div> 
}

