import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Landing from './Components/landing/Landing'
import Music from './Components/music/Music'
import Merch from './Components/merch/Merch'
import Subscribe from './Components/subscribe/Subscribe'
import Cart from './Components/cart/Cart'
import Film from './Components/film/Film'
import Contact from './Components/contact/Contact'
import Admin from './Components/admin/Admin'
import Viewproduct from './Components/viewproduct/Viewproduct'


export default (
    <Switch>
        <Route exact path ='/music' component={Music}/>
        <Route path ='/login' component={Landing}/>
        <Route path ='/register' component={Landing}/>
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