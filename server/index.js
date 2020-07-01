const { applyMiddleware } = require('redux');

require('dotenv').config();
const express = require('express'),
     massive = require('massive'),
     session = require('express-session'),
     {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env,
     ctrl = require('./controller'),
     authCtrl = require('./authController'),
     path = require('path'),
     port = SERVER_PORT,
     app = express();

     app.use(express.json());

     app.use( express.static( `${__dirname}/../build` ) );

     app.use(session({
        resave: false,
        saveUninitialized: true,
        secret: SESSION_SECRET,
        cookie: {maxAge: 1000 * 60 * 60 * 24}
    }))

    massive({
        connectionString: CONNECTION_STRING,
        ssl: {rejectUnauthorized: false}
    }).then(db => {
        app.set('db', db);
        console.log('db connected')
    })

    app.get('/api/all-products', ctrl.getAllProducts)
    app.get('/api/all-songs', ctrl.getAllSongs)
    app.get('/api/product/:id', ctrl.getProduct)
    app.get('/api/get-cart/:id', ctrl.getAllCart)
    app.post('/api/add-subscriber', ctrl.addEmail)
    app.post('/api/add-product', ctrl.addProduct)
    app.post('/api/add-song', ctrl.addSong)
    app.post('/api/add-cart/:id', ctrl.addCart)
    app.delete('/api/delete-song/:id', ctrl.deleteSong)
    app.delete('/api/delete-product/:id', ctrl.deleteProduct)
    app.delete('/api/delete-cart-item/:cart_id', ctrl.deleteCartItem)
    app.put(`/api/update-product/:id`, ctrl.updateProduct)

    //auth endpoints 
    app.post('/api/register', authCtrl.register)
    app.post('/api/login', authCtrl.login)
    app.get('/api/logout', authCtrl.logout)

      app.get('*', (req, res)=>{
        res.sendFile(path.join(__dirname, '../build/index.html'));
    });

    app.listen(port, () => console.log(`server is thoomin on ${SERVER_PORT}`))