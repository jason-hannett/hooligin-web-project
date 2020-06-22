import React, {Component} from 'react' 
import {withRouter} from 'react-router-dom' 
import {connect} from 'react-redux'
import {setProductInfo} from '../redux/product'
import {setSongInfo} from '../redux/songs'
import axios from 'axios' 

class Admin extends Component{

    constructor(props){
        super(props)

        this.state = {
            name: '',
            image: '',
            price: undefined,
            description: '',
            song_image: '',
            type: '',
            title: '',
            spotify: '',
            apple: '',
            soundcloud: ''
        }
    }

    addProduct = () => {
        const {id} = this.props.products
        const {name, image, price, description} = this.state
        axios.post('/api/add-product', {name, image, price, description, id})
        .then(response => {
            const {name, image, description, price} = response.data
            this.props.setProductInfo(name, image, description, price)
            this.props.history.push('/merch')
            }) 
    }

    addSong = () => {
        const {id} = this.props.songs
        const {song_image, type, title, spotify, apple, soundcloud} = this.state
        axios.post('/api/add-song', {song_image, type, title, spotify, apple, soundcloud, id})
        .then(response => {
            const {song_image, type, title, spotify, apple, soundcloud} = response.data
            this.props.setSongInfo(song_image, type, title, spotify, apple, soundcloud)
            this.props.history.push('/music')
            }) 
    }

    inputHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        console.log(this.state)
        return(
            <div className='product-page'>
                <div className='product-container'>
                    <img
                        id='product-img'
                        src={this.state.image}
                        height='25px'/>
                    <input
                            placeholder='image'
                            name='image'
                            value={this.state.image}
                            onChange={(event) => this.inputHandler(event)}
                            id='product-input'/>
                    <input
                        placeholder='name'
                        name='name'
                        value={this.state.name}
                        onChange={(event) => this.inputHandler(event)}
                        id='product-input'/>
                    <input
                        placeholder='price'
                        value={this.state.price}
                        name='price'
                        type='number'
                        onChange={(event) => this.inputHandler(event)}
                        id='product-input'/>
                    <input
                        placeholder='description'
                        value={this.state.description}
                        name='description'
                        onChange={(event) => this.inputHandler(event)}
                        id='product-description'/>
                    <button 
                        id='product-button'
                        onClick={this.addProduct}>Add Product</button>
                </div>
                <div className='add-song-container'>
                    <input
                        id='song-input'
                        onChange={(event) => this.inputHandler(event)}
                        name='song_image' 
                        value={this.state.song_image}
                        placeholder='song image'/>
                    <input
                        id='song-input'
                        onChange={(event) => this.inputHandler(event)}
                        name='type' 
                        value={this.state.type}
                        placeholder='type'/>
                    <input
                        id='song-input'
                        onChange={(event) => this.inputHandler(event)}
                        name='title' 
                        value={this.state.title}
                        placeholder='title'/>
                    <input
                        id='song-input'
                        onChange={(event) => this.inputHandler(event)}
                        name='spotify' 
                        value={this.state.spotify}
                        placeholder='spotify link'/>
                    <input
                        id='song-input'
                        onChange={(event) => this.inputHandler(event)}
                        name='apple' 
                        value={this.state.apple}
                        placeholder='apple link'/>
                    <input
                        id='song-input'
                        onChange={(event) => this.inputHandler(event)}
                        name='soundcloud' 
                        value={this.state.soundcloud}
                        placeholder='soundcloud link'/>
                    <button
                        id='add-song-button'
                        onClick={this.addSong}>Add Song</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    
    return {
        user: reduxState.reducer,
        products: reduxState.product,
        songs: reduxState.songs
    }};

export default connect(mapStateToProps, {setProductInfo, setSongInfo})(withRouter(Admin))