// Execute CRUD functions from here >>> will be executed based on routes

// IMPORT MODEL >>> controller to use when performing CRUD functions
const Author = require('../models/author');



// ---------------------- CRUD Functions ------------------------
// >>> export functions with module.exports to send as object
// Keys will be name of function : Values will be function itself

module.exports = {

    // READ ALL AUTHORS
    findAllAuthors : (req, res) => {
        // same as db.authors.find()
        Author.find()
        // IMPORTANT - what we return here is what we receive in React!
            .then(allAuthors => res.json({ authors: allAuthors,
            message: 'success' }))
            .catch(err => res.json({ error: err,
            message: 'Something went wrong' }))
    },


    //READ ONE AUTHOR
    findOneAuthor : (req, res) => {
        console.log(req.params);
        Author.findById(req.params.id)
            .then(author => res.json({ author, 
            message: 'success' }))
            .catch(err => res.json({error: err,
            message: 'Something went wrong' }))
    },


    // CREATE NEW AUTHOR
    createNewAuthor : (req, res) => {
        console.log(req.body);

        Author.create(req.body)
        .then(newAuthor => res.json({ newAuthor,
        message: 'success' }))
        .catch(err => {
            console.log('SERVER ERR -> Write to DB / CREATE');
            
            // Platform
            //res.status(400).json(err)
            
            // Convention
            res.status(400).json({ error: err,
            message: 'error res' })
        })
    },


    // UPDATE AUTHOR
    updateAuthor: (req, res) => {
        console.log(req.params);
        console.log(req.body);
        Author.findByIdAndUpdate(req.params.id, req.body, {
            new: true, runValidators: true
        })
            .then( (updatedAuthor) => res.json({ updatedAuthor,
            message: 'success' }))
            .catch(err => res.json({ error: err,
            message: 'error res' }))
    },


    // DELETE AUTHOR
    deleteAuthor : (req, res) => {
        Author.findByIdAndDelete(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.json({ error: err,
            message: 'error res' }))
    }
}