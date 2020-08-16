const express = require('express');
const app = express();
// const querystring = require('querystring');
// const bodyParser = require('body-parser');

// const fs = require('fs')

// const urlParser = bodyParser.urlencoded({extended:false})

app.get('/api/movies', (req, res)=>{
    const movie = {
        name: 'Djon ba',
        gen: 'Luta',
        stars:['Brad pitt', 'Edward']
    }
    res.send(movie)
});

app.post('/api/movies', (req, res)=>{
    console.log(req, body)
})

const port = process.env.PORT || 3000;
 
app.listen(port)