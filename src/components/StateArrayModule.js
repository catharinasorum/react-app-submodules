import React, {useState} from 'react'

const StateArrayModule = (props) => {
    const array = ['Hummingbird', 'Seagull', 'Black bird', 'Penguin', 'Ostrich', 'Emu', 'Swan', 'Woodpecker', 'Atlantic Puffin', 'Goose', 'Owl', 'Grouse', 'Parrot', 'Raven', 'Kiwi', 'Budgeriar', 'Dove', 'Flamingo', 'Heron', 'Magpie', 'Quails', 'Sparrow', 'Toucan', 'Vulture', 'Hawk']
    const [birds, setBirds] = useState(array)
    const filterBirds = (e) => { 
        setBirds (
            array.filter( bird => bird.toLowerCase().includes(e.target.value) )
        )
    }

    return (
        <div className='submodule'>
            <h2>This module has an array with birds in state</h2>
            <input type='text' placeholder='Type to filter the birds'onInput={filterBirds} />
            <div className='birds birdies'>
            {
               birds.map( bird => <li>{bird}</li> )
            }
            </div>
        </div>
    )
}

export default StateArrayModule