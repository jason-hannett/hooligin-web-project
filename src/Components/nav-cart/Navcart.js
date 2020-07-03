import React, {Component} from 'react' 
import {withRouter} from 'react-router-dom' 
import {connect} from 'react-redux'
import {setCart} from '../../redux/cart'
import axios from 'axios'
import './Cartitem.css'

class Navcart extends Component{

    constructor(props){
        super(props)

        this.state = {
            qty: undefined,
            total: undefined
        }
    }

    priceTotal = (price, qty) => {
        let sum = price * qty;
        this.state.total = sum
        return this.state.total
    }

    inputHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    deleteCartItem = () => {
        console.log('button clicked')
        const {cart_id} = this.props.product
        axios.delete(`api/delete-cart-item/${cart_id}`)
        .then(response => {
            this.props.getAllCart()
        })
    }

    updateCart = () => {
        const {cart_id} = this.props.product
        const {total, qty} = this.state
        axios.put(`api/update-cart/${cart_id}`, {total: total, qty: qty})
        .then(response => {
            this.props.getAllCart()
        })
    }


    render(){
        console.log(this.props)
        return(
            <div className='nav-cart-container'>
                <p
                    id='nav-cart-x'
                    onClick={this.deleteCartItem}>X</p>
                <img
                    id='nav-cart-image'
                    src={this.props.cart.image}
                    height='10px'/>
                <p
                    id='nav-cart-name'>{this.props.cart.name}</p>
                <input
                    id='nav-cart-qty'
                    placeholder={this.props.cart.qty}/>
                <p
                    id='nav-cart-total'>
                    {this.props.cart.total}</p>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    
    return {
        user: reduxState.reducer,
        products: reduxState.product,
        carts: reduxState.cart
    }};

export default withRouter(connect(mapStateToProps, {setCart})(Navcart));