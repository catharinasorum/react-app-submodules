import React, {useState} from 'react'
import RickMorty from '../files/rickmorty'
import Character from './Character'


const Characters = () => {

    const [characters, setCharacters] = useState(RickMorty.results) // er results vi vil ha tak i.

    return (
        <div className='submodule'>
            <h2>This modules presents characters from Rick and Morty</h2>
            <div className='characters'>
            {
                characters.map( // c = character i arrayet
                    (c, i) => 
                    <Character origin={c.origin.name} key={i} name={c.name} img={c.image} gender={c.gender} status={c.status} />
                )
            }
            </div>
        </div>
    )
}

export default Characters