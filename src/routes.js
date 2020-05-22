import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Landing from './Components/Landing'
import Music from './Components/Music'
import Merch from './Components/Merch'
import Subscribe from './Components/Subscribe'
import Cart from './Components/Cart'

export default (
    <Switch>
        <Route exact path='/' component={Landing}/>
        <Route exact path='/music' component={Music}/>
        <Route exact path='/merch' component={Merch}/>
        <Route exact path='/subscribe' component={Subscribe}/>
        <Route exact path='/cart' component={Cart}/>
    </Switch>
)