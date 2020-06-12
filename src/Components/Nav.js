import React from 'react'
import {withRouter} from 'react-router-dom'

function Nav(props) {
    return(
        <header className='nav-container'>
            <div className='nav-links'>
                <h2 
                    id='music-link'
                    onClick={() => props.history.push('/music')}>Music</h2>
                <h2 
                    id='merch-link'
                    onClick={() => props.history.push('/merch')}>Merch</h2>
                <h2 
                    id='film-link'
                    onClick={() => props.history.push('/film')}>Film</h2>
                <h2 
                    id='contact-link'
                    onClick={() => props.history.push('/contact')}>Contact</h2>
            </div>
        </header>
    )
}

export default withRouter(Nav)