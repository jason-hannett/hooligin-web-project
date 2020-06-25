import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Landing from './Components/Landing'
import Music from './Components/Music'
import Merch from './Components/Merch'
import Subscribe from './Components/Subscribe'
import Cart from './Components/Cart'
import Film from './Components/Film'
import Contact from './Components/Contact'
import Admin from './Components/Admin'
import Viewproduct from './Components/Viewproduct'


export default (
    <Switch>
        <Route exact path ='/' component={Landing}/>
        <Route path ='/music' component={Music}/>
        <Route path ='/merch' component={Merch}/>
        <Route path ='/subscribe' component={Subscribe}/>
        <Route path ='/cart' component={Cart}/>
        <Route path ='/film' component={Film}/>
        <Route path ='/contact' component={Contact}/>
        <Route path ='/admin' component={Admin}/>
        <Route path ='/product/:id' component={Viewproduct}/>
    </Switch>
)