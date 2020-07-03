import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import {logoutUser} from '../../redux/reducer'
import Cartitem from '../cart-item/Cartitem'
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
        this.getAllCart()
    }

    getAllCart = () => {
        axios.get(`/api/get-cart/${this.props.user.user_id}`)
        .then(response => {
            this.setState({cart: response.data})
        })
    }

    logout = (props) => {
        axios.get('/api/logout')
        .then(() => {
          this.props.logoutUser();
          this.props.history.push('/')
        })
      }
    
    render(props){
        console.log(this.state)
        let cartQty = this.state.cart.length;
        const {cart} = this.state.cart.map((element, index) => {
           return <Cartitem key={index} item={element}/>
        })
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
                {this.props.user.email === 'officialhooligin@gmail.com' ? 
                (
                    <h2 
                    id='admin-link'
                    onClick={() => this.props.history.push('/admin')}>Admin</h2>
                ):
                (<></>)}
                
            </div>
            <div className='nav-user-dropdown'>
                <img
                    src='/photos/user1.png'
                    height='25px'
                    id='nav-user-icon'
                    onClick={() => this.props.history.push('/')}/>
                <div className='nav-user-dropdown-content'>
                    {this.props.user.user_id === 0 ? 
                    (
                    <>
                        <button
                            id='nav-login-button' 
                            onClick={() => this.props.history.push('/')}>Login</button>
                    </>
                    )
                    :
                    (
                    <>
                        <p 
                            id='nav-username'>{this.props.user.email}</p>
                        <img
                            id='nav-logout-icon'
                            height='20px'
                            src='/photos/user_logout-512.png'
                            onClick={this.logout}/>
                    </>
                    )}
                </div>
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

export default withRouter(connect(mapStateToProps, {logoutUser})(Nav));