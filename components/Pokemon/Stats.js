import Titles from './Titles'

export default function Stats({stats}) {

    const hp = stats[0].base_stat
    const attack = stats[1].base_stat
    const defense = stats[2].base_stat
    const special_attack = stats[3].base_stat
    const special_defense = stats[4].base_stat
    const speed = stats[5].base_stat

    return <div className='Stats'>
        <Titles name={'Stats'} />
        <div className='Stats_div'>
            <p>hp</p>   
            <input className="clear-all" disabled={true} type='range'min={0} max={100} value={hp}/>
            <p>attack</p>
            <input className="clear-all" disabled={true} type='range'min={0} max={100} value={attack}/>
            <p>defense</p>
            <input className="clear-all" disabled={true} type='range'min={0} max={100} value={defense}/>
            <p>special-attack</p>
            <input className="clear-all" disabled={true} type='range'min={0} max={100} value={special_attack}/>
            <p>special-deffense</p>
            <input className="clear-all" disabled={true} type='range'min={0} max={100} value={special_defense}/>
            <p>speed</p>
            <input  disabled={true} type='range'min={0} max={100} value={speed}/>
        </div>
    </div>
}