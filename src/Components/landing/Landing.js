import React, {Component} from 'react' 
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {setUserInfo} from '../../redux/reducer'
import axios from 'axios'
import './landing.css'


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
            const {user_id, email} = response.data
            this.props.setUserInfo(user_id, email)
            this.props.history.push('/music');
        })
        .catch(err => console.log(err))
    }

    register = () => {
        axios.post('/api/register', this.state)
        .then(response => {
            console.log(response.data)
            const {user_id, email} = response.data
            this.props.setUserInfo(user_id, email)
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
        console.log(this.props)
        return(
            <div className='landing'>
                {this.props.location.pathname === ('/register') ?
                (
                    <>
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
                        <h2 id='enter' onClick={this.register}>REGISTER</h2>
                        <p onClick={() => this.props.history.goBack()}>Go Back</p>
                    </>
                )
                :
                (
                    <>
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
                        <h2 id='enter' onClick={this.login}>ENTER</h2>
                        <p>Don't have an account? Register <span onClick={() => this.props.history.push('/register')}>Here</span></p>
                        <p onClick={() => this.props.history.push('/music')} id='groupie'>(continue as groupie)</p>
                    </>
                )}
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        user: reduxState.reducer
    }
}

export default connect(mapStateToProps, {setUserInfo})(withRouter(Landing))