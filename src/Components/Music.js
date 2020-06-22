import React, {Component} from 'react' 
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import Song from './Song'

class Music extends Component{
    
    constructor(props){
        super(props)

        this.state = {
            songs: []
        }
    }

    componentDidMount = () => {
        this.getAllSongs()
    }

    getAllSongs = () => {
        axios.get('/api/all-songs')
        .then(response => {
            this.setState({songs: response.data})
        })
    }


    render(){
        console.log(this.props)
        const songs = this.state.songs.map((element, index) => {
            return <Song key={index} song={element} getAllSongs={this.getAllSongs}/>
        })
        return(
            <div className='music-page'>
               {songs}
        </div>
        )
    }
}

const mapStateToProps = reduxState => {
    
    return {
        user: reduxState.reducer,
        song: reduxState.songs
    }};

export default withRouter(connect(mapStateToProps)(Music));