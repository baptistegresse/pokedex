import Titles from "./Titles"

export default function Types({ types }) {

    let isSecondType = true
    types[1]?.type.name == undefined ? isSecondType = false : isSecondType

    return <div className="Types">
        <Titles name={'Types'}/>
        <div className='Types_div'>
            <h5>{types[0].type.name}</h5>
            {isSecondType && <h5>{types[1].type.name}</h5>}
        </div>
    </div>
}