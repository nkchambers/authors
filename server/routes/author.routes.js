// Import Author Controller
const Author = require('../controllers/author.controller');
console.log(Author);


module.exports = (app) => {
    // Test Route
    app.get('/api/authors/hello', (req, res) => {
        res.json({ message: 'Hi!' })
    })

    // CRUD Author Routes
    app.get('/api/authors', Author.findAllAuthors);
    app.get('/api/authors/:id', Author.findOneAuthor);
    app.put('/api/authors/update/:id', Author.updateAuthor);
    app.post('/api/authors/new', Author.createNewAuthor);
    app.delete('/api/authors/delete/:id', Author.deleteAuthor);
}