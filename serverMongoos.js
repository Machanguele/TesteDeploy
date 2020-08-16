
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/test');

const carSchema = mongoose.Schema({
    brand: String,
    model: String,
    year: Number,
    avail: Boolean
});

const Car = mongoose.model('Car', carSchema);


//INSERT====
// const addCar = new Car(
//     {
//     brand:'Toyota',
//     model: 'Fiorce',
//     year: 2000,
//     avail:false
// }
// )

// addCar.save((err, doc)=>{
//     if(err) return console.log(err);
//     console.log(doc)

// })

//GETDATA
// Car.find({year:2000}, (err, doc)=>{
//     if(err) return console.log(err);
//     console.log(doc);
// })

//==========Delete
// Car.findOneAndRemove({year:2000}, (err, doc)=>{
//     if(err) return console.log(err);
//     console.log(doc);

// })

//======update======
Car.update(
    {_id:"5f352539ce5a590d68cc2d4a"},
    {
        $set: {brand:'Hozaa'}
    },
     (err, doc)=>{
    if(err) return console.log(err);
    console.log(doc);

})







