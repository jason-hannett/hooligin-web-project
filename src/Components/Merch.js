import React, {Component} from 'react' 
import {withRouter} from 'react-router-dom' 
import {connect} from 'react-redux'
import Product from './Product'
import axios from 'axios'

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
                <div className='contain-scroll'>
                {product}
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

export default withRouter(connect(mapStateToProps)(Merch));