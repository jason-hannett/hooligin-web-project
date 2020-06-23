import React, {Component} from 'react' 
import axios from 'axios'
import {connect} from 'react-redux'
import {setProductInfo} from '../redux/product'
import Product from './Product'

class Viewproduct extends Component{
    constructor(props){
        super(props)

        this.state = {
            singleProduct: [],
            qty: undefined,
            size: ''
        }
    }

    componentDidMount(){
        this.getProduct()
    }

    getProduct = () => {
        axios.get(`/api/product/${this.props.match.params.id}`)
        .then(response => {
            this.setState({singleProduct: response.data})
        })
    }
    
    render(){
        console.log(this.props.location)
        let singleProduct = this.state.products.map((element, index) => {
            return <Product key={`singleProduct: ${index}`} product={element} getAllProducts={this.getAllProducts}/>
        })
        return(
            <div className='view-product-page'>
                viewproduct
                {/* <div className='view-product-container'>
                    <img
                        src={this.props.product.image}/>
                    <h2>{this.props.product.name}</h2>
                    <p>{this.props.product.price}</p>
                </div> */}
                {singleProduct}
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    
    return {
        products: reduxState.product
    }};

export default connect(mapStateToProps, {setProductInfo})(Viewproduct);