const express = require('express');
const app = express();

const port ='8000';


// APIs for a Book management system
// Book, Author and then publications

// GET



app.listen(port, () =>{
    console.log(`Listening at http://localhost:${port}`)
})