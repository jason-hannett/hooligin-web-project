import React, {Component} from 'react' 
import {connect} from 'react-redux'
import Cartitem from '../cart-item/Cartitem'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import {toast} from 'react-toastify'
import './cart.css'
// import { applyMiddleware } from 'redux'

toast.configure()
class Cart extends Component{

    constructor(props){
        super()
        this.state = {
            cart: [],
            total: undefined,
            status: ''
        }
    }

    

    priceFinder = () => {
        const price = []
        const num = this.state.cart.filter((element, index, cart) => {
            console.log(element.total)
            return price.push(element.total)
        })
        return price
    }

    grandTotal = () => {
        const sum = this.priceFinder().reduce(function(a, b){
          return a + b
        }, 0)
          return sum
        }
    

    componentDidMount = () => {
        this.getAllCart()
    }

    getAllCart = () => {
        axios.get(`/api/get-cart/${this.props.user.user_id}`)
        .then(response => {
            this.setState({cart: response.data})
        })
    }

    deleteAllCart = () => {
        axios.delete(`/api/delete-all-cart/${this.props.user.user_id}`)
        .then(
            this.getAllCart()
        )
    }

    inputHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    // handleToken = (token, addresses) => {
    //     console.log({token, addresses})
    //     const {cart} = this.state
    //     axios.post('https://ry7v05l6on.sse.codesandbox.io/checkout', {token, cart})
    //     .then(response => {
    //         this.setState({status: response.data})
    //         this.deleteAllCart()
    //     })
    //     if(this.state.status === 'success'){
    //         toast('Success! Check emails for details', {type: 'success'})
    //     } else {
    //         toast('Something went wrong', {type: 'error'})
    //     }
    // }

    handleToken = (token, addresses) => {
        const {cart} = this.state
        axios.post('https://ry7v05l6on.sse.codesandbox.io/checkout', {token, cart})
        .then(response => {
            // console.log(response.data)
            // this.setState({status: response.data})
            // if(this.state.status === 'success'){
            //             toast('Success! Check emails for details', {type: 'success'})
            //         } else {
            //             toast('Something went wrong', {type: 'error'})
            //         }
            this.deleteAllCart()
        })
    }

    render(){
        console.log(this.state.cart)
        console.log(this.props)
        console.log(this.state.cart)
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
                        <h3 id='overall-total'>Order Total: ${this.grandTotal()}</h3>
                   </div>
                    <div className='cart-action-container'>
                        <div className='cart-action-box'>
                            {/* <button
                                id='cart-button'
                                onClick={this.getAllCart}>update cart</button> */}
                            {/* <button
                                id='cart-button'
                                onClick={this.deleteAllCart}>checkout</button> */}
                <StripeCheckout
                stripeKey='pk_test_51H0a27CG5ezdbL8o726Z4JDnMtKX9EcpfOPGZ6Xy9rIxmXL4OSU2eHdh9hsMUivY1TGiZ1tXDG2jorQUEVxyvImA00vm2cDlDi'
                    token={this.handleToken}
                    billingAddress
                    shippingAddress
                    amount={this.grandTotal() * 100}
                />
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
        cart: reduxState.cart,
        user: reduxState.reducer
    }};

export default connect(mapStateToProps)(Cart);
