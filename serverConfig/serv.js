const express = require('express');
const app = express();
// const querystring = r
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:/27017/auth')

const {User} = require('./models/user')

app.use(bodyParser.json());

app.post('/api/user', (req, res)=>{
    const u = new User({
        email: req.body.email,
        password: req.body.password
    });

    console.log(u);
    res.send(u)

    // u.save((err, doc)=>{
    //     if(err) res.status(400).send(err);
    //     res.status(200).send(doc)
    // })

})





const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log('Started on '+port)
})