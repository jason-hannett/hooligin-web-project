import React from 'react'
import './film.css'

function Film(props) {
    return(
        <div className='film-page'>
            <div className='film-container'>
                <img
                    src='/photos/Hannett007298-R1-033-15.jpg'
                    height='150px'
                    id='photo'/>    
                <img
                    src='/photos/Hannett007298-R1-025-11.jpg'
                    height='150px'
                    id='photo'/>    
                <img
                    src='/photos/Hannett007299-R1-009-3.jpg'
                    height='150px'
                    id='photo'/>    
                <img
                    src='/photos/Hannett007300-R1-013-5.jpg'
                    height='150px'
                    id='photo'/>    
                <img
                    src='/photos/Hannett007300-R1-051-24.jpg'
                    height='150px'
                    id='photo'/>    
                <img
                    src='/photos/Hannett007301-R1-007-2.jpg'
                    height='150px'
                    id='photo'/>    
            </div>        
        </div>
    )
}

export default Film