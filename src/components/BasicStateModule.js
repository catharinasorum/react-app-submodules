import React, {useState} from 'react'

const BasicStateModule = (props) => {
    const [count, setCount] = useState(0)
    return (
        <div className='submodule'>
            <h2>This is a module with state</h2>
            <p>State is a very fast way to update certain values on a web page without rendering all the html and css. Take this number for example: <b>{count}</b></p>
            <button onClick={ () => setCount( count + 1 ) }>Hit me to count</button>
        </div>
    )
}

export default BasicStateModule