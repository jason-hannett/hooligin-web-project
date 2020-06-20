import React, {Component} from 'react' 
import {withRouter} from 'react-router-dom' 
import {connect} from 'react-redux'

class Merch extends Component{

    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        return(
            <div className='merch-container'>
                {this.props.user.id === 1 ? 
                (
                 <div>
                     <button
                        onClick={() => this.props.history.push('/product')}>add</button>
                 </div>   
                )
            :
            (

                <h1>Merch Coming Soon</h1>
            )}
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    
    return {
        user: reduxState.reducer
    }};

export default withRouter(connect(mapStateToProps)(Merch));