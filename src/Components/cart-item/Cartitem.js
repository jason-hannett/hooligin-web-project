import React, {Component} from 'react' 
import {withRouter} from 'react-router-dom' 
import {connect} from 'react-redux'
import {setCart} from '../../redux/cart'
import axios from 'axios'
import './Cartitem.css'

class Cartitem extends Component{

    constructor(props){
        super(props)

        this.state = {
            qty: 1,
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
        console.log(this.props.cart)
        this.priceTotal(this.props.product.price, this.state.qty)
        return(
            <div>
                <div className='cart-container'>
                <img
                    src={this.props.product.image}
                    height='50px'
                    width='50px'/>
                    <p
                        id='cart-product-name'>{this.props.product.name} - {this.props.product.size}</p>
                    <div id='price-total-box'>
                        <p>${this.props.product.price}</p>
                        <input
                            placeholder={this.props.product.qty}
                            id='qty-input'
                            name='qty'
                            value={this.state.qty}
                            onChange={(event) => this.inputHandler(event)}/>
                        <p onClick={this.updateCart}>update</p>
                        <button
                            id='cart-button'
                            onClick={this.deleteCartItem}>remove</button>
                        <p> ${this.priceTotal(this.props.product.price, this.state.qty)}</p>
                    </div>
                </div> 
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    
    return {
        user: reduxState.reducer,
        products: reduxState.product,
        cart: reduxState.cart
    }};

export default withRouter(connect(mapStateToProps, {setCart})(Cartitem));