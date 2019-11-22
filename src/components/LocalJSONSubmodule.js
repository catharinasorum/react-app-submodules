import React from 'react'
import './LocalJSONSubmodule.css'


const LocalJSONSubmodule = (props) => {
    return (
        <div className='submodule video'>
            <h3>{props.song}</h3>
            <li>{props.artist}</li>
            <li>{props.number}</li>
            <li>{props.appearance}</li>
        </div>
    )
}

export default LocalJSONSubmodule