const express = require('express');
const app = express();

const port = '8080';


//Created Route
app.get('/',(req, res)=>{
    res.send("Hey, Yo. Local Host Check");
});

app.get('/articles',(req, res)=>{
    res.send("On Articles Page");
});


app.get('/articles/rest-api', (req, res) =>{

    const responseObj = {
        data : 'Article Info',
        message : 'API Call Successful'
    };
    res.json()
})



app.listen(port, () =>{
    console.log(`Listening at http://localhost:${port} `)
})

//added comment