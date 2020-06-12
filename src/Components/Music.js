import React from 'react'

function Music(props) {
    return(
        <div className='music-page'>
            <img
                id='ep-art'
                src='https://i1.sndcdn.com/avatars-000566523327-6rmfdb-t500x500.jpg'
                height='250px'/>
            <h2 id='ep'>EP</h2>
            <h1 id='ep-title'>Cocaine, Sweats & Depression</h1>
            <a href='https://open.spotify.com/album/0xElaGsogvtIyktjujWHI6?si=Xk_3fng7RHeUxtH0J-y-hA' target='blank'>
                <button id='stream-button'>stream</button>
            </a>
        </div>
    )
}

export default Music