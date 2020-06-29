import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import axios from 'axios'
import './nav.css'

class Nav extends Component {

    constructor(props){
        super(props)

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
    
    render(props){
        console.log(this.state.cart.length)
        let cartQty = this.state.cart.length;
    return(
        <header className='nav-container'>
            <div className='nav-links'>
                <h2 
                    id='music-link'
                    onClick={() => this.props.history.push('/music')}>Music</h2>
                <h2 
                    id='merch-link'
                    onClick={() => this.props.history.push('/merch')}>Shop</h2>    
                <h2 
                    id='film-link'
                    onClick={() => this.props.history.push('/film')}>Film</h2>
                <h2 
                    id='contact-link'
                    onClick={() => this.props.history.push('/contact')}>Contact</h2>
                {this.props.user.id === 1 ? 
                (
                    <h2 
                    id='admin-link'
                    onClick={() => this.props.history.push('/admin')}>Admin</h2>
                ):
                (<></>)}
                
            </div>
            <div className='shopping-cart-container'>
                <img
                    id='shopping-cart' 
                    src='/photos/shopping_cart_PNG38.png'
                    height='25px'
                    onClick={() => this.props.history.push('/cart')}/>
                <p className='nav-cart-qty'>{cartQty}</p>
            </div>
        </header>
    )
}
}

const mapStateToProps = reduxState => {
    
    return {
        user: reduxState.reducer,
        cart: reduxState.cart
    }};

export default withRouter(connect(mapStateToProps)(Nav));