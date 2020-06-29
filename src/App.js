import React from 'react';
import {withRouter} from 'react-router-dom'
import routes from './routes'
import Nav from './Components/nav/Nav'
import Footer from './Components/footer/Footer'
import './App.css';

function App(props) {
  return (
    <div className="App">
      {props.location.pathname === '/'
      ?(<>{routes}</>)
      :(<>
      <Nav/>
      {routes}
      <Footer/>
      </>)} 
   </div>
  );
}

export default withRouter(App);
