import React, {Component} from 'react' 
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {setUserInfo} from '../redux/reducer.js'
import axios from 'axios'


class Landing extends Component{

    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    login = () => {
        console.log('clicked')
        const {email, password} = this.state
        axios.post('/api/login', {email, password})
        .then(response => {
            console.log(response.data)
            const {id, email} = response.data
            this.props.setUserInfo(id, email)
            this.props.history.push('/music');
        })
        .catch(err => console.log(err))
    }

    register = () => {
        axios.post('/api/register', this.state)
        .then(response => {
            console.log(response.data)
            const {id, email} = response.data
            this.props.setUserInfo(id, email)
            this.props.history.push('/music')
        })
        .catch(err => console.log(err))
    }

    inputHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(props){
        console.log(this.state)
        return(
            <div>
                <img 
                    className='background-image'
                    src='/photos/Hannett007300-R1-051-24.jpg'/>
                <h2 id='enter' onClick={() => props.history.push('/music')}>ENTER</h2>
                <div>
                    <input
                        onChange={(event) => this.inputHandler(event)}
                        name='email' 
                        placeholder='email' 
                        id='login'/>
                    <input
                        onChange={(event) => this.inputHandler(event)}
                        name='password' 
                        placeholder='password' 
                        id='password'
                        type='password'/>
                    <button onClick={this.login}>Login</button>
                </div>
            </div>
        )
    }
}

export default connect(null, {setUserInfo})(withRouter(Landing))