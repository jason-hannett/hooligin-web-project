import React from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import './song.css'



function Song(props) {

    const deleteSong = () => {
        const {id} = props.song
        axios.delete(`api/delete-song/${id}`)
        .then(response => {
            props.getAllSongs()
        })
    }

    return(
             <div className='song-container'>
                 {props.user.email === 'officialhooligin@gmail.com' ? 
                 (
                  <img 
                    src='/photos/kisspng-x-mark-check-mark-cross-sign-clip-art-x-mark-5ac402470c31d6.21140477152279507905.png'
                    height='10px' 
                    id='x'
                    onClick={deleteSong}/>   
                 )
                :
                (<></>)}
                 
                <img
                    id='ep-art'
                    src={props.song.song_image}
                    height='250px'
                    width='260px'/>
                <div id='song-info'>
                    <h2 id='ep'>{props.song.type}</h2>
                    <h2 id='ep-title'>{props.song.title}</h2>
                    <div className='icon-container'>
                        <a href={props.song.spotify} target='blank'>
                            <img 
                                src='/photos/spotify-40-896217.png'
                                height='25px'/>
                        </a>
                        <a href={props.song.apple} target='blank'> 
                            <img
                                src='/photos/unnamed.png'
                                height='25px'/>
                        </a> 
                        <a href={props.song.soundcloud} target='blank'>
                            <img
                                src='/photos/SoundCloud_No_Text_icon-icons.com_49939.png'
                                height='25px'/>
                        </a> 
                    </div>
                </div>
           </div>
    )
}
const mapStateToProps = reduxState => {
    
    return {
        user: reduxState.reducer
    }};

export default connect(mapStateToProps)(Song);