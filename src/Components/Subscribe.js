import React, {Component} from 'react' 
import axios from 'axios'
import {connect} from 'react-redux'
import {setSubscriberInfo} from '../redux/subscriber'
import {withRouter} from 'react-router-dom'

class Subscribe extends Component{

    constructor(props){
        super(props)

        this.state = {
            email: ''
        }
    }

    addSubscriber = () => {
        console.log('clicked')
        // const {id} = this.props.email
        const email = this.state
        axios.post('/api/add-subscriber', email)
        // .then(response => { 
        //     const {email} = response.data
        //     this.props.setSubscriberInfo(email)
        //     this.props.history.push('/music')
        // })
        .then(response => {
            // this.setState({email: response.data})
            this.props.history.push('/music')
        })
    }
    

    inputHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        console.log(this.state)
        return(
            <div className='subscribe-page'>
                <div className='sub-input-container'>
                    <input 
                        id='email-input' 
                        placeholder='ENTER EMAIL'
                        name='email'
                        value={this.state.email}
                        onChange={this.inputHandler}/>
                    <button 
                        id='subscribe-button'
                        onClick={this.addSubscriber}>Subscribe</button>
                </div>
            </div>
        )
    }
}

// const mapStateToProps = reduxState => {
//     return {
//         email: reduxState.subscriber    
//     }
// }

export default withRouter(Subscribe);