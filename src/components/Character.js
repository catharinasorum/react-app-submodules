import React from 'react'
import './Character.css'

const Character = (props) => {
    return (
        <div className='character'>
            <img src={props.img} alt={'The character: ' + props.name} />
            <h4>{props.name}</h4>
            <hr />  
            <p>
                {props.gender}<br />
                {props.status}<br />
                {props.origin}<br />
            </p>
        </div>
    )
}

export default Character