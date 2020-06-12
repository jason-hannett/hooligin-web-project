require('dotenv').config();
const express = require('express'),
     massive = require('massive'),
     session = require('express-session'),
     {SERVER_PORT, CONNECTION_STRING} = process.env,
     ctrl = require('./controller')
     port = SERVER_PORT,
     app = express();

     app.use(express.json());

    massive({
        connectionString: CONNECTION_STRING,
        ssl: {rejectUnauthorized: false}
    }).then(db => {
        app.set('db', db);
        console.log('db connected')
    })

    app.post('/api/add-subscriber', ctrl.addEmail)

    app.listen(port, () => console.log(`server is thoomin on ${SERVER_PORT}`))