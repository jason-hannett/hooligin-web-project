import React from 'react'
import {withRouter} from 'react-router-dom'

function Landing(props) {
    return(
        <div>
            <img 
                className='background-image'
                src='/photos/Hannett007300-R1-051-24.jpg'/>
            <h2 id='enter' onClick={() => props.history.push('/music')}>ENTER</h2>
        </div>
    )
}

export default withRouter(Landing)