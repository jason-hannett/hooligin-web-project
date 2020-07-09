const { applyMiddleware } = require('redux');

require('dotenv').config();
const express = require('express'),
     bodyParser = require('body-parser'),
     cookieParser = require('cookie-parser'),
     massive = require('massive'),
     session = require('express-session'),
     {sendEmail} = require('./mail/mail'),
     stripe = require('stripe')('sk_test_51H0a27CG5ezdbL8oWuCc7ycWyCU5C5NC1Ckm08Xuz1Ea2tC030BNR3COXOOq0Gs89UThvVZxfOZz3IQCQdRqLTv500SsQnoEOy'),
     uuid = require('uuid'),
     cors = require('cors'),
     {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env,
     ctrl = require('./controller'),
     authCtrl = require('./authController'),
     path = require('path'),
     port = SERVER_PORT,
     app = express();

     app.use(express.json());
     app.use(cors())
     app.use(bodyParser.urlencoded({extended: true}));
     app.use(bodyParser.json());
     app.use(cookieParser());
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

    //NODE ENPOINTS

    app.post('/api/sendMail', (req, res) => {
      const {email} = req.body
      console.log(req.body)
      sendEmail(email, "hello")
  
  })

  // app.post('/api/send-email', ctrl.emailResponse)

    //STRIPE ENDPOINTS
        app.get("/stripe-info", (req, res) => {
            res.send("Add your Stripe Secret Key to the .require('stripe') statement!");
        });
      
        app.post("/checkout", async (req, res) => {
        // console.log("Request:", req.body);
      
        let error;
        let status;
        try {
          const { product, token } = req.body;
      
          const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
          });
      
          const idempotency_key = uuid();
          const charge = await stripe.charges.create(
            {
              amount: product.price * 100,
              currency: "usd",
              customer: customer.id,
              receipt_email: token.email,
              description: `Purchased the ${product.name}`,
              shipping: {
                name: token.card.name,
                address: {
                  line1: token.card.address_line1,
                  line2: token.card.address_line2,
                  city: token.card.address_city,
                  country: token.card.address_country,
                  postal_code: token.card.address_zip
                }
              }
            },
            {
              idempotency_key
            }
          );
          console.log("Charge:", { charge });
          status = "success";
        } catch (error) {
          console.error("Error:", error);
          status = "failure";
        }
      
        res.json({ error, status });
      });

    //main endpoints
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
    app.delete('/api/delete-all-cart/:user_id', ctrl.deleteAllCart)
    app.put(`/api/update-product/:id`, ctrl.updateProduct)
    app.put(`/api/update-cart/:cart_id`, ctrl.updateCart)

    //auth endpoints 
    app.post('/api/register', authCtrl.register)
    app.post('/api/login', authCtrl.login)
    app.get('/api/logout', authCtrl.logout)

      app.get('*', (req, res)=>{
        res.sendFile(path.join(__dirname, '../build/index.html'));
    });

    app.listen(port, () => console.log(`server is thoomin on ${SERVER_PORT}`))