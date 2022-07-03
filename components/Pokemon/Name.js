import { useEffect, useState } from "react"
import Titles from "./Titles"

export default function Name({image, name, description}) {

    const [desc, setDesc] = useState('')

    getDescription(description)

    async function getDescription(url) {
        const description = await fetch(url).then(r => r.json())
        const newdesc = await description.flavor_text_entries[2].flavor_text
        setDesc(newdesc)
    }

    return <div className="Name">
        <Titles name={name} />
        <div className='Name_div'>
            <img src={image} alt={name} />
            <p>{desc}</p>
        </div>
    </div>
}



