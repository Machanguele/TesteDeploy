const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017/test';

// MongoClient.connect(url, (err, db)=>{
//     if(err){
//        console.log('couldnt connect')
//     }
//     else{
//         console.log("connected!!!")
//     }
//     db.close();

// });

// MongoClient.connect(url, (err, db)=>{

//     const cars = [
//         {model:'toyota', year:'2020'},
//         {model:'BMW', year:'2037'}
//     ];

//     const collection = db.collection('documents');
//     db.collection('Cars').insertMany(cars
//         // model:'ford',
//         // year:2020

//     , (err, res)=>{
//         if(err){
//             return console.log('cannot insert'+err )
//         }
//         console.log(res.ops)

//     })
//     db.close();
// })

//find all
// MongoClient.connect(url, (err, db)=>{
//     db.collection('Cars')
//     .find()
//     .skip(1)
//     .limit(1)
//     .sort({"_id":-1})
//     .toArray().then(
//         data=>{
//             console.log(data);
//         }
//     );
//     db.close();
// })

//find specific
MongoClient.connect(url, (err, db)=>{
    db.collection('Cars')
    .findOneAndUpdate(
        {
        name:'Jose'
    },
    {
        $set:{
            lastname:'Maca'
        }
    },

    {
        returnOriginal:true
    },
    (err, doc)=>{
        console.log(doc)
    }
    
    )

    
   
    
    
    
    db.close();
})