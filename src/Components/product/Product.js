import React, {Component} from 'react' 
import {withRouter} from 'react-router-dom' 
import {connect} from 'react-redux'
import {setCart} from '../../redux/cart'
import axios from 'axios'
import './product.css'
import { toast } from 'react-toastify'

toast.configure()
class Product extends Component{
    
    constructor(props){
        super(props)

        this.state = {
            size: ''
        }
    }

    getAllCart = () => {
        axios.get(`/api/get-cart/${this.props.user.user_id}`)
        .then(response => {
            this.setState({cart: response.data})
        })
    }


    deleteProduct = () => {
        const {id} = this.props.product
        axios.delete(`api/delete-product/${id}`)
        .then(response => {
            this.props.getAllProducts()
        })
    }

    inputHandler = (event) => {
        this.setState({
          [event.target.name]: event.target.value,
        });
      };

      addToCart = () => {
        axios.post(`/api/add-cart/${this.props.product.id}`)
        .then(response => {
            this.props.history.push('/merch')
            this.getAllCart()
        })
    }

      updateProduct = () => {
        console.log('update button pressed')
        const {id} = this.props.product
        const {size} = this.state
        axios.put(`/api/update-product/${id}`, {size: size})
        .then(response => {
          console.log(response.data)
        //   this.props.history.push(`/cart/${this.props.product.id}`)
          this.addToCart()
          this.props.setCart(id)
        })
      }

      landing = () => {
          this.props.history.push('/')
              toast('please log in')
      }

    render(){
        console.log(this.props)
        return(
            <div>
                <>
                {this.props.location.pathname === (`/product/${this.props.product.id}`) ?
                (<div className='single-merch-container'>
                {this.props.user.email === 'officialhooligin@gmail.com' ? 
            (
            <img 
                src='/photos/kisspng-x-mark-check-mark-cross-sign-clip-art-x-mark-5ac402470c31d6.21140477152279507905.png'
                height='10px' 
                id='x'
                onClick={this.deleteProduct}/>   
            )
            :
            (<></>)}
                <img
                    src={this.props.product.image}
                    height='250px'
                    width='250px'
                    id='view-product-image'/>
                <div className='single-merch-info'>
                    <h2 
                        id='single-merch-name'>{this.props.product.name}</h2>
                    <p
                        id='single-merch-price'>${this.props.product.price}</p>
                </div>
                <div className='view-product-description-container'>
                    <p>{this.props.product.description}</p>
                </div>
                <select 
                    id='view-product-select'
                    onChange={this.inputHandler}
                    value={this.state.size}
                    name="size"
                    >
                    <option>- choose size</option>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                    <option>X-Large</option>
                </select>
                {this.props.user.user_id === 0 ? 
                (
                    <button 
                        id='add-to-cart'
                        onClick={this.landing}>Add to Cart</button>
                )
                :
                (
                    <button 
                    id='add-to-cart'
                    onClick={this.updateProduct}>Add to Cart</button>
                )}
            </div>
                )
                :
                (
                <div className='merch-container'>
                {this.props.user.email === 'officialhooligin@gmail.com' ? 
            (
            <img 
                src='/photos/kisspng-x-mark-check-mark-cross-sign-clip-art-x-mark-5ac402470c31d6.21140477152279507905.png'
                height='10px' 
                id='x'
                onClick={this.deleteProduct}/>   
            )
            :
            (<></>)}
                <img
                    src={this.props.product.image}
                    height='250px'
                    width='250px'
                    id='view-product-image'/>
                <div className='merch-info'>
                    <h2 
                        id='merch-name'>{this.props.product.name}</h2>
                    <p
                        id='merch-price'>${this.props.product.price}</p>
                    {this.props.location.pathname === ('/cart') ? (<></>) : 
                    (
                        <button
                        id='merch-button'
                        onClick={() => this.props.history.push(`/product/${this.props.product.id}`)}>view details</button>
                    )}
                </div>
            </div>)
                }     
                </>
                {/* <div>
                    {this.props.location.pathname === ('/cart') ?
                    (
                        <div>
                            <img 
                                height='20px'
                                src='../../public/photos/Hannett007301-R1-007-2.jpg'/>
                            <p>name</p>
                            <p>size</p>
                            <p>price</p>
                        </div>
                    )
                    :
                    (<></>)}
                </div> */}
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

export default withRouter(connect(mapStateToProps, {setCart})(Product));