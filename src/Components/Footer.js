import React from 'react'

function Footer(props) {
    return(
        <footer>
            <div className='social-media-icons'>
                    <a href='https://open.spotify.com/artist/4uXeNERJzIA74hSk8AwsCm?si=i9_AaHmjTE-uaZ8ga2GAPw' target='blank'>
                    <img
                        src='/photos/spotify-40-896217.png'
                        height='20px'
                        id='icon'/>
                    </a> 
                    <a href='https://music.apple.com/us/artist/hooligin/1449184216' target='blank'>   
                    <img
                        src='/photos/unnamed.png'
                        height='20px'
                        id='icon'/>
                    </a>
                    <a href='https://soundcloud.com/hooligin' target='blank'>    
                    <img
                        src='/photos/SoundCloud_No_Text_icon-icons.com_49939.png'
                        height='20px'
                        id='icon'/>
                    </a> 
                    <a href='https://www.instagram.com/hooligin/' target='blank'>   
                    <img
                        src='/photos/38-instagram-2-512.png'
                        height='20px'
                        id='icon'/>
                    </a>    
                </div>
        </footer>
    )
}

export default Footer