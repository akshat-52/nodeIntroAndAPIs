const express = require('express');
const db = require("./database/db");
// const bodyParser = require('body-parser');

const app = express();

// parse application/json
app.use(express.json())
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
// ## get book based on author name


app.get("/", (req, res) =>{
    res.send("Welcome to Book Management APIs");
})

/** 
 *
 * @route  /books?book_id=&category=
 * @description "API to get all books"
 * @method GET
 * @params book_id string  --> Query Params
 *         category string --> Query Params
 * @return_Type JSON Object
 * 
*/

app.get("/books", (req, res) =>{
    var books = db.books;
    
    const {
        book_id,
        category
    } = req.query;

    console.log(book_id, category);

    if (book_id == undefined) {
        books = books.filter(book => book.book_id === book_id);
    }

    if (category !== undefined) {
        books = books.filter(book => book.category.includes(category));
    }
    var responseObj = {};
    if (books.length == 0) {
        responseObj = {
            data: {},
            message: `No book found for the BOOK ID of ${category}`,
            status: 404
        }
    } else {
        responseObj = {
            data: books,
            message: `Found ${books.length} BOOKs belonging to ${category}`,
            status: 200
        }
    }
    res.json(responseObj);
})

app.post('/books', (req, res) => {
    console.log(req);

    const {
        book
    } = req.body;
 
    
    if (db.books === undefined) db.books = [book];
    else db.books.push(book);
    res.json(db.books);
})

app.post('/authors', (req, res) => {
    console.log(req);

    const {
        author
    } = req.body;

    if (db.authors === undefined) db.authors = [author];
    else db.authors.push(author);
    res.json(db.authors);
})

/** 
 *
 * @route  /books/id/:book_id
 * @description "API to Get Books by book_id"
 * @method GET
 * @params book_id -- Route Param
 * @return_Type JSON Object
 * 
*/




app.get("books/:book_id", (req, res) =>{
    const {
        book_id
    } = req.params;

/*
    var allBooks = db.books;
    var book = {};
    for (let i=0; i < allBooks; i++) {
        const element = allBooks[i];
        if (book_id === element.book_id) {
            book = element;
            break;
        }
    }

res.json(book);
*/

    var result = db.books.filter(book => book.ISBN === isbn);

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
            message: `${book.title} found for the ISBN of ${isbn} `,
            status: 200
        }
    }
    res.json(responseObj);

})

/** 
 *
 * @route  /books/category/:category
 * @description "API to Get all of books based category"
 * @method GET
 * @params category -- Route Param
 * @return_Type JSON Object
 * 
*/

app.get("/books/category/:category/author/:author", (req, res) => {
    const {
        category
    } = req.params;

    var result = db.books.filter(book => book.category.includes(category));
    console.log(result);

    var responseObj = {};

    if (result.length == 0) {
        responseObj = {
            data: {},
            message: `No book found for the BOOK ID of ${category}`,
            status: 404
        }
    } else {
        var titles;
        for (let i=0; i < result.length; i++)
            titles += " " + result[i].title;

        responseObj = {
            data: result,
            message: `Found ${titles} Books belonging to ${category}`,
            status: 200
        }
    }
    res.json(responseObj);
}) 


app.get("/authors/publications/:publisher_id", (req, res) => {
    const {
        publisher_id,
    } = req.params;


    var publisher = db.publications.filter((publisher) => publisher.id == publisher_id)[0],
        result = [];

    /***
     * AL*ABL*PBL 
     * 
     * */
    for (let i = 0; i < db.authors.length; i++) {
        const author = db.authors[i];
        console.log(author);
        if (author.books.some(item => publisher.books.includes(item)))
            result.push(author);

        // for (let j = 0; j < author.books.length; j++) {
        //     if (publisher.books.includes(author.books[i])) {
        //         result.push(author);
        //         break;
        //     }
        // }
    }

    var responseObj = {};
    if (result.length == 0) {
        responseObj = {
            data: {},
            message: `No authors found for publisher of ${publisher.name}`,
            status: 404
        }
    } else {
        responseObj = {
            data: result,
            message: `${result.length} authors found for book ID of ${publisher.name}`,
            status: 200
        }
    }

    res.json(responseObj);
})

/*********** post *************
 * 
 * 
 * /BOOK/NEW
 * /AUTHOR
 * /PUBLICATION
 * 
 * 
 * 
 * 
 * 
 * 
 */

app.listen(port, () =>{
    console.log(`Listening at http://localhost:${port}`)
});