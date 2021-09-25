const express = require('express');
const db = require("./database/db");

const app = express();

const port ='8000';


// APIs for a Book management system
// Book, Author and then publications

// GET --> 
// ## all books
// ## get the specific book based on ISBN
// ## get the specific book based on category
// ## all authors
// ## authors based on a book ISBN
// ## all publications
// ## authors belonging to specific publication


/** 
 *
 * @route  /books
 * @description "API to get all books"
 * @method GET
 * @params
 * @return_Type JSON Object
 * 
*/

app.get("/books", (req, res) =>{
    var books = db.books;
    res.json(books);
})


app.listen(port, () =>{
    console.log(`Listening at http://localhost:${port}`)
})