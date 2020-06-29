import React, {Component} from 'react' 
import axios from 'axios'
import {connect} from 'react-redux'
import {setProductInfo} from '../../redux/product'
import Product from '../product/Product'
import './viewproduct.css'

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
        let singleProduct = this.state.singleProduct.map((element, index) => {
            return <Product key={index} product={element} getProduct={this.getProduct}/>
        })
        return(
            <div className='view-product-page'>
                <div className='view-product-container'>
                {singleProduct}
                </div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    
    return {
        products: reduxState.product
    }};

export default connect(mapStateToProps, {setProductInfo})(Viewproduct);