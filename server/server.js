//------------------- IMPORTS NEEDED ---------------------

// Import express to connect mongoose 
// >>> require express from node_modules
const express = require('express');

// Import cors to connect with front en
const cors = require('cors');

// Instantiate express by storing in a variable app
const app = express();

// Establish PORT number 
// >>> global variable by convention should by all caps (PORT)
const PORT = 8000;

// Declaring DB that'll be used for app
const DB = 'authors_db';




//--------------------------- MIDDLEWARE -----------------------------
app.use(cors(), express.json(), express.urlencoded({extended: true}));




//------------------- FULL SERVER CRUD STEPS -------------------------
// 1. Connect mongodb by requiring the file here
// 2. Create mongoose schema
// 3. Use mongoose model to make CRUD functions -> talk to controller
// 4. Create routes to execute the functions to the db




// 1. DATABASE CONNECTION >>> Pass DB through exported mongoose connect function
require('./config/mongoose.config')(DB);


// 4. ROUTING CONNECTION
require('./routes/author.routes')(app);






// App listen function (param1 = PORT, param2 = callback function)
// Console log to see server is running and listening for requests
app.listen(PORT, () => {
    console.log(`*** Server up and running on PORT: ${PORT}! ***`)
})