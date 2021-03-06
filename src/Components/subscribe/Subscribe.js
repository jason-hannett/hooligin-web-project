import React, {Component} from 'react' 
import axios from 'axios'
import {connect} from 'react-redux'
import {setSubscriberInfo} from '../../redux/subscriber'
import {withRouter} from 'react-router-dom'
import {toast, ToastContainer} from 'react-toastify'
import './subscribe.css'


class Subscribe extends Component{

    constructor(props){
        super(props)

        this.state = {
            email: ''
        }
    }

    addSubscriber = () => {
        console.log('clicked')
        const email = this.state
        axios.post('/api/add-subscriber', email)
        .then(response => {
            this.sendEmail()
            this.props.history.push('/music')
            this.notify()
        })
    }
    
    sendEmail = () => {
        const email = this.state
        axios.post('/api/sendMail', email)
    }

    notify = () => toast("Subscribed!");

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
                        <ToastContainer />
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