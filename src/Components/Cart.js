import React, {Component} from 'react' 
import axios from 'axios'

class Cart extends Component{

    constructor(props){
        super()
        this.state = {
            input: ''
        }
    }

    subscribe = () => {
        console.log('clicked')
    axios.post('/api/add-subscriber', this.state)
    .then(response => {
        this.setState({input: response.data})
        this.props.history.goBack()
    })
    .catch(err => console.log(err))
}

    inputHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return(
            <div>
                Cart
                <input 
                    onChange={this.inputHandler}
                    value={this.state.input}
                    name='input'
                    placeholder='email'/>
                <button onClick={this.subscribe}>subscribe</button>
            </div>
        )
    }
}

export default Cart