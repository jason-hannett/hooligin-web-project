import React, {Component} from 'react' 
import {withRouter} from 'react-router-dom' 
import {connect} from 'react-redux'
import {setProductInfo} from '../redux/product'
import axios from 'axios' 

class Product extends Component{

    constructor(props){
        super(props)

        this.state = {
            name: '',
            image: '',
            price: undefined,
            description: ''
        }
    }

    addProduct = () => {
        const {id} = this.props.user
        axios.post('/api/add-product', {...this.state, id})
        .then(response => {
            // const {name, image, description, price} = response.data
            // this.props.setProductInfo(name, image, description, price)
            this.props.history.goBack()
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
                        src={this.state.image}/>
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
                        onClick={this.addProduct}>Add</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    
    return {
        user: reduxState.reducer,
        product: reduxState.product
    }};

export default connect(mapStateToProps, {setProductInfo})(withRouter(Product))