import Titles from './Titles'

export default function Characteristic({height, weight, abilities}) {

    let isSecondAbilitie = true
    abilities[1]?.ability.name == undefined ? isSecondAbilitie = false : isSecondAbilitie

    return <div className="Characteristics">
        <Titles name={'Characteristics'} />
        <div className='Characteristics_div'>
            <div>
                <p>height: {height}</p>
                <p>weight: {weight}</p>
            </div>
            <div>
                <p>Abilities :</p>
                <p>{abilities[0].ability.name}</p>
                {isSecondAbilitie && <p>{abilities[1].ability.name}</p>}
            </div>
        </div>
    </div>
}