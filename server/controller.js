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

     
    
}