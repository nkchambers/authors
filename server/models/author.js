// Import mongoose to talk to authors_db
const mongoose = require('mongoose');


// The author schema - rules which author entries in db must follow
const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, '{PATH} is required.'],
        minLength: [3, '{PATH} must be at least 3 characters long.']
    }
}, {timestamps: true})




// Instantiate the author schema and export
// >>> controller will then use schema to make queries to db and execute CRUD functions
const Author = mongoose.model('Author', AuthorSchema);


// Exporting author model
module.exports = Author;