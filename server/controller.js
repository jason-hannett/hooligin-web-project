const { sendEmail } = require('./mail/mail');

module.exports = {

    addEmail: async(req, res) => {
        const db = req.app.get('db');
        const {email} = req.body;

        let foundEmail = await db.verify_email(email);
        if(foundEmail[0]){
            return res.status(400).send(console.log('email already exists'))
        }
         console.log(req.body)
        db.add_email({email})
        // .then(() => res.status(200).send(email))
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    },

    
    addProduct: (req, res) => {
        const db = req.app.get('db');
        const {id, name, image, description, price} = req.body;
         console.log(req.body)
        db.add_product({id, name, image, description, price})
        // .then(() => res.status(200).send(email))
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    }, 

    deleteProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
         console.log(req.params)
        db.delete_product(id)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    },

    getProduct: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params
 
        db.get_product(id)
        .then(song => res.status(200).send(song))
        .catch(err => res.status(500).send(err))
    },

    updateProduct: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params
        const {size, qty} = req.body
        console.log(req.body)
        console.log(req.params)
        db.update_product(id, size, qty)
        .then(product => res.status(200).send(product))
        .catch(err => res.status(500).send(err))
    },

    addSong: (req, res) => {
        const db = req.app.get('db');
        const {id, song_image, type, title, spotify, apple, soundcloud } = req.body;
         console.log(req.body)
        db.add_song({id, song_image, type, title, spotify, apple, soundcloud})
        // .then(() => res.status(200).send(email))
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    },

    getAllProducts: (req, res) => {
        const db = req.app.get('db');
        db.get_all_products()
        .then(product => res.status(200).send(product))
        .catch(err => res.status(500).send(err))
    },

    getAllSongs: (req, res) => {
        const db = req.app.get('db');
        db.get_all_songs()
        .then(songs => res.status(200).send(songs))
        .catch(err => res.status(500).send(err))
    },

    deleteSong: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
         console.log(req.params)
        db.delete_song(id)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    },

    addCart: (req, res) => {
        const db = req.app.get('db');
        // console.log(req.session.user)
        const {user_id} = req.session.user;
        const {id} = req.params
        const {qty, total} = req.body
         console.log(req.body)
        //  console.log(req.params)
        db.add_cart({user_id, id, qty, total})
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    },

    updateCart: (req, res) => {
        const db = req.app.get('db');
        const {cart_id} = req.params
        const {total, qty} = req.body
        console.log(req.body)
        console.log(req.params)
        db.update_cart(cart_id, total, qty)
        .then(total => res.status(200).send(total))
        .catch(err => res.status(500).send(err))
    },

    getAllCart: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params
        db.get_all_cart(id)
        .then(cart => res.status(200).send(cart))
        .catch(err => res.status(500).send(err))
    },

    deleteCartItem: (req, res) => {
        const db = req.app.get('db')
        const {cart_id} = req.params
         console.log(req.params)
        db.delete_cart_item(cart_id)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    },

    deleteAllCart: (req, res) => {
        const db = req.app.get('db')
        const {user_id} = req.params
         console.log(req.params)
        db.delete_all_cart(user_id)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    },

  
}