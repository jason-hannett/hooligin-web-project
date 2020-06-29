import React, {Component} from 'react' 
import {connect} from 'react-redux'
import Cartitem from '../cart-item/Cartitem'
import axios from 'axios'
import './cart.css'

class Cart extends Component{

    constructor(props){
        super()
        this.state = {
            cart: []
        }
    }

    


    orderTotal = () => {
        let sum = this.state.cart.reduce(function(a, b){
            return a + b;
        }, 0);
        return sum
    }
    

    componentDidMount = () => {
        this.getAllCart()
    }

    getAllCart = () => {
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
        console.log(this.state.cart)
        console.log(this.props)
        console.log(this.state.cart.length)
        const getCart = this.state.cart.map((element, index) => {
            return <Cartitem key={index} product={element} getAllCart={this.getAllCart}/>
        })
        return(
            <div className='cart-page'>
                <div className='cart-item-container'>
                    <div className='cart-column-name'>
                        <p>product</p>
                        <div className='price-total-box'>
                            <p>price</p>
                            <p>qty</p>
                            <p>remove</p>
                            <p>total</p>
                        </div>
                    </div> 
                        <div className='cart-item-box'> 
                        {this.state.cart.length === 0 ? 
                        (<h3>Your Cart is Empty</h3>)
                        :
                        (    
                            <div>{getCart}</div>
                        )} 
                        </div> 
                    <div className='cart-total'>
                        <h3 id='overall-total'>Order Total: ${this.orderTotal()}</h3>
                   </div>
                    <div className='cart-action-container'>
                        <div className='cart-action-box'>
                            <button
                                id='cart-button'>update cart</button>
                            <button
                                id='cart-button'>checkout</button>
                        </div>
                    </div>
                </div>
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
