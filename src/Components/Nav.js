import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';

function Nav(props) {
    console.log(props.user)
    return(
        <header className='nav-container'>
            <div className='nav-links'>
                <h2 
                    id='music-link'
                    onClick={() => props.history.push('/music')}>Music</h2>
                <div className='dropdown'>
                    <h2 
                        className='dropbtn'
                        onClick={() => props.history.push('/merch')}>Shop</h2>
                    <div className='dropdown-content'>
                        <p onClick={() => props.history.push('/merch')}>All</p>
                        <p onClick={() => props.history.push('/merch')}>Legasea</p>
                    </div>
                </div>    
                <h2 
                    id='film-link'
                    onClick={() => props.history.push('/film')}>Film</h2>
                <h2 
                    id='contact-link'
                    onClick={() => props.history.push('/contact')}>Contact</h2>
                {props.user.id === 1 ? 
                (
                    <h2 
                    id='admin-link'
                    onClick={() => props.history.push('/admin')}>Admin</h2>
                ):
                (<></>)}
                
            </div>
        </header>
    )
}

const mapStateToProps = reduxState => {
    
    return {
        user: reduxState.reducer
    }};

export default withRouter(connect(mapStateToProps)(Nav));