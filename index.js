const express=require('express');
const mongoose = require("mongoose");

const app=express();
const ejs=require('ejs');
const PORT=process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use( express.static( "views" ) );
//const Person = require("./Models/Person")

mongoose
.connect(
   ' mongodb+srv://albertdb:albertdb449@cluster0.wyknk.mongodb.net/sampletest?retryWrites=true&w=majority',
   {
       useNewUrlParser:true,
   }
   )
   .then(()=>console.log('mongodb conected'))
   .catch(err=>console.log(err));

   const UsersSchema=new mongoose.Schema({
        imgname1: {
           type: String,
            required : true,
        },
        imgname2: {
            type: String,
             required : true,
         },
         imgname3: {
            type: String,
             required : true,
         },
         imgname4: {
            type: String,
             required : true,
         },
         imgname5: {
            type: String,
             required : true,
         }
        
   });
   const Users=mongoose.model('Users', UsersSchema);

   app.get('/', (req, res) => {
       let name1="1.jpg";
       let name2="2.jpg";
       let name3="3.jpg";
       let name4="4.jpg";
       let name5="5.jpg";
    res.render('index',{
       
            imgname1:name1,
            imgname2:name2,
            imgname3:name3,
            imgname4:name4,
            imgname5:name5,

        
        // .then((user) => res.send(user))
        // .catch((err )=> res.send(err));
    });
});
// const { DB_CONNECTION_STRING } = process.env

// mongoose.connect(DB_CONNECTION_STRING)
// const db = mongoose.connection

// db.once('open', async function () {

//     //const john = new Person({ name: "John" })
//    // await john.save()
//     console.log('MongoDB successfully connected');

// })

// db.on('error', function (err) {
//     console.log(err);
// });



// app.get('/:id', async (req, res) => {

//     const id = req.params.id
//     const person = await Person.findById(id)
//     res.send(person)

// })

// app.get('/getyoungsters', async (req, res) => {
//     res.sendFile(__dirname + "/new.html");
  //  const people = await Person.find({ age: { $gte: 20 } })
   // res.send(people)

//})

// app.get('/',(req,res)=>{
//     // res.end('<h1>About Page</h1>')
//     res.sendFile(__dirname + "/new.html");
// })


app.listen(PORT,()=>{
    console.log('server has been started...')
})