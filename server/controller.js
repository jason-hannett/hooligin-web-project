module.exports = {

    addEmail: (req, res) => {
        const db = req.app.get('db');
        const {id, email} = req.body;
         console.log(req.body)
        db.add_email({id, email})
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    }, 
    
}