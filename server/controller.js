module.exports = {

    addEmail: (req, res) => {
        const db = req.app.get('db');
        const {email} = req.body;
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
  
}