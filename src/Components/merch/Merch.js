import React, {Component} from 'react' 
import {withRouter} from 'react-router-dom' 
import {connect} from 'react-redux'
import Product from '../product/Product'
import axios from 'axios'
import './merch.css'

class Merch extends Component{

    constructor(props){
        super(props)

        this.state = {
            products: []
        }
    }

    componentDidMount = () => {
        this.getAllProducts()
    }

    getAllProducts = () => {
        axios.get('/api/all-products')
        .then(response => {
            this.setState({products: response.data})
        })
    }

    render(){
        console.log(this.state)
        let product = this.state.products.map((element, index) => {
            return <Product key={index} product={element} getAllProducts={this.getAllProducts}/>
        })
        return(
            <div className='merch-page'>
                {this.state.products.length === 0 
                ? (<h2 id='coming-soon'>Merch Coming Soon!</h2>)    
                : (<div className='contain-scroll-merch'>{product}</div>)
                }
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    
    return {
        user: reduxState.reducer,
        products: reduxState.product
    }};

export default withRouter(connect(mapStateToProps)(Merch));