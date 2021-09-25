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
 * @params NA
 * @return_Type JSON Object
 * 
*/

app.get("/", (req, res) =>{
    res.send("Welcome to Book Management APIs");
})

app.get("/books", (req, res) =>{
    var books = db.books;
    res.json(books);
})

app.get("books/:isbn", (req, res) =>{
    const {
        isbn
    } = req.params;
    var result = db.books.filter((book) => book.ISBN === isbn);

    console.log(result);
    var responseObj = {};

    if (result.length == 0) {
        responseObj = {
            data: [],
            message:`No Book found for the ISBN of ${isbn}`,
            status: 404
        }
    } else{
        var book = result[0];
        responseObj = {
            data: book,
            message: `${book.title} found for the ISBN of ${isbn} `
        }
    }

})


app.listen(port, () =>{
    console.log(`Listening at http://localhost:${port}`)
})