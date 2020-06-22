import React, {Component} from 'react' 
import {withRouter} from 'react-router-dom' 
import {connect} from 'react-redux'
import axios from 'axios'

class Product extends Component{

    constructor(props){
        super(props)

        this.state = {
            
        }
    }


    deleteProduct = () => {
        const {id} = this.props.product
        axios.delete(`api/delete-product/${id}`)
        .then(response => {
            this.props.getAllProducts()
        })
    }

    render(){
        return(
                <div className='merch-container'>
                    {this.props.user.id === 1 ? 
                 (
                  <img 
                    src='/photos/7c4a0cb6456c697a85adaa9a90934ec4_black-resourcesforbitches-black-x-transparent-background-png-_400-400.jpg'
                    height='10px' 
                    id='x'
                    onClick={this.deleteProduct}/>   
                 )
                :
                (<></>)}
                    <img
                        src={this.props.product.image}
                        height='250px'
                        width='260px'/>
                    <div className='merch-info'>
                        <h2 
                            id='merch-name'>{this.props.product.name}</h2>
                        <p
                            id='merch-price'>${this.props.product.price}</p>
                        <button>view details</button>
                    </div>
                </div>
            
        )
    }
}

const mapStateToProps = reduxState => {
    
    return {
        user: reduxState.reducer,
        products: reduxState.product
    }};

export default withRouter(connect(mapStateToProps)(Product));