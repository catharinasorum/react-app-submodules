import React, {useState} from 'react'
import mtv from '../files/mtv'
import LocalJSONSubModule from './LocalJSONSubmodule'
import './LocalJSONModule.css'

const LocalJSONModule = (props) => {
    const [videos, setVideos] = useState(mtv)
    return (
        <div className='submodule'>
            <h2>This module uses data from a local JSON file</h2>
            <p>And the videos on the first MTV broadcast was:</p>
            <div className='videos'>
            {
                mtv.videos.map(
                    video => <LocalJSONSubModule song={video.song} artist={video.artist} number={video.number} appearance={video.appearance}/>
                )
            }
            </div>
        </div>
    )
}

export default LocalJSONModule