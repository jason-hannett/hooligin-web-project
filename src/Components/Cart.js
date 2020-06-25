import React, {Component} from 'react' 
import {connect} from 'react-redux'
import Product from './Product'
import axios from 'axios'

class Cart extends Component{

    constructor(props){
        super()
        this.state = {
            cart: []
        }
    }

    componentDidMount = () => {
        axios.get('/api/get-cart')
        .then(response => {
            this.setState({cart: response.data})
        })
    }

    inputHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        console.log(this.props)
        const getCart = this.state.cart.map((element, index) => {
            return <Product key={index} product={element}/>
        })
        return(
            <div>
                {getCart}
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    
    return {
        products: reduxState.product,
        cart: reduxState.cart
    }};

export default connect(mapStateToProps)(Cart);
